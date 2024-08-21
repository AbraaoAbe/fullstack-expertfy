import { HumanTaskModel } from "../../../data/data-sources/models/human.task.model";
import { HumanTaskRepository } from "../../interfaces/repositories/humanTaskRepository";
import { DeleteHumanTaskUseCase } from "../../interfaces/use-cases/humanTask/deleteHumanTask";

export class DeleteHumanTaskUseCaseImpl implements DeleteHumanTaskUseCase {
    private humanTaskRepository: HumanTaskRepository;

    constructor(humanTaskRepository: HumanTaskRepository) {
        this.humanTaskRepository = humanTaskRepository;
    }

    public async execute(id: string): Promise<boolean> {
        return await this.humanTaskRepository.deleteHumanTask(id);
    }
}