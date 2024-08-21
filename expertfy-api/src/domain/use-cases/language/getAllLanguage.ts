import { SimpleListModel } from "../../models/simpleListModel";
import { languageRepository } from "../../interfaces/repositories/languageRepository";
import { getAllLanguagesUseCase } from "../../interfaces/use-cases/language/getAllLanguage";

export class getAllLanguagesUseCaseImpl implements getAllLanguagesUseCase{
    private languageRepository: languageRepository;

    constructor(languageRepository: languageRepository){
        this.languageRepository = languageRepository;
    }
    
    async getAllLanguages(): Promise<SimpleListModel[]>{
        return this.languageRepository.getAllLanguages();
    }
}