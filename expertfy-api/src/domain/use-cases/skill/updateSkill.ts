import { SkillModel } from "../../../data/data-sources/models/skill.model";
import { SkillRepository } from "../../interfaces/repositories/skillRepository";
import { UpdateSkillUseCase } from "../../interfaces/use-cases/skill/updateSkill";

export class UpdateSkillUseCaseImpl implements UpdateSkillUseCase {
    private skillRepository: SkillRepository;

    constructor(skillRepository: SkillRepository) {
        this.skillRepository = skillRepository;
    }

    public async execute(id: string, skill: SkillModel): Promise<boolean> {
        return await this.skillRepository.updateSkill(id, skill);
    }
}