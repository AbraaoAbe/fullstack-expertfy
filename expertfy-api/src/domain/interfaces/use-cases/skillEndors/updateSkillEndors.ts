import { SkillEndorsementModel } from "../../../../data/data-sources/models/skill.endorsement.model";

export interface UpdateSkillEndorsUseCase {
    execute(id: string, endors: SkillEndorsementModel): Promise<boolean>;
}