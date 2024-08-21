import { PersonModel } from "../../../../data/data-sources/models/person.model"; 

export interface DeletePersonUseCase {
    execute(id: string): Promise<boolean>;
}