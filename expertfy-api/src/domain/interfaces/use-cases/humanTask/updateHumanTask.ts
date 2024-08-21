import { HumanTaskModel } from "../../../../data/data-sources/models/human.task.model";

export interface UpdateHumanTaskUseCase {
    execute(id: string, skill: HumanTaskModel): Promise<boolean>;
}