import { SimpleListModel } from "../../../models/simpleListModel";

export interface GetAllSkillTypeUseCase {
    execute(): Promise<SimpleListModel[]>;
}