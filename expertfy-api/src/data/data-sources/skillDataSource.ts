import { SkillModel } from "./models/skill.model";
import { SkillDataSource } from "../interfaces/data-sources/skillDataSource";
import mysql, { RowDataPacket } from "mysql2/promise";

const skillTable = "skill";
export class SkillDataSourceImpl implements SkillDataSource {
  private db: mysql.Connection;
  constructor(db: mysql.Connection) {
    this.db = db;
  }


  public async createSkill(skill: SkillModel): Promise<boolean>{
    try {
      const query = `INSERT INTO ${skillTable}
      (personId, skillType, description) VALUES (?, ?, ?)`;

      const values = [
        skill.personId,
        skill.skillType,
        skill.description
      ]

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

  public async updateSkill(id: string, skill: SkillModel): Promise<boolean>{
    try {
      const query = `UPDATE ${skillTable} SET
      personId=?, skillType=?, description=? WHERE id=?`;

      const values = [
        skill.personId,
        skill.skillType,
        id
      ]

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

  public async deleteSkill(id: string): Promise<boolean>{
    try {
      const query = `DELETE FROM ${skillTable} WHERE id=?`;

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

  public async getSkillById(id: string): Promise<SkillModel>{
    try {
      const query = `SELECT * FROM ${skillTable} WHERE id=?`;

      const [rows] = await this.db.execute<RowDataPacket[]>(
        query,
        [id]
      );

      if(rows && rows.length > 0){
        return rows[0] as SkillModel;
      }

      return {} as SkillModel;
    } catch (error) {
      console.log(error);
      return {} as SkillModel;
    }
  }
  public async getAllSkills(): Promise<SkillModel[]>{
    try {
      const query = `SELECT * FROM ${skillTable}`;

      const [rows] = await this.db.execute<RowDataPacket[]>(
        query
      );

      if (rows && rows.length > 0) {
        return rows as SkillModel[];
      }

      return [] as SkillModel[];
    } catch (error) {
      console.log(error);
      return [] as SkillModel[];
    }
  }
}