import { PersonModel } from "../../../../data/data-sources/models/person.model";

export interface GetPersonListBySkillTypeIdUseCase {
  execute(id: string): Promise<PersonModel[]>;
}