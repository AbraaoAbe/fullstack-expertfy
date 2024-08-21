import { SimpleListModel } from "../../models/simpleListModel";
import { AreaRepository } from "../../interfaces/repositories/areaRepository";
import { GetAllAreasUseCase } from "../../interfaces/use-cases/area/getAllArea";

export class getAllAreasUseCaseImpl implements GetAllAreasUseCase{
    private areaRepository: AreaRepository;

    constructor(areaRepository: AreaRepository){
        this.areaRepository = areaRepository;
    }
    
    async getAllAreas(): Promise<SimpleListModel[]>{
        return this.areaRepository.getAllAreas();
    }
}