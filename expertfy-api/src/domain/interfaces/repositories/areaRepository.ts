import { SimpleListDTO } from "../../models/simpleListDTO";

export interface AreaRepository{
    getAllAreas(): Promise<SimpleListDTO[]>;
}