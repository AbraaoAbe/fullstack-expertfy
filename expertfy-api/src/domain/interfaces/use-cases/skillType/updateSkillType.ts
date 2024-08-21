import { SimpleListModel } from "../../../models/simpleListModel";

export interface UpdateSkillTypeUseCase {
    execute(id: string, skill: SimpleListModel): Promise<boolean>;
}