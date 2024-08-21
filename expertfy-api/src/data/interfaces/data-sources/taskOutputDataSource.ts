import { TaskOutputModel } from "../../data-sources/models/task.output.model";


export interface TaskOutputDataSource {
  createTaskOutput(taskOut: TaskOutputModel): Promise<boolean>;
  updateTaskOutput(id: string, taskOut: TaskOutputModel): Promise<boolean>;
  deleteTaskOutput(id: string): Promise<boolean>;
  getTaskOutputById(id: string): Promise<TaskOutputModel>;
  getAllTaskOutputs(): Promise<TaskOutputModel[]>;
}