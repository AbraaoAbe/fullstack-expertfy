import { PersonModel } from "../../../../data/data-sources/models/person.model";
export interface GetAllPersonUseCase {
    execute(): Promise<PersonModel[]>;
}