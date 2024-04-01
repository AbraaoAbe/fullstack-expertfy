import { userModel } from "../../../domain/models/userModel";
import { expertListModel } from "../../../domain/models/expertListModel";
import { userDataSource } from "../../interfaces/data-sources/userDataSource";
import mysql, { RowDataPacket } from "mysql2/promise";

const userTable = "user";
const manifestTable = "manifestcompetence";

export class userDataSourceImpl implements userDataSource {
  private db: mysql.Connection;

  constructor(db: mysql.Connection) {
    this.db = db;
  }

  public async createUser(user: userModel): Promise<boolean> {
    try {
      const query = `INSERT INTO ${userTable} 
      (name, lastName, birthDate, email, photo, phone, linkedin, 
        team, employmentStartDate, languageId, seniorityId, areaId)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      
      const values = [
        user.name,
        user.lastName,
        user.birthDate,
        user.email,
        user.photo, 
        user.phone,
        user.linkedin,
        user.team,
        user.employmentStartDate,
        user.languageId,
        user.seniorityId,
        user.areaId,
      ];
  
      const [rows, fields] = await this.db.query(query, values);
  
      if (Array.isArray(rows)) {
        const newrows = rows as RowDataPacket[];
        const id = newrows[0].id;
        return true;
      }
  
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  

  public async updateUser(id: string, user: userModel): Promise<boolean> {
    try {
      const query = `UPDATE ${userTable} SET
      name=?, lastName=?, birthDate=?, email=?, photo=?, phone=?, linkedin=?, 
      team=?, employmentStartDate=?, languageId=?, seniorityId=?, areaId=? 
      WHERE id=?`;
  
      const values = [
        user.name,
        user.lastName,
        user.birthDate,
        user.email,
        user.photo, 
        user.phone,
        user.linkedin,
        user.team,
        user.employmentStartDate,
        user.languageId,
        user.seniorityId,
        user.areaId,
        id, 
      ];
  
      const [rows, fields] = await this.db.query(query, values);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  
  public async deleteUser(id: string): Promise<boolean> {
    try {
      const query = `DELETE FROM ${userTable} WHERE id=?`;
      const [rows, fields] = await this.db.query(query, [id]);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  
  public async getUserById(id: string): Promise<userModel> {
    try {
      const query = `SELECT * FROM ${userTable} WHERE id=?`;
      const [rows, fields] = await this.db.query(query, [id]);
  
      if (Array.isArray(rows)) {
        const newrows = rows as RowDataPacket[];
        const user = newrows[0] as userModel; 
        return user;
      }
      return {} as userModel;
    } catch (error) {
      console.log(error);
      return {} as userModel;
    }
  }
  
  public async getAllUsers(): Promise<userModel[]> {
    const query = `SELECT * FROM ${userTable}`;
    
    try {
      const [rows, fields] = await this.db.query(query);

      if (Array.isArray(rows)){
        const newrows = rows as RowDataPacket[];
        const users = newrows as userModel[];
        return users;
      }

    } catch (error) {
      console.log(error);
      return [] as userModel[];
    }
    return [];
  }


  public async getUsersAndCountByCompetenceId(competenceId: string): Promise<expertListModel[]> {
    try {
      const query = `
      SELECT
        users.*,
        (SELECT COUNT(*) FROM ${manifestTable} WHERE userId = users.id AND competenceId = '${competenceId}') AS competenceCount,
        s.name AS seniorityName
      FROM ${userTable} users JOIN seniority s ON users.seniorityId = s.id
      WHERE users.id IN (SELECT userId FROM ${manifestTable} WHERE competenceId = '${competenceId}')
      ORDER BY competenceCount DESC;
    `;
      const [rows, fields] = await this.db.query(query);
      
      if (Array.isArray(rows)) {
        const newrows = rows as RowDataPacket[];
        const users: expertListModel[] = newrows.map((row: RowDataPacket) => {
          const user: expertListModel = {
            id: row.id,
            name: row.name,
            lastName: row.lastName,
            birthDate: row.birthDate,
            email: row.email,
            photo: row.photo,
            phone: row.phone,
            linkedin: row.linkedin,
            team: row.team,
            employmentStartDate: row.employmentStartDate,
            languageId: row.languageId,
            seniorityId: row.seniorityId,
            areaId: row.areaId,
            office: row.office,
            competenceCount: row.competenceCount,
            seniorityName: row.seniorityName,
          };
            
          return user;
        });
  
        return users;
      }
      return [] as expertListModel[];
    } catch (error) {
      console.log(error);
      return [] as expertListModel[];
    }
  }
  
}