import { PersonModel } from "./models/person.model";
import { PersonDataSource } from "../interfaces/data-sources/personDataSource";
import { ExpertListDTO } from "../../domain/models/expertListDTO";
import mysql, { RowDataPacket } from "mysql2/promise";

const personTable = "person";
const skillTypeTable = "skill_type";
const skillTable = "skill";
const languageTable = "language";
const languagePersonTable = "language_person";

export class PersonDataSourceImpl implements PersonDataSource {
  private db: mysql.Connection;

  constructor(db: mysql.Connection) {
    this.db = db;
  }

  public async createPerson(person: PersonModel): Promise<boolean> {
    try {
      const query = `INSERT INTO ${personTable} 
      (name, lastName, birthDate, email, photo, phone, linkedin, 
      employmentStartDate, seniorityId, areaId)
      VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      
      const values = [
        person.name,
        person.lastName,
        person.birthDate,
        person.email,
        person.photo, 
        person.phone,
        person.linkedin,
        person.employmentStartDate,
        person.seniorityId,
        person.areaId,
      ];
  
      const [rows] = await this.db.execute<RowDataPacket[]>(query, values);
  
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  

  public async updatePerson(id: string, person: PersonModel): Promise<boolean> {
    try {
      const query = `UPDATE ${personTable} SET
      name=?, lastName=?, birthDate=?, email=?, photo=?, phone=?, linkedin=?, 
      employmentStartDate=?, seniorityId=?, areaId=? 
      WHERE id=?`;
  
      const values = [
        person.name,
        person.lastName,
        person.birthDate,
        person.email,
        person.photo, 
        person.phone,
        person.linkedin,
        person.employmentStartDate,
        person.seniorityId,
        person.areaId,
        id, 
      ];
  
      const [rows] = await this.db.execute<RowDataPacket[]>(query, values);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  
  public async deletePerson(id: string): Promise<boolean> {
    try {
      const query = `DELETE FROM ${personTable} WHERE id=?`;
      const [rows] = await this.db.execute<RowDataPacket[]>(query, [id]);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  
  public async getPersonById(id: string): Promise<PersonModel> {
    try {
      const query = `SELECT * FROM ${personTable} WHERE id=?`;
      const [rows] = await this.db.execute<RowDataPacket[]>(query, [id]);
  
      if(rows && rows.length > 0){
        return rows[0] as PersonModel;
      }
      return {} as PersonModel;
    } catch (error) {
      console.log(error);
      return {} as PersonModel;
    }
  }
  
  public async getAllPersons(): Promise<PersonModel[]> {
    const query = `SELECT * FROM ${personTable}`;
    
    try {
      const [rows] = await this.db.execute<RowDataPacket[]>(query);

      return rows as PersonModel[];

    } catch (error) {
      console.log(error);
      return [] as PersonModel[];
    }
    return [];
  }


  
  public async getPersonAccountInfo(id: string): Promise<PersonModel> {
    try {
      const query = `
      SELECT persons.*,
        s.name AS seniority,
        a.name AS area,
        GROUP_CONCAT(l.name ORDER BY l.name ASC SEPARATOR ', ') AS languages,
        GROUP_CONCAT(DISTINCT ta.team_name ORDER BY ta.team_name ASC SEPARATOR ', ') AS teams
      FROM ${personTable} persons
      JOIN seniority s ON persons.seniorityId = s.id
      JOIN area a ON persons.areaId = a.id
      LEFT JOIN language_person lp ON persons.id = lp.personId
      LEFT JOIN language l ON lp.languageId = l.id 
      LEFT JOIN team_assignment ta ON persons.id = ta.personId
      WHERE persons.id = ${id};
    `;
      const [rows] = await this.db.execute<RowDataPacket[]>(query, [id]);
      
      if(rows && rows.length > 0){
        return rows[0] as PersonModel;
      }
      console.log(rows)
      return {} as PersonModel;
    } catch (error) {
      console.log(error);
      return {} as PersonModel;
    }
  }

  public async getPersonListBySkillTypeId(id: string): Promise<ExpertListDTO[]> {
    try {
    const query = `
          SELECT P.id, P.name, P.lastName, P.phone, P.email, P.linkedin, P.birthDate, 
          P.employmentStartDate, P.photo, P.seniorityId, P.areaId, P.office,
          se.name AS seniority, ar.name AS area,
          GROUP_CONCAT(l.name ORDER BY l.name ASC SEPARATOR ', ') AS languages,
          GROUP_CONCAT(DISTINCT ta.team_name ORDER BY ta.team_name ASC SEPARATOR ', ') AS teams
      FROM (
          SELECT DISTINCT personId
          FROM ${skillTable}
          WHERE skillType = ${id}
      ) AS unique_skills
      JOIN ${personTable} P ON unique_skills.personId = P.id
      JOIN seniority se ON P.seniorityId = se.id
      JOIN area ar ON P.areaId = ar.id
      LEFT JOIN ${languagePersonTable} lp ON P.id = lp.personId
      LEFT JOIN ${languageTable} l ON lp.languageId = l.id
      LEFT JOIN team_assignment ta ON P.id = ta.personId
      GROUP BY P.id, P.name, P.lastName, P.phone, P.email, P.linkedin, P.birthDate, 
          P.employmentStartDate, P.photo, P.seniorityId, P.areaId, P.office,
          se.name, ar.name`;

      const [rows] = await this.db.execute<RowDataPacket[]>(query);
      
      if(rows && rows.length > 0){
        return rows as ExpertListDTO[];
      }
      return [] as ExpertListDTO[];
    } catch (error) {
      console.log(error);
      return [] as ExpertListDTO[];
    }
  }

  public async getSkillIdByPersonAndSkillType(personId: string, skillType: string): Promise<string> {
    try {
      console.log(personId, skillType)
      const query = `SELECT id FROM ${skillTable} WHERE personId = ${personId} AND skillType = ${skillType}`;
      console.log(query)
      const [rows] = await this.db.execute<RowDataPacket[]>(query, [personId, skillType]);
      console.log(rows)
      console.log(rows[0])
      console.log(rows[0].id)
      return rows[0].id as string;

    } catch (error) {
      console.log(error);
      return '';
    }
  }
}