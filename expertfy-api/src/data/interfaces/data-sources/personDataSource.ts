import { ExpertListDTO } from "../../../domain/models/expertListDTO";
import { PersonModel } from "../../data-sources/models/person.model";

//* This interface is used to define the methods that will be used to interact with the person table.
export interface PersonDataSource {
  createPerson(person: PersonModel): Promise<boolean>;
  updatePerson(id: string, person: PersonModel): Promise<boolean>;
  deletePerson(id: string): Promise<boolean>;
  getPersonById(id: string): Promise<PersonModel>;
  getAllPersons(): Promise<PersonModel[]>;
  getPersonAccountInfo(id: string): Promise<PersonModel>;
  getPersonListBySkillTypeId(id: string): Promise<ExpertListDTO[]>;
  getSkillIdByPersonAndSkillType(personId: string, skillType: string): Promise<string>;
}