import { HumanTaskCountDTO } from "../../models/humanTaskCountDTO";
import { GetCountHumanTaskByPersonGroupBySkillUsecase } from "../../interfaces/use-cases/humanTask/getCountHumanTaskByPersonGroupBySkill";
import { HumanTaskRepository } from "../../interfaces/repositories/humanTaskRepository";

export class GetCountHumanTaskByPersonGroupBySkillUsecaseImpl 
implements GetCountHumanTaskByPersonGroupBySkillUsecase {

    private humanTaskRepository: HumanTaskRepository;
    constructor(humanTaskRepository: HumanTaskRepository) {
        this.humanTaskRepository = humanTaskRepository;
    }

    public async execute(personId: string): Promise<HumanTaskCountDTO[]> {
        return await this.humanTaskRepository.getCountHumanTaskByPersonGroupBySkill(personId);
    }
    
}