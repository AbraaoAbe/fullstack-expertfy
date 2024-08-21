import { SimpleListModel } from "../../models/simpleListModel";
import { SeniorityRepository } from "../../interfaces/repositories/seniorityRepository";
import { GetAllSeniorityUseCase } from "../../interfaces/use-cases/seniority/getAllSeniority";

export class getAllSeniorityUseCaseImpl implements GetAllSeniorityUseCase{
    private seniorityRepository: SeniorityRepository;

    constructor(seniorityRepository: SeniorityRepository){
        this.seniorityRepository = seniorityRepository;
    }
    
    async getAllSeniority(): Promise<SimpleListModel[]>{
        return this.seniorityRepository.getAllSeniority();
    }
}