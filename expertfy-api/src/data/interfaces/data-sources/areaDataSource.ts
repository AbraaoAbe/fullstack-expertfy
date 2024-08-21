import { SimpleListModel } from "../../../domain/models/simpleListModel";

export interface AreaDataSource{
    getAllAreas(): Promise<SimpleListModel[]>;
}