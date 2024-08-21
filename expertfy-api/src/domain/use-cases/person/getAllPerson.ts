import { PersonModel } from "../../../data/data-sources/models/person.model";
import { PersonRepository } from "../../interfaces/repositories/personRepository";
import { GetAllPersonUseCase } from "../../interfaces/use-cases/person/getAllPerson";

export class GetAllPersonUseCaseImpl implements GetAllPersonUseCase {
  private personRepository: PersonRepository;

  constructor(personRepository: PersonRepository) {
    this.personRepository = personRepository;
  }

  public async execute(): Promise<PersonModel[]> {
    const persons = await this.personRepository.getAllPerson();
    return persons;
  }
}