import { SkillEndorsementModel } from "../../../data/data-sources/models/skill.endorsement.model";
import { SkillEndorsRepository } from "../../interfaces/repositories/skillEndorsRepository";
import { UpdateSkillEndorsUseCase } from "../../interfaces/use-cases/skillEndors/updateSkillEndors";

export class UpdateSkillEndorsUseCaseImpl implements UpdateSkillEndorsUseCase {
    private skillEndorsRepository: SkillEndorsRepository;

    constructor(skillEndorsRepository: SkillEndorsRepository) {
        this.skillEndorsRepository = skillEndorsRepository;
    }

    public async execute(id: string, endors: SkillEndorsementModel): Promise<boolean> {
        return await this.skillEndorsRepository.updateSkillEndors(id, endors);
    }
}