import { SimpleListModel } from "../models/simpleListModel";
import { SeniorityRepository } from "../interfaces/repositories/seniorityRepository";
import { SeniorityDataSource } from "../../data/interfaces/data-sources/seniorityDataSource";

export class SeniorityRepositoryImpl implements SeniorityRepository{
    private seniorityDataSource: SeniorityDataSource;

    constructor(seniorityDataSource: SeniorityDataSource){
        this.seniorityDataSource = seniorityDataSource;
    }
    
    async getAllSeniority(): Promise<SimpleListModel[]>{
        return this.seniorityDataSource.getAllSeniority();
    }
}