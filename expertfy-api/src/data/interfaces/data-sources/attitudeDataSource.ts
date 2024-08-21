import { AttitudeModel } from "../../data-sources/models/attitude.model";


export interface AttitudeDataSource {
  createAttitude(attitude: AttitudeModel): Promise<boolean>;
  updateAttitude(id: string, attitude: AttitudeModel): Promise<boolean>;
  deleteAttitude(id: string): Promise<boolean>;
  getAttitudeById(id: string): Promise<AttitudeModel>;
  getAllAttitudes(): Promise<AttitudeModel[]>;
}