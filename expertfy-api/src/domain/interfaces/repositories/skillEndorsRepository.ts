import { SkillEndorsementModel } from "../../../data/data-sources/models/skill.endorsement.model";
import { SkillEndorsListDTO } from "../../models/skillEndorsListDTO"; 

export interface SkillEndorsRepository {
  createSkillEndors(endors: SkillEndorsementModel): Promise<boolean>;
  updateSkillEndors(id: string, endors: SkillEndorsementModel): Promise<boolean>;
  deleteSkillEndors(id: string): Promise<boolean>;
  getSkillByIdEndors(id: string): Promise<SkillEndorsementModel>;
  getAllSkillsEndors(): Promise<SkillEndorsementModel[]>
  getCountSkillEndorsByPersonId(personId: string): Promise<SkillEndorsListDTO[]>
}