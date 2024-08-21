import { TaskOutputModel } from "../../../data/data-sources/models/task.output.model";
import { TaskOutputRepository } from "../../interfaces/repositories/taskOutpuRepository";
import { UpdateTaskOutputUseCase } from "../../interfaces/use-cases/taskOutput/updateTaskOutput";

export class UpdateTaskOutputUseCaseImpl implements UpdateTaskOutputUseCase {
    private taskOutRepository: TaskOutputRepository;

    constructor(taskOutRepository: TaskOutputRepository) {
        this.taskOutRepository = taskOutRepository;
    }

    public async execute(id: string, taskOut: TaskOutputModel): Promise<boolean> {
        return await this.taskOutRepository.updateTaskOutput(id, taskOut);
    }
}