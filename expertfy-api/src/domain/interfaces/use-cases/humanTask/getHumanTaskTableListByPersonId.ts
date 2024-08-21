import { PersonTableDTO } from "../../../models/personTableDTO";

export interface GetHumanTaskTableListByPersonIdUseCase {
    execute(personId: string): Promise<PersonTableDTO[]>;
}