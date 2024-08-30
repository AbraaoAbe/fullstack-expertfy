import { PersonModel } from "../../data/data-sources/models/person.model";
import { PersonRepository } from "../interfaces/repositories/personRepository";
import { PersonDataSource } from "../../data/interfaces/data-sources/personDataSource";

export class PersonRepositoryImpl implements PersonRepository {
  private personDataSource: PersonDataSource;

  constructor(personDataSource: PersonDataSource) {
    this.personDataSource = personDataSource;
  }

  public async createPerson(person: PersonModel): Promise<boolean> {
    const result = await this.personDataSource.createPerson(person);
    return result;
  }

  public async updatePerson(id: string, person: PersonModel): Promise<boolean> {
    const result = await this.personDataSource.updatePerson(id, person);
    return result;
  }

  public async deletePerson(id: string): Promise<boolean> {
    const deletedPerson = await this.personDataSource.deletePerson(id);
    return deletedPerson;
  }

  public async getPersonById(id: string): Promise<PersonModel> {
    const person = await this.personDataSource.getPersonById(id);
    return person;
  }

  public async getAllPerson(): Promise<PersonModel[]> {
    const persons = await this.personDataSource.getAllPersons();
    return persons;
  }


  public async getPersonAccountInfo(id: string): Promise<PersonModel> {
    const personAccountInfo = await this.personDataSource.getPersonAccountInfo(id);
    return personAccountInfo;
  }

  public async getPersonListBySkillTypeId(id: string): Promise<PersonModel[]> {
    const personListBySkillTypeId = await this.personDataSource.getPersonListBySkillTypeId(id);
    return personListBySkillTypeId;
  }

  public async getSkillIdByPersonAndSkillTypeId(personId: string, skillTypeId: string): Promise<string> {
    const skillIdByPersonAndSkillTypeId = await this.personDataSource.getSkillIdByPersonAndSkillType(personId, skillTypeId);
    return skillIdByPersonAndSkillTypeId;
  }
}