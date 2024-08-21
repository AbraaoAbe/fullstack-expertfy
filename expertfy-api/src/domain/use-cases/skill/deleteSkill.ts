import { SkillModel } from "../../../data/data-sources/models/skill.model";
import { SkillRepository } from "../../interfaces/repositories/skillRepository";
import { DeleteSkillUseCase } from "../../interfaces/use-cases/skill/deleteSkill";

export class DeleteSkillUseCaseImpl implements DeleteSkillUseCase {
    private skillRepository: SkillRepository;

    constructor(skillRepository: SkillRepository) {
        this.skillRepository = skillRepository;
    }

    public async execute(id: string): Promise<boolean> {
        return await this.skillRepository.deleteSkill(id);
    }
}