import { TaskOutputModel } from "../../../../data/data-sources/models/task.output.model";

export interface CreateTaskOutputUseCase {
    execute(skill: TaskOutputModel): Promise<boolean>;
}