import { SimpleListModel } from "../../../domain/models/simpleListModel";

export interface LanguageDataSource{
    getAllLanguages(): Promise<SimpleListModel[]>;
}