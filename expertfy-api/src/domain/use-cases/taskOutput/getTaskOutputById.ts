import { TaskOutputModel } from "../../../data/data-sources/models/task.output.model";
import { TaskOutputRepository } from "../../interfaces/repositories/taskOutpuRepository";
import { GetTaskOutputByIdUseCase } from "../../interfaces/use-cases/taskOutput/getTaskOutputById";

export class GetTaskOutputByIdUseCaseImpl implements GetTaskOutputByIdUseCase {
    private taskOutRepository: TaskOutputRepository;

    constructor(taskOutRepository: TaskOutputRepository) {
        this.taskOutRepository = taskOutRepository;
    }

    public async execute(id: string): Promise<TaskOutputModel> {
        return await this.taskOutRepository.getTaskOutputById(id);
    }
}