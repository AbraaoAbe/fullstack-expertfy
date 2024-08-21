import { SimpleListModel } from "./models/simple.list.model";
import { SkillTypeDataSource } from "../interfaces/data-sources/skillTypeDataSource";
import mysql, { RowDataPacket } from "mysql2/promise";

const skillTable = "skill_type";
export class SkillTypeDataSourceImpl implements SkillTypeDataSource {
  private db: mysql.Connection;
  constructor(db: mysql.Connection) {
    this.db = db;
  }


  public async createSkillType(skillType: SimpleListModel): Promise<boolean>{
    try {
      const query = `INSERT INTO ${skillTable}
      (name, description) VALUES (?, ?, ?)`;

      const values = [
        skillType.name,
        skillType.description
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

  public async updateSkillType(id: string, skillType: SimpleListModel): Promise<boolean>{
    try {
      const query = `UPDATE ${skillTable} SET
      name=?, description=? WHERE id=?`;

      const values = [
        skillType.name,
        skillType.description,
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

  public async deleteSkillType(id: string): Promise<boolean>{
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

  public async getSkillTypeById(id: string): Promise<SimpleListModel>{
    try {
      const query = `SELECT * FROM ${skillTable} WHERE id=?`;

      const [rows] = await this.db.execute<RowDataPacket[]>(
        query,
        [id]
      );

      if(rows && rows.length > 0){
        return rows[0] as SimpleListModel;
      }

      return {} as SimpleListModel;
    } catch (error) {
      console.log(error);
      return {} as SimpleListModel;
    }
  }
  public async getAllSkillTypes(): Promise<SimpleListModel[]>{
    try {
      const query = `SELECT * FROM ${skillTable}`;

      const [rows] = await this.db.execute<RowDataPacket[]>(
        query
      );

      if (rows && rows.length > 0) {
        return rows as SimpleListModel[];
      }

      return [] as SimpleListModel[];
    } catch (error) {
      console.log(error);
      return [] as SimpleListModel[];
    }
  }
}