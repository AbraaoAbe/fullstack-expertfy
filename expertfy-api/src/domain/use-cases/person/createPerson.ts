import { PersonModel } from "../../../data/data-sources/models/person.model";
import { PersonRepository } from "../../interfaces/repositories/personRepository";
import { CreatePersonUseCase } from "../../interfaces/use-cases/person/createPerson";

export class CreatePersonUseCaseImpl implements CreatePersonUseCase {
  private personRepository: PersonRepository;

  constructor(personRepository: PersonRepository) {
    this.personRepository = personRepository;
  }

  public async execute(person: PersonModel): Promise<boolean> {
    const newPerson = await this.personRepository.createPerson(person);
    return newPerson;
  }
}