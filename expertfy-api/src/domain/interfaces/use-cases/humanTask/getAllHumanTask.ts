import { HumanTaskModel } from "../../../../data/data-sources/models/human.task.model";

export interface GetAllHumanTaskUseCase {
    execute(): Promise<HumanTaskModel[]>;
}