import { TaskOutputModel } from "../../../../data/data-sources/models/task.output.model";

export interface UpdateTaskOutputUseCase {
    execute(id: string, skill: TaskOutputModel): Promise<boolean>;
}