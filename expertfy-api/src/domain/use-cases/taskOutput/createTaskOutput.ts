import { TaskOutputModel } from "../../../data/data-sources/models/task.output.model";
import { TaskOutputRepository } from "../../interfaces/repositories/taskOutpuRepository";
import { CreateTaskOutputUseCase } from "../../interfaces/use-cases/taskOutput/createTaskOutput";

export class CreateTaskOutputUseCaseImpl implements CreateTaskOutputUseCase {
    private taskOutRepository: TaskOutputRepository;

    constructor(taskOutRepository: TaskOutputRepository) {
        this.taskOutRepository = taskOutRepository;
    }

    public async execute(taskOut: TaskOutputModel): Promise<boolean> {
        return await this.taskOutRepository.createTaskOutput(taskOut);
    }
}