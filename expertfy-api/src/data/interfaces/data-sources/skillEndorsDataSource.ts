import { SkillEndorsListDTO } from "../../../domain/models/skillEndorsListDTO";
import { SkillEndorsementModel } from "../../data-sources/models/skill.endorsement.model";

export interface SkillEndorsDataSource {
  createSkillEndors(endors: SkillEndorsementModel): Promise<boolean>;
  updateSkillEndors(id: string, endors: SkillEndorsementModel): Promise<boolean>;
  deleteSkillEndors(id: string): Promise<boolean>;
  getSkillByIdEndors(id: string): Promise<SkillEndorsementModel>;
  getAllSkillsEndors(): Promise<SkillEndorsementModel[]>;
  getCountSkillEndorsByPersonId(personId: string): Promise<SkillEndorsListDTO[]>;
}