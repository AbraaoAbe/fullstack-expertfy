import { SimpleListModel } from "../../../domain/models/simpleListModel";

export interface SeniorityDataSource{
    getAllSeniority(): Promise<SimpleListModel[]>;
}