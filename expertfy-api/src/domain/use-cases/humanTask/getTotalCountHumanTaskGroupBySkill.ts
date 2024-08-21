import { HumanTaskCountDTO } from "../../models/humanTaskCountDTO";
import { GetTotalCountHumanTaskGroupBySkillUsecase } from "../../interfaces/use-cases/humanTask/getTotalCountHumanTaskGroupBySkill";
import { HumanTaskRepository } from "../../interfaces/repositories/humanTaskRepository";

export class GetTotalCountHumanTaskGroupBySkillUsecaseImpl 
implements GetTotalCountHumanTaskGroupBySkillUsecase {

    private humanTaskRepository: HumanTaskRepository;
    constructor(humanTaskRepository: HumanTaskRepository) {
        this.humanTaskRepository = humanTaskRepository;
    }

    public async execute(): Promise<HumanTaskCountDTO[]> {
        return await this.humanTaskRepository.getTotalCountHumanTaskGroupBySkill();
    }
    
}