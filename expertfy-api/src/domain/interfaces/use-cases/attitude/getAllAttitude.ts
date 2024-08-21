import { AttitudeModel } from "../../../../data/data-sources/models/attitude.model";

export interface GetAllAttitudeUseCase {
    execute(): Promise<AttitudeModel[]>;
}