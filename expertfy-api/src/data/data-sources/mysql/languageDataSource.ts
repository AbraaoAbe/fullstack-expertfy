import { SimpleListModel } from "../../../domain/models/simpleListModel";
import { languageDataSource } from "../../interfaces/data-sources/languageDataSource";
import mysql, { RowDataPacket } from "mysql2/promise";

const languageTable = "language";

export class languageDataSourceImpl implements languageDataSource {
  private db: mysql.Connection;

  constructor(db: mysql.Connection) {
    this.db = db;
  }

  public async getAllLanguages(): Promise<SimpleListModel[]> {
    try {
      const [rows, fields] = await this.db.query(`SELECT * FROM ${languageTable}`);
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
