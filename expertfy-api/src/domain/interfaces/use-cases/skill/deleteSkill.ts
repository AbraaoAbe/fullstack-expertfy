import { SkillModel } from "../../../../data/data-sources/models/skill.model";

export interface DeleteSkillUseCase {
    execute(id: string): Promise<boolean>;
}