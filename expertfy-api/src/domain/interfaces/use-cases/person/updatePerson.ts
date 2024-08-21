import { PersonModel } from "../../../../data/data-sources/models/person.model";

export interface UpdatePersonUseCase {
    execute(id: string, user: PersonModel): Promise<boolean>;
}