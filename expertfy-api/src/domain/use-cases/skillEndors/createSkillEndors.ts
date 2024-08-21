import { SkillEndorsementModel } from "../../../data/data-sources/models/skill.endorsement.model";
import { SkillEndorsRepository } from "../../interfaces/repositories/skillEndorsRepository";
import { CreateSkillEndorsUseCase } from "../../interfaces/use-cases/skillEndors/createSkillEndors";

export class CreateSkillEndorsUseCaseImpl implements CreateSkillEndorsUseCase {
    private skillEndorsRepository: SkillEndorsRepository;

    constructor(skillEndorsRepository: SkillEndorsRepository) {
        this.skillEndorsRepository = skillEndorsRepository;
    }

    public async execute(skill: SkillEndorsementModel): Promise<boolean> {
        return await this.skillEndorsRepository.createSkillEndors(skill);
    }
}