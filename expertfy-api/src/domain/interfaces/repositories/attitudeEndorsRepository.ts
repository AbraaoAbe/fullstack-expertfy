import { AttitudeEndorsementModel } from "../../../data/data-sources/models/attitude.endorsement.model";

export interface AttitudeEndorsRepository {
  createAttitudeEndors(endors: AttitudeEndorsementModel): Promise<boolean>;
  updateAttitudeEndors(id: string, endors: AttitudeEndorsementModel): Promise<boolean>;
  deleteAttitudeEndors(id: string): Promise<boolean>;
  getAttitudeByIdEndors(id: string): Promise<AttitudeEndorsementModel>;
  getAllAttitudeEndors(): Promise<AttitudeEndorsementModel[]>
}
