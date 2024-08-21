import { SimpleListModel } from "../../../models/simpleListModel";

export interface GetSkillTypeByIdUseCase {
    execute(id: string): Promise<SimpleListModel>;
}