import { PersonModel } from "./person.model";
import { SkillModel } from "./skill.model";

// A pessoa que está aqui é quem fez o endorsement
export interface SkillEndorsementModel {
  id?: string;
  personId: string;
  skillId: string;
  description: string;
  date: Date;
}