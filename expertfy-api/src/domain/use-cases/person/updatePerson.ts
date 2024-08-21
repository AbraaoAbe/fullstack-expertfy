import { PersonModel } from "../../../data/data-sources/models/person.model";
import { UpdatePersonUseCase } from "../../interfaces/use-cases/person/updatePerson";
import { PersonRepository } from "../../interfaces/repositories/personRepository";

export class UpdatePersonUseCaseImpl implements UpdatePersonUseCase {
  private personRepository: PersonRepository;

  constructor(personRepository: PersonRepository) {
    this.personRepository = personRepository;
  }

  public async execute(id: string, person: PersonModel): Promise<boolean> {
    const updatedPerson = await this.personRepository.updatePerson(id, person);
    return updatedPerson;
  }
}