import { PersonModel } from "./person.model";

export interface AttitudeModel {
  id?: string;
  personId: string;
  attitudeType: string;
  
}