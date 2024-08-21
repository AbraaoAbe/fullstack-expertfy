import { SkillEndorsementModel } from "../../../../data/data-sources/models/skill.endorsement.model";
export interface CreateSkillEndorsUseCase {
    execute(skill: SkillEndorsementModel): Promise<boolean>
}