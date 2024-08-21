import { SimpleListModel } from "../../models/simpleListModel";
import { SkillTypeRepository } from "../../interfaces/repositories/skillTypeRepository";
import { CreateSkillTypeUseCase } from "../../interfaces/use-cases/skillType/createSkillType";

export class CreateSkillTypeUseCaseImpl implements CreateSkillTypeUseCase {
    private skillRepository: SkillTypeRepository;

    constructor(skillRepository: SkillTypeRepository) {
        this.skillRepository = skillRepository;
    }

    public async execute(skill: SimpleListModel): Promise<boolean> {
        return await this.skillRepository.createSkillType(skill);
    }
}