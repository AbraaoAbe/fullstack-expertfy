import { HumanTaskModel } from "../../../data/data-sources/models/human.task.model";
import { HumanTaskRepository } from "../../interfaces/repositories/humanTaskRepository";
import { UpdateHumanTaskUseCase } from "../../interfaces/use-cases/humanTask/updateHumanTask";

export class UpdateHumanTaskUseCaseImpl implements UpdateHumanTaskUseCase {
    private humanTaskRepository: HumanTaskRepository;

    constructor(humanTaskRepository: HumanTaskRepository) {
        this.humanTaskRepository = humanTaskRepository;
    }

    public async execute(id: string, humanTask: HumanTaskModel): Promise<boolean> {
        return await this.humanTaskRepository.updateHumanTask(id, humanTask);
    }
}