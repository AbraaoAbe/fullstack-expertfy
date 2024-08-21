import { TaskOutputModel } from "../../../data/data-sources/models/task.output.model";

export interface TaskOutputRepository {
  createTaskOutput(task: TaskOutputModel): Promise<boolean>;
  updateTaskOutput(id: string, task: TaskOutputModel): Promise<boolean>;
  deleteTaskOutput(id: string): Promise<boolean>;
  getTaskOutputById(id: string): Promise<TaskOutputModel>;
  getAllTaskOutputs(): Promise<TaskOutputModel[]>;
}