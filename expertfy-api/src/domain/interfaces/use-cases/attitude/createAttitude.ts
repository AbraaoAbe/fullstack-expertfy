import { AttitudeModel } from "../../../../data/data-sources/models/attitude.model";

export interface CreateAttitudeUseCase {
    execute(attitude: AttitudeModel): Promise<boolean>;
}