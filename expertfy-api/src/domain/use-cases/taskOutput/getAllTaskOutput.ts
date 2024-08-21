import { TaskOutputModel } from "../../../data/data-sources/models/task.output.model";
import { TaskOutputRepository } from "../../interfaces/repositories/taskOutpuRepository";
import { GetAllTaskOutputUseCase } from "../../interfaces/use-cases/taskOutput/getAllTaskOutput";

export class GetAllTaskOutputUseCaseImpl implements GetAllTaskOutputUseCase {
    private taskOutRepository: TaskOutputRepository;

    constructor(taskOutRepository: TaskOutputRepository) {
        this.taskOutRepository = taskOutRepository;
    }

    public async execute(): Promise<TaskOutputModel[]> {
        return await this.taskOutRepository.getAllTaskOutputs();
    }
}