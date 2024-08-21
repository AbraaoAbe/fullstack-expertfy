import { SkillModel } from "../../../data/data-sources/models/skill.model";
import { SkillRepository } from "../../interfaces/repositories/skillRepository";
import { CreateSkillUseCase } from "../../interfaces/use-cases/skill/createSkill";

export class CreateSkillUseCaseImpl implements CreateSkillUseCase {
    private skillRepository: SkillRepository;

    constructor(skillRepository: SkillRepository) {
        this.skillRepository = skillRepository;
    }

    public async execute(skill: SkillModel): Promise<boolean> {
        return await this.skillRepository.createSkill(skill);
    }
}