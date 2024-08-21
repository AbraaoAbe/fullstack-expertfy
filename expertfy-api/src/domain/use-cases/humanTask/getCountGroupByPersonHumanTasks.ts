import { PersonCountDTO } from "../../models/personCountDTO";
import { GetCountGroupByPersonHumanTasksUsecase } from "../../interfaces/use-cases/humanTask/getCountGroupByPersonHumanTasks";
import { HumanTaskRepository } from "../../interfaces/repositories/humanTaskRepository";

export class GetCountGroupByPersonHumanTasksUsecaseImpl 
implements GetCountGroupByPersonHumanTasksUsecase {

    private humanTaskRepository: HumanTaskRepository;
    constructor(humanTaskRepository: HumanTaskRepository) {
        this.humanTaskRepository = humanTaskRepository;
    }

    public async execute(skillTypeId: string): Promise<PersonCountDTO[]> {
        return await this.humanTaskRepository.getCountGroupByPersonHumanTasksBySkillType(skillTypeId);
    }
}