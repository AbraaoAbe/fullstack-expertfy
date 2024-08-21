import { SkillModel } from "../../../data/data-sources/models/skill.model";
import { SkillRepository } from "../../interfaces/repositories/skillRepository";
import { GetSkillByIdUseCase } from "../../interfaces/use-cases/skill/getSkillById";

export class GetSkillByIdUseCaseImpl implements GetSkillByIdUseCase {
    private skillRepository: SkillRepository;

    constructor(skillRepository: SkillRepository) {
        this.skillRepository = skillRepository;
    }

    public async execute(id: string): Promise<SkillModel> {
        return await this.skillRepository.getSkillById(id);
    }
}