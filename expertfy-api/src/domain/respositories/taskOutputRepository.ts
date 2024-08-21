import { TaskOutputModel } from "../../data/data-sources/models/task.output.model";
import { TaskOutputRepository } from "../interfaces/repositories/taskOutpuRepository";
import { TaskOutputDataSource } from "../../data/interfaces/data-sources/taskOutputDataSource";

export class TaskOutputRepositoryImpl implements TaskOutputRepository {
  private taskOutDataSource: TaskOutputDataSource;

  constructor(taskOutDataSource: TaskOutputDataSource) {
    this.taskOutDataSource = taskOutDataSource;
  }

  public async createTaskOutput(taskOut: TaskOutputModel): Promise<boolean> {
    return await this.taskOutDataSource.createTaskOutput(taskOut);
  }

  public async updateTaskOutput(id: string, taskOut: TaskOutputModel): Promise<boolean> {
    return await this.taskOutDataSource.updateTaskOutput(id, taskOut);
  }

  public async deleteTaskOutput(id: string): Promise<boolean> {
    return await this.taskOutDataSource.deleteTaskOutput(id);
  }

  public async getTaskOutputById(id: string): Promise<TaskOutputModel> {
    return await this.taskOutDataSource.getTaskOutputById(id);
  }

  public async getAllTaskOutputs(): Promise<TaskOutputModel[]> {
    return await this.taskOutDataSource.getAllTaskOutputs();
  }
}