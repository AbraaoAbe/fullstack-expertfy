import { SimpleListModel } from "./models/simple.list.model"
import { SeniorityDataSource } from "../interfaces/data-sources/seniorityDataSource"; 
import mysql, { RowDataPacket } from "mysql2/promise";

const seniorityTable = "seniority";

export class SeniorityDataSourceImpl implements SeniorityDataSource {
  private db: mysql.Connection;

  constructor(db: mysql.Connection) {
    this.db = db;
  }

  public async getAllSeniority(): Promise<SimpleListModel[]> {
    try {
      const [rows, fields] = await this.db.query(`SELECT * FROM ${seniorityTable}`);
      if (Array.isArray(rows)) {
        const newrows = rows as RowDataPacket[];
        const languages = newrows.map((row) => {
          return {
            id: row.id,
            name: row.name,
          } as SimpleListModel;
        });
        return languages;
      }
      return [];
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
