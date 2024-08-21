import { TaskOutputModel } from "../../../../data/data-sources/models/task.output.model";

export interface GetTaskOutputByIdUseCase {
    execute(id: string): Promise<TaskOutputModel>;
}