import { SkillEndorsementModel } from "../../../data/data-sources/models/skill.endorsement.model";
import { SkillEndorsRepository } from "../../interfaces/repositories/skillEndorsRepository";
import { DeleteSkillEndorsUseCase } from "../../interfaces/use-cases/skillEndors/deleteSkillEndors";

export class DeleteSkillEndorsUseCaseImpl implements DeleteSkillEndorsUseCase {
    private skillEndorsRepository: SkillEndorsRepository;

    constructor(skillEndorsRepository: SkillEndorsRepository) {
        this.skillEndorsRepository = skillEndorsRepository;
    }

    public async execute(id: string): Promise<boolean> {
        return await this.skillEndorsRepository.deleteSkillEndors(id);
    }
}