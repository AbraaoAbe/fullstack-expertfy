import { AttitudeEndorsementModel } from "../../../../data/data-sources/models/attitude.endorsement.model";

export interface GetAttitudeEndorsByIdUseCase {
    execute(id: string): Promise<AttitudeEndorsementModel>;
}