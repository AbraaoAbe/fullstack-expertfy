import { PersonModel } from "../../../../data/data-sources/models/person.model";

export interface GetPersonAccountInfoUseCase {
    execute(id: string): Promise<PersonModel>;
}