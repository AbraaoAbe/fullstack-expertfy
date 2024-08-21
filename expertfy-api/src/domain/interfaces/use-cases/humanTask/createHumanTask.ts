import { HumanTaskModel } from "../../../../data/data-sources/models/human.task.model";

export interface CreateHumanTaskUseCase {
    execute(skill: HumanTaskModel): Promise<boolean>;
}