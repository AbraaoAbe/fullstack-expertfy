import { personModel } from './personModel';

export interface userModel extends personModel {
  id?: string;
  email: string;
  photo: string;
  phone: string;
  linkedin?: string;
  team?: string;
  employmentStartDate: Date;
  languageId: string;
  seniorityId: string;
  areaId: string;
  office: string;
}