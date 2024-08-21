import { SkillModel } from "../../../data/data-sources/models/skill.model";
import { SkillRepository } from "../../interfaces/repositories/skillRepository";
import { GetAllSkillUseCase } from "../../interfaces/use-cases/skill/getAllSkill";

export class GetAllSkillUseCaseImpl implements GetAllSkillUseCase {
    private skillRepository: SkillRepository;

    constructor(skillRepository: SkillRepository) {
        this.skillRepository = skillRepository;
    }

    public async execute(): Promise<SkillModel[]> {
        return await this.skillRepository.getAllSkills();
    }
}