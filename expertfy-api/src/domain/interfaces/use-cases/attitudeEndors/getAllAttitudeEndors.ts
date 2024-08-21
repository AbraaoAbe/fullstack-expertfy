import { AttitudeEndorsementModel } from "../../../../data/data-sources/models/attitude.endorsement.model";

export interface GetAllAttitudeEndorsUseCase {
    execute(): Promise<AttitudeEndorsementModel[]>;
}