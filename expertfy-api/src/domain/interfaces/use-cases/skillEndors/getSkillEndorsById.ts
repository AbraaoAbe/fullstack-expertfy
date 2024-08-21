import { SkillEndorsementModel } from "../../../../data/data-sources/models/skill.endorsement.model";

export interface GetSkillEndorsByIdUseCase {
    execute(id: string): Promise<SkillEndorsementModel>;
}