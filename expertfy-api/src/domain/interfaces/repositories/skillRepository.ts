import { SkillModel } from "../../../data/data-sources/models/skill.model";

export interface SkillRepository {
  createSkill(skill: SkillModel): Promise<boolean>;
  updateSkill(id: string, skill: SkillModel): Promise<boolean>;
  deleteSkill(id: string): Promise<boolean>;
  getSkillById(id: string): Promise<SkillModel>;
  getAllSkills(): Promise<SkillModel[]>;
}