import { SimpleListModel } from "../../models/simpleListModel";
import { SkillTypeRepository } from "../../interfaces/repositories/skillTypeRepository";
import { UpdateSkillTypeUseCase } from "../../interfaces/use-cases/skillType/updateSkillType";

export class UpdateSkillTypeUseCaseImpl implements UpdateSkillTypeUseCase {
    private skillRepository: SkillTypeRepository;

    constructor(skillRepository: SkillTypeRepository) {
        this.skillRepository = skillRepository;
    }

    public async execute(id: string, skill: SimpleListModel): Promise<boolean> {
        return await this.skillRepository.updateSkillType(id, skill);
    }
}