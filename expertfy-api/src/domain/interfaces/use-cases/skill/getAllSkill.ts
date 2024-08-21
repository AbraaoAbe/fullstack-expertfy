import { SkillModel } from "../../../../data/data-sources/models/skill.model";

export interface GetAllSkillUseCase {
    execute(): Promise<SkillModel[]>;
}