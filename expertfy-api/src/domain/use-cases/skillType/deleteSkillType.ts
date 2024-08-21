import { SimpleListModel } from "../../models/simpleListModel";
import { SkillTypeRepository } from "../../interfaces/repositories/skillTypeRepository";
import { DeleteSkillTypeUseCase } from "../../interfaces/use-cases/skillType/deleteSkillType";

export class DeleteSkillTypeUseCaseImpl implements DeleteSkillTypeUseCase {
    private skillRepository: SkillTypeRepository;

    constructor(skillRepository: SkillTypeRepository) {
        this.skillRepository = skillRepository;
    }

    public async execute(id: string): Promise<boolean> {
        return await this.skillRepository.deleteSkillType(id);
    }
}