import { AttitudeModel } from "../../../../data/data-sources/models/attitude.model";

export interface UpdateAttitudeUseCase {
    execute(id: string, attitude: AttitudeModel): Promise<boolean>;
}