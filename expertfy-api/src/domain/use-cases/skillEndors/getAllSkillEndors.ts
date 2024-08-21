import { SkillEndorsementModel } from "../../../data/data-sources/models/skill.endorsement.model";
import { SkillEndorsRepository } from "../../interfaces/repositories/skillEndorsRepository";
import { GetAllSkillEndorsUseCase } from "../../interfaces/use-cases/skillEndors/getAllSkillEndors";

export class GetAllSkillEndorsUseCaseImpl implements GetAllSkillEndorsUseCase {
    private skillEndorsRepository: SkillEndorsRepository;

    constructor(skillEndorsRepository: SkillEndorsRepository) {
        this.skillEndorsRepository = skillEndorsRepository;
    }

    public async execute(): Promise<SkillEndorsementModel[]> {
        return await this.skillEndorsRepository.getAllSkillsEndors();
    }
}