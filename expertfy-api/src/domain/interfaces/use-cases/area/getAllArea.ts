import { SimpleListModel } from "../../../models/simpleListModel";

export interface GetAllAreasUseCase{
    getAllAreas(): Promise<SimpleListModel[]>;
}