import { PersonModel } from "./person.model";

export interface SkillModel {
  id?: string;
  personId: string;
  skillType: string;
  description?: string;
}