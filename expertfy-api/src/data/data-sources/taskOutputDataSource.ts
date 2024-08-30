import { TaskOutputModel } from "./models/task.output.model";
import { TaskOutputDataSource } from "../interfaces/data-sources/taskOutputDataSource";
import mysql, { RowDataPacket } from "mysql2/promise";

const tastOutputTable = "task_output";

export class TaskOutputDataSourceImpl implements TaskOutputDataSource {
  private db: mysql.Connection;

  constructor(db: mysql.Connection) {
    this.db = db;
  }
  public async createTaskOutput(taskOut: TaskOutputModel): Promise<boolean>{
    try {
      const query = `INSERT INTO ${tastOutputTable} 
      (id, name, ref, taskId) VALUES (?, ?, ?, ?)`;

      const values = [
        taskOut.id,
        taskOut.name,
        taskOut.ref
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

  public async updateTaskOutput(id: string, taskOut: TaskOutputModel): Promise<boolean>{
    try {
      const query = `UPDATE ${tastOutputTable} SET
      name=? ref=? taskId=? WHERE id=?`;

      const values = [
        taskOut.name,
        taskOut.ref,
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

  public async deleteTaskOutput(id: string): Promise<boolean>{
    try {
      const query = `DELETE FROM ${tastOutputTable} WHERE id=?`;
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

  public async getTaskOutputById(id: string): Promise<TaskOutputModel>{
    try {
      const query = `SELECT * FROM ${tastOutputTable} WHERE id=?`;
      const [rows] = await this.db.execute<RowDataPacket[]>(
        query,
        [id]
      );

      return rows[0] as TaskOutputModel;

    } catch (error) {
      console.log(error);
      return {} as TaskOutputModel;
    }
  }

  public async getAllTaskOutputs(): Promise<TaskOutputModel[]>{
    try {
      const query = `SELECT * FROM ${tastOutputTable}`;
      const [rows] = await this.db.execute<RowDataPacket[]>(
        query
      );

      if (rows && rows.length > 0) {
        return rows as TaskOutputModel[];
      }

      return [] as TaskOutputModel[];
    } catch (error) {
      console.log(error);
      return [] as TaskOutputModel[];
    }
  }
}