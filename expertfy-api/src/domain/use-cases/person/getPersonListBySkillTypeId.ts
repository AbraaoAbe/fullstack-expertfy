import { PersonModel } from "../../../data/data-sources/models/person.model";
import { GetPersonListBySkillTypeIdUseCase } from "../../interfaces/use-cases/person/getPersonListBySkillTypeId";
import { PersonRepository } from "../../interfaces/repositories/personRepository";

export class GetPersonListBySkillTypeIdUseCaseImpl implements GetPersonListBySkillTypeIdUseCase {
  private personRepository: PersonRepository;

  constructor(personRepository: PersonRepository) {
    this.personRepository = personRepository;
  }

  public async execute(skillTypeId: string): Promise<PersonModel[]> {
    return await this.personRepository.getPersonListBySkillTypeId(skillTypeId);
  }
}