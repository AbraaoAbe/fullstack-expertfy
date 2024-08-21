import { SimpleListModel } from "../../../models/simpleListModel";

export interface CreateSkillTypeUseCase {
    execute(skill: SimpleListModel): Promise<boolean>;
}