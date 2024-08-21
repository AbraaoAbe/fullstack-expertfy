import { AttitudeEndorsementModel } from "../../data-sources/models/attitude.endorsement.model";


export interface AttitudeEndorsDataSource {
  createAttitudeEndors(endors: AttitudeEndorsementModel): Promise<boolean>;
  updateAttitudeEndors(id: string, endors: AttitudeEndorsementModel): Promise<boolean>;
  deleteAttitudeEndors(id: string): Promise<boolean>;
  getAttitudeByIdEndors(id: string): Promise<AttitudeEndorsementModel>;
  getAllAttitudesEndors(): Promise<AttitudeEndorsementModel[]>;
}