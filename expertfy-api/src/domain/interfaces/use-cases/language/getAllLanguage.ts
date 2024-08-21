import { SimpleListModel } from "../../../models/simpleListModel";

export interface GetAllLanguagesUseCase{
    getAllLanguages(): Promise<SimpleListModel[]>;
}