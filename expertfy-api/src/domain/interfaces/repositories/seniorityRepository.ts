import { SimpleListDTO } from "../../models/simpleListDTO";

export interface SeniorityRepository{
    getAllSeniority(): Promise<SimpleListDTO[]>;
}