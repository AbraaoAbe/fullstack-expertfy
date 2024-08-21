import { SimpleListDTO } from "../../models/simpleListDTO";

export interface LanguageRepository{
    getAllLanguages(): Promise<SimpleListDTO[]>;
}