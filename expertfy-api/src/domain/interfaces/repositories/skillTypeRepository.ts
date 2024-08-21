import { SimpleListDTO } from "../../models/simpleListDTO";

export interface SkillTypeRepository {
  createSkillType(skill: SimpleListDTO): Promise<boolean>;
  updateSkillType(id: string, skill: SimpleListDTO): Promise<boolean>;
  deleteSkillType(id: string): Promise<boolean>;
  getSkillTypeById(id: string): Promise<SimpleListDTO>;
  getAllSkillTypes(): Promise<SimpleListDTO[]>;
}