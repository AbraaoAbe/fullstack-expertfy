import { SkillEndorsementModel } from "../../../../data/data-sources/models/skill.endorsement.model";

export interface DeleteSkillEndorsUseCase {
    execute(id: string): Promise<boolean>;
}