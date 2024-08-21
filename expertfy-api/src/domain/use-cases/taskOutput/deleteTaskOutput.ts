import { TaskOutputModel } from "../../../data/data-sources/models/task.output.model";
import { TaskOutputRepository } from "../../interfaces/repositories/taskOutpuRepository";
import { DeleteTaskOutputUseCase } from "../../interfaces/use-cases/taskOutput/deleteTaskOutput";

export class DeleteTaskOutputUseCaseImpl implements DeleteTaskOutputUseCase {
    private taskOutRepository: TaskOutputRepository;

    constructor(taskOutRepository: TaskOutputRepository) {
        this.taskOutRepository = taskOutRepository;
    }

    public async execute(id: string): Promise<boolean> {
        return await this.taskOutRepository.deleteTaskOutput(id);
    }
}