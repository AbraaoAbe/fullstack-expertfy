import { HumanTaskModel } from "../../../data/data-sources/models/human.task.model";
import { HumanTaskRepository } from "../../interfaces/repositories/humanTaskRepository";
import { GetAllHumanTaskUseCase } from "../../interfaces/use-cases/humanTask/getAllHumanTask";

export class GetAllHumanTaskUseCaseImpl implements GetAllHumanTaskUseCase {
    private humanTaskRepository: HumanTaskRepository;

    constructor(humanTaskRepository: HumanTaskRepository) {
        this.humanTaskRepository = humanTaskRepository;
    }

    public async execute(): Promise<HumanTaskModel[]> {
        return await this.humanTaskRepository.getAllHumanTasks();
    }
}