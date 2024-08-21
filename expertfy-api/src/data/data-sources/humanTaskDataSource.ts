import { HumanTaskModel } from "./models/human.task.model";
import { HumanTaskDataSource } from "../interfaces/data-sources/humanTaskDataSource";
import mysql, { RowDataPacket } from "mysql2/promise";
import { PersonCountDTO } from "../../domain/models/personCountDTO";
import { PersonTableDTO } from "../../domain/models/personTableDTO";
import { HumanTaskCountDTO } from "../../domain/models/humanTaskCountDTO";


const humanTaskTable = "human_task";
const skillTable = "skill";
const skillTypeTable = "skill_type";

export class HumanTaskDataSourceImpl implements HumanTaskDataSource {
  private db: mysql.Connection;

  constructor(db: mysql.Connection) {
    this.db = db;
  }

  public async createHumanTask(taskOut: HumanTaskModel): Promise<boolean>{
    try {
      const query = `INSERT INTO ${humanTaskTable} 
      (skillId, taskOutputId, taskType) VALUES (?, ?, ?)`;

      const values = [
        taskOut.skillId,
        taskOut.taskOutputId,
        taskOut.taskType,
      ];

      const [rows] = await this.db.execute<RowDataPacket[]>(
        query,
        values
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  public async updateHumanTask(id: string, humanTask: HumanTaskModel): Promise<boolean>{
    try {
      const query = `UPDATE ${humanTaskTable} SET
      skillId=?, taskOutputId=?, taskType=? WHERE id=?`;

      const values = [
        humanTask.skillId,
        humanTask.taskOutputId,
        humanTask.taskType,
        id
      ];

      const [rows] = await this.db.execute<RowDataPacket[]>(
        query,
        values
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  public async deleteHumanTask(id: string): Promise<boolean>{
    try {
      const query = `DELETE FROM ${humanTaskTable} WHERE id=?`;
      const [rows] = await this.db.execute<RowDataPacket[]>(
        query,
        [id]
      );
      return true;

    } catch (error) {
      console.log(error);
      return false;
    }
  }
  public async getHumanTaskById(id: string): Promise<HumanTaskModel>{
    try {
      const query = `SELECT * FROM ${humanTaskTable} WHERE id=?`;
      const [rows] = await this.db.execute<RowDataPacket[]>(
        query,
        [id]
      );
      return rows[0] as HumanTaskModel;

    } catch (error) {
      console.log(error);
      return {} as HumanTaskModel;
    }
  }
  public async getAllHumanTasks(): Promise<HumanTaskModel[]>{
    try {
      const query = `SELECT * FROM ${humanTaskTable}`;
      const [rows] = await this.db.execute<RowDataPacket[]>(
        query
      );

      if (rows && rows.length > 0)
        return rows as HumanTaskModel[];

      return [] as HumanTaskModel[];
    } catch (error) {
      console.log(error);
      return [] as HumanTaskModel[];
    }
  }

  public async getCountGroupByPersonHumanTasksBySkillType(skillTypeId: string): Promise<PersonCountDTO[]>{
    try {
      
      const query = `SELECT COUNT(*) as count, S.personId FROM ${humanTaskTable} H
            JOIN ${skillTable} S ON H.skillId = S.id
            WHERE S.skillType = ${skillTypeId}
            GROUP BY S.personId ;`;

      const [rows] = await this.db.execute<RowDataPacket[]>(
        query
      )

      return rows as PersonCountDTO[]

    } catch (error) {
      console.log(error);
      return [] as PersonCountDTO[]
    }
  }

  public async getHumanTaskTableListByPersonId(personId: string): Promise<PersonTableDTO[]>{
    try {
      const query = `SELECT H.id, T.name AS taskname, T.ref AS artefact, S.skilltype, ST.name AS skillname, ST.description, date, H.skillId as skillId 
            FROM ${humanTaskTable} H
            JOIN ${skillTable} S ON H.skillId = S.id
            JOIN ${skillTypeTable} ST ON S.skillType = ST.id
            JOIN task_output T ON H.taskOutputId = T.id 
            where S.personId = ${personId}
            ORDER BY date DESC;`;

      const [rows] = await this.db.execute<RowDataPacket[]>(
        query
      )

      return rows as PersonTableDTO[]
    } catch (error) {
      console.log(error);
      return [] as PersonTableDTO[]
    }
  }

  public async getCountHumanTaskByPersonGroupBySkill(personId: string): Promise<HumanTaskCountDTO[]>{
    try {
      const query = `SELECT skillType AS id, ST.name, COUNT(*) AS total FROM ${humanTaskTable} H
            JOIN ${skillTable} S ON H.skillId = S.id
            JOIN ${skillTypeTable} ST ON S.skillType = ST.id
            WHERE S.personId = ${personId}
            GROUP BY S.skillType;`;

      const [rows] = await this.db.execute<RowDataPacket[]>(
        query
      )

      return rows as HumanTaskCountDTO[]
    } catch (error) {
      console.log(error);
      return [] as HumanTaskCountDTO[]
    }
  }

  public async getTotalCountHumanTaskGroupBySkill(): Promise<HumanTaskCountDTO[]>{
    try {
      const query = `SELECT skillType AS id, ST.name, COUNT(*) AS total FROM ${humanTaskTable} H
            JOIN ${skillTable} S ON H.skillId = S.id
            JOIN ${skillTypeTable} ST ON S.skillType = ST.id
            GROUP BY S.skillType;`;

      const [rows] = await this.db.execute<RowDataPacket[]>(
        query
      )

      if (rows && rows.length > 0)
        return rows as HumanTaskCountDTO[]

      return [] as HumanTaskCountDTO[]
    } catch (error) {
      console.log(error);
      return [] as HumanTaskCountDTO[]
    }
  }
}