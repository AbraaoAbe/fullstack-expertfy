import { PersonModel } from "../../../data/data-sources/models/person.model";

export interface PersonRepository {
  createPerson(person: PersonModel): Promise<boolean>;
  updatePerson(id: string, person: PersonModel): Promise<boolean>;
  deletePerson(id: string): Promise<boolean>;
  getPersonById(id: string): Promise<PersonModel>;
  getAllPerson(): Promise<PersonModel[]>;
  getPersonAccountInfo(id: string): Promise<PersonModel>;
  getPersonListBySkillTypeId(id: string): Promise<PersonModel[]>;
  getSkillIdByPersonAndSkillTypeId(personId: string, skillTypeId: string): Promise<string>;
}