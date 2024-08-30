import { PersonModel } from "../../data/data-sources/models/person.model"

export interface ExpertListDTO extends PersonModel {
  languages: string;
  seniority: string;
  area: string;
  teams?: string;
}