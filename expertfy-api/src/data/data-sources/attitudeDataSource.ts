import { AttitudeModel } from "./models/attitude.model"; 
import { AttitudeDataSource } from "../interfaces/data-sources/attitudeDataSource";
import mysql, { RowDataPacket } from "mysql2/promise";


const attitudeTable = "attitude";
export class AttitudeDataSourceImpl implements AttitudeDataSource {
  private db: mysql.Connection;
  constructor(db: mysql.Connection) {
    this.db = db;
  }

  public async createAttitude(attitude: AttitudeModel): Promise<boolean> {
    try {
      const query = `INSERT INTO ${attitudeTable} 
      (personId, attitudeType) VALUES (?, ?)`;

      const values = [
        attitude.personId,
        attitude.attitudeType
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

  public async getAttitudeById(id: string): Promise<AttitudeModel> {
    try {
      const query = `SELECT * FROM ${attitudeTable} WHERE id=?`;

      const [rows] = await this.db.execute<RowDataPacket[]>(
        query,
        [id]
      );

      if (rows && rows.length > 0) {
        return rows[0] as AttitudeModel;
      }

      return {} as AttitudeModel;
    } catch (error) {
      console.log(error);
      return {} as AttitudeModel;
    }
  }

  public async getAllAttitudes(): Promise<AttitudeModel[]> {
    const query = `SELECT * FROM ${attitudeTable}`;

    try {
      const [rows] = await this.db.execute<RowDataPacket[]>(
        query
      );

      return rows as AttitudeModel[];

    } catch (error) {
      console.log(error);
      return [] as AttitudeModel[];
    }
  }

  public async deleteAttitude(id: string): Promise<boolean> {
    try {
      const query = `DELETE FROM ${attitudeTable} WHERE id=?`;

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

  public async updateAttitude(id: string, attitude: AttitudeModel): Promise<boolean> {
    try {
      const query = `UPDATE ${attitudeTable} SET
      personId=?, attitudeType=? WHERE id=?`;

      const values = [
        attitude.personId,
        attitude.attitudeType,
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

}