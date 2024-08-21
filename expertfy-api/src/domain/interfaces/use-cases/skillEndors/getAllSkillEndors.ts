import { SkillEndorsementModel } from "../../../../data/data-sources/models/skill.endorsement.model";

export interface GetAllSkillEndorsUseCase {
    execute(): Promise<SkillEndorsementModel[]>
}