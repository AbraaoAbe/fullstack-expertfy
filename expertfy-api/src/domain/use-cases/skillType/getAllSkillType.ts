import { SimpleListModel } from "../../models/simpleListModel";
import { SkillTypeRepository } from "../../interfaces/repositories/skillTypeRepository";
import { GetAllSkillTypeUseCase } from "../../interfaces/use-cases/skillType/getAllSkillType";

export class GetAllSkillTypeUseCaseImpl implements GetAllSkillTypeUseCase {
    private skillRepository: SkillTypeRepository;

    constructor(skillRepository: SkillTypeRepository) {
        this.skillRepository = skillRepository;
    }

    public async execute(): Promise<SimpleListModel[]> {
        return await this.skillRepository.getAllSkillTypes();
    }
}