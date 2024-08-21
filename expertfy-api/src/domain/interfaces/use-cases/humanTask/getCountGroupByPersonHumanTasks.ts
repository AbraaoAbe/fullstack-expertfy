import { PersonCountDTO } from "../../../models/personCountDTO";

export interface GetCountGroupByPersonHumanTasksUsecase {
    execute(skillTypeId: string): Promise<PersonCountDTO[]>
}