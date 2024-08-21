import { SimpleListModel } from "../models/simpleListModel";
import { LanguageDataSource } from "../../data/interfaces/data-sources/languageDataSource";
import { LanguageRepository } from "../../domain/interfaces/repositories/languageRepository";

export class LanguageRepositoryImpl implements LanguageRepository{
    private languageDataSource: LanguageDataSource;

    constructor(languageDataSource: LanguageDataSource){
        this.languageDataSource = languageDataSource;
    }
    
    async getAllLanguages(): Promise<SimpleListModel[]>{
        return this.languageDataSource.getAllLanguages();
    }
}