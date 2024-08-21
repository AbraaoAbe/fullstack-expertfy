import { SkillEndorsementModel } from "../../../data/data-sources/models/skill.endorsement.model";
import { SkillEndorsRepository } from "../../interfaces/repositories/skillEndorsRepository";
import { GetSkillEndorsByIdUseCase } from "../../interfaces/use-cases/skillEndors/getSkillEndorsById";

export class GetSkillEndorsByIdUseCaseImpl implements GetSkillEndorsByIdUseCase {
    private skillEndorsRepository: SkillEndorsRepository;

    constructor(skillEndorsRepository: SkillEndorsRepository) {
        this.skillEndorsRepository = skillEndorsRepository;
    }

    public async execute(id: string): Promise<SkillEndorsementModel> {
        return await this.skillEndorsRepository.getSkillByIdEndors(id);
    }
}