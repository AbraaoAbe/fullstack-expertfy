import { HumanTaskModel } from "../../../data/data-sources/models/human.task.model";
import { HumanTaskRepository } from "../../interfaces/repositories/humanTaskRepository";
import { CreateHumanTaskUseCase } from "../../interfaces/use-cases/humanTask/createHumanTask";

export class CreateHumanTaskUseCaseImpl implements CreateHumanTaskUseCase {
    private humanTaskRepository: HumanTaskRepository;

    constructor(humanTaskRepository: HumanTaskRepository) {
        this.humanTaskRepository = humanTaskRepository;
    }

    public async execute(humanTask: HumanTaskModel): Promise<boolean> {
        return await this.humanTaskRepository.createHumanTask(humanTask);
    }
}