import { AttitudeEndorsementModel } from "./models/attitude.endorsement.model";
import { AttitudeEndorsDataSource } from "../interfaces/data-sources/attitudeEndorsDataSource";
import mysql, { RowDataPacket } from "mysql2/promise";

const attitudeEndorsementTable = "attitude_endors";
export class AttitudeEndorsDataSourceImpl implements AttitudeEndorsDataSource {
  private db: mysql.Connection;
  constructor(db: mysql.Connection) {
    this.db = db;
  }

  public async createAttitudeEndors(endors: AttitudeEndorsementModel): Promise<boolean>{
    try {
      const query = `INSERT INTO ${attitudeEndorsementTable}
      (personId, attitudeId, description, date)
      VALUES (?, ?, ?, ?)`;

      const values = [
        endors.personId,
        endors.attitudeId,
        endors.description,
        endors.date
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

  public async updateAttitudeEndors(id: string, endors: AttitudeEndorsementModel): Promise<boolean>{
    try {
      const query = `UPDATE ${attitudeEndorsementTable} SET
      personId=?, attitudeId=?, description=?, date=?
      WHERE id=?`;

      const values = [
        endors.personId,
        endors.attitudeId,
        endors.description,
        endors.date,
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
  public async deleteAttitudeEndors(id: string): Promise<boolean>{
    try {
      const query = `DELETE FROM ${attitudeEndorsementTable} 
      WHERE id=?`;


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

  public async getAttitudeByIdEndors(id: string): Promise<AttitudeEndorsementModel>{
    try {
      const query = `SELECT * FROM ${attitudeEndorsementTable} 
      WHERE id=?`;

      const [rows] = await this.db.execute<RowDataPacket[]>(
        query, 
        [id]
      );

      if (rows && rows.length > 0){
        return rows[0] as AttitudeEndorsementModel;
      }

      return {} as AttitudeEndorsementModel;
    } catch (error) {
      console.log(error);
      return {} as AttitudeEndorsementModel;
    }
  }

  public async getAllAttitudesEndors(): Promise<AttitudeEndorsementModel[]>{
    try {
      const query = `SELECT * FROM ${attitudeEndorsementTable}`;

      const [rows] = await this.db.execute<RowDataPacket[]>(
        query, 
      );

      return rows as AttitudeEndorsementModel[];

    } catch (error) {
      console.log(error);
      return [] as AttitudeEndorsementModel[];
    }
  }
}