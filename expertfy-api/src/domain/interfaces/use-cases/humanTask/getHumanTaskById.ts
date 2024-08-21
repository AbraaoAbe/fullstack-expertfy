import { HumanTaskModel } from "../../../../data/data-sources/models/human.task.model";

export interface GetHumanTaskByIdUseCase {
    execute(id: string): Promise<HumanTaskModel>;
}