import { SimpleListModel } from "../../models/simpleListModel";
import { SkillTypeRepository } from "../../interfaces/repositories/skillTypeRepository";
import { GetSkillTypeByIdUseCase } from "../../interfaces/use-cases/skillType/getSkillTypeById";

export class GetSkillTypeByIdUseCaseImpl implements GetSkillTypeByIdUseCase {
    private skillRepository: SkillTypeRepository;

    constructor(skillRepository: SkillTypeRepository) {
        this.skillRepository = skillRepository;
    }

    public async execute(id: string): Promise<SimpleListModel> {
        return await this.skillRepository.getSkillTypeById(id);
    }
}