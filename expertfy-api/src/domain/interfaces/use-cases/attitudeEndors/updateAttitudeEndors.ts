import { AttitudeEndorsementModel } from "../../../../data/data-sources/models/attitude.endorsement.model";

export interface UpdateAttitudeEndorsUseCase {
    execute(id: string, attitude: AttitudeEndorsementModel): Promise<boolean>;
}