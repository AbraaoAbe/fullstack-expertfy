import { PersonTableDTO } from "../../models/personTableDTO";
import { HumanTaskRepository } from "../../interfaces/repositories/humanTaskRepository";
import { GetHumanTaskTableListByPersonIdUseCase } from "../../interfaces/use-cases/humanTask/getHumanTaskTableListByPersonId";

export class GetHumanTaskTableListByPersonIdUseCaseImpl implements GetHumanTaskTableListByPersonIdUseCase {
    private humanTaskRepository: HumanTaskRepository;

    constructor(humanTaskRepository: HumanTaskRepository) {
        this.humanTaskRepository = humanTaskRepository;
    }

    async execute(personId: string): Promise<PersonTableDTO[]> {
        return await this.humanTaskRepository.getHumanTaskTableListByPersonId(personId);
    }
}