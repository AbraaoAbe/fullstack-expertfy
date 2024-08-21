import { SimpleListModel } from "../../../models/simpleListModel";

export interface GetAllSeniorityUseCase{
    getAllSeniority(): Promise<SimpleListModel[]>;
}