import { HumanTaskModel } from "../../../../data/data-sources/models/human.task.model";

export interface DeleteHumanTaskUseCase {
    execute(id: string): Promise<boolean>;
}