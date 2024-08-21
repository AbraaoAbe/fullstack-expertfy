import { PersonModel } from "../../../data/data-sources/models/person.model";
import { PersonRepository } from "../../interfaces/repositories/personRepository";
import { DeletePersonUseCase } from "../../interfaces/use-cases/person/deletePerson";

export class DeletePersonUseCaseImpl implements DeletePersonUseCase {
  private personRepository: PersonRepository;

  constructor(personRepository: PersonRepository) {
    this.personRepository = personRepository;
  }

  public async execute(id: string): Promise<boolean> {
    const deletedPerson = await this.personRepository.deletePerson(id);
    return deletedPerson;
  }
}