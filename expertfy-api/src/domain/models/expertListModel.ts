import { userModel } from "./userModel";

export interface expertListModel extends userModel {
  competenceCount: number;
  seniorityName: string;
}