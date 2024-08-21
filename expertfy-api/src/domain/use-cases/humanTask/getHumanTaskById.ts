import { HumanTaskModel } from "../../../data/data-sources/models/human.task.model";
import { HumanTaskRepository } from "../../interfaces/repositories/humanTaskRepository";
import { GetHumanTaskByIdUseCase } from "../../interfaces/use-cases/humanTask/getHumanTaskById";

export class GetHumanTaskByIdUseCaseImpl implements GetHumanTaskByIdUseCase {
    private humanTaskRepository: HumanTaskRepository;

    constructor(humanTaskRepository: HumanTaskRepository) {
        this.humanTaskRepository = humanTaskRepository;
    }

    public async execute(id: string): Promise<HumanTaskModel> {
        return await this.humanTaskRepository.getHumanTaskById(id);
    }
}