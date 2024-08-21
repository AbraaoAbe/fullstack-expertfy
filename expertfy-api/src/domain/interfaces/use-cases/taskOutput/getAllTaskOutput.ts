import { TaskOutputModel } from "../../../../data/data-sources/models/task.output.model";

export interface GetAllTaskOutputUseCase {
    execute(): Promise<TaskOutputModel[]>;
}