import { PersonRepository } from "../../interfaces/repositories/personRepository";
import { GetSkillIdByPersonAndSkillTypeUseCase } from "../../interfaces/use-cases/person/getSkillIdByPersonAndSkillType";

export class GetSkillIdByPersonAndSkillTypeUseCaseImpl
  implements GetSkillIdByPersonAndSkillTypeUseCase
{
  private personRepository: PersonRepository;
  constructor(personRepository: PersonRepository) {
    this.personRepository = personRepository;
  }

  public async execute(personId: string, skillTypeId: string): Promise<string> {
    return await this.personRepository.getSkillIdByPersonAndSkillTypeId(
      personId,
      skillTypeId
    );
  }
}