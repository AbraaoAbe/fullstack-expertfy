import { AttitudeEndorsementModel } from "../../../../data/data-sources/models/attitude.endorsement.model";
export interface CreateAttitudeEndorsUseCase {
    execute(attitudeEndorsement: AttitudeEndorsementModel): Promise<boolean>;
}