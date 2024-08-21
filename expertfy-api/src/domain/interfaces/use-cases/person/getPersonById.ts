import { PersonModel } from "../../../../data/data-sources/models/person.model";
export interface GetPersonByIdUseCase {
    execute(id: string): Promise<PersonModel>;
}