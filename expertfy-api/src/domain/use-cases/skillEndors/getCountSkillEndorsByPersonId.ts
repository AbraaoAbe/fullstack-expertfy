import { SkillEndorsListDTO } from "../../models/skillEndorsListDTO";
import { SkillEndorsRepository } from "../../interfaces/repositories/skillEndorsRepository";
import { GetCountSkillEndorsByPersonIdUseCase } from "../../interfaces/use-cases/skillEndors/getCountSkillEndorsByPersonId";

export class GetCountSkillEndorsByPersonIdUseCaseImpl implements GetCountSkillEndorsByPersonIdUseCase {
    private skillEndorsRepository: SkillEndorsRepository;

    constructor(skillEndorsRepository: SkillEndorsRepository) {
        this.skillEndorsRepository = skillEndorsRepository;
    }

    public async execute(personId: string): Promise<SkillEndorsListDTO[]> {
        return await this.skillEndorsRepository.getCountSkillEndorsByPersonId(personId)
    }
}