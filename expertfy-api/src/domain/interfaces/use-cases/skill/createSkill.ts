import { SkillModel } from "../../../../data/data-sources/models/skill.model";

export interface CreateSkillUseCase {
    execute(skill: SkillModel): Promise<boolean>;
}