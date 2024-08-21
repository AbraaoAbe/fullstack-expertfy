import { SkillModel } from "../../../../data/data-sources/models/skill.model";

export interface UpdateSkillUseCase {
    execute(id: string, skill: SkillModel): Promise<boolean>;
}