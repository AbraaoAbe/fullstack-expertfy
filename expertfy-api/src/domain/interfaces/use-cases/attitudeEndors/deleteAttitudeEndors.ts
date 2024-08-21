import { AttitudeEndorsementModel } from "../../../../data/data-sources/models/attitude.endorsement.model";

export interface DeleteAttitudeEndorsUseCase {
    execute(id: string): Promise<boolean>;
}