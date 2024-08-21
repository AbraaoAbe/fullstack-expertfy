import { SimpleListModel } from "../models/simpleListModel";
import { AreaDataSource } from "../../data/interfaces/data-sources/areaDataSource";
import { AreaRepository } from "../../domain/interfaces/repositories/areaRepository";

export class AreaRepositoryImpl implements AreaRepository{
    private areaDataSource: AreaDataSource;

    constructor(areaDataSource: AreaDataSource){
        this.areaDataSource = areaDataSource;
    }

    async getAllAreas(): Promise<SimpleListModel[]>{
        return this.areaDataSource.getAllAreas();
    }
}