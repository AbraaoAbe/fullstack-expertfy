import { SkillModel } from "../../../../data/data-sources/models/skill.model";

export interface GetSkillByIdUseCase {
    execute(id: string): Promise<SkillModel>;
}