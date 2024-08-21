import { PersonModel } from "../../../../data/data-sources/models/person.model"; 

export interface CreatePersonUseCase {
    execute(person: PersonModel): Promise<boolean>;
}