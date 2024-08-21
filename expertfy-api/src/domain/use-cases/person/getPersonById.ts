import { PersonModel } from "../../../data/data-sources/models/person.model";
import { GetPersonByIdUseCase } from "../../interfaces/use-cases/person/getPersonById";
import { PersonRepository } from "../../interfaces/repositories/personRepository";

export class GetPersonByIdUseCaseImpl implements GetPersonByIdUseCase {
  private personRepository: PersonRepository;

  constructor(personRepository: PersonRepository) {
    this.personRepository = personRepository;
  }

  public async execute(id: string): Promise<PersonModel> {
    const person = await this.personRepository.getPersonById(id);
    return person;
  }
}