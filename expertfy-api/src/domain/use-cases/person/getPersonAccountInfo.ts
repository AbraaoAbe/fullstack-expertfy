import { PersonModel } from "../../../data/data-sources/models/person.model";
import { PersonRepository } from "../../interfaces/repositories/personRepository";
import { GetPersonAccountInfoUseCase } from "../../interfaces/use-cases/person/getPersonAccountInfo";

export class GetPersonAccountInfoUseCaseImpl implements GetPersonAccountInfoUseCase {
  private personRepository: PersonRepository;

  constructor(personRepository: PersonRepository) {
    this.personRepository = personRepository;
  }

  public async execute(id: string): Promise<PersonModel> {
    const accountInfo = await this.personRepository.getPersonAccountInfo(id);
    return accountInfo;
  }
}