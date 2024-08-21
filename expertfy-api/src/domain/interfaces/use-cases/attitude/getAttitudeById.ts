import { AttitudeModel } from "../../../../data/data-sources/models/attitude.model";

export interface GetAttitudeByIdUseCase {
    execute(id: string): Promise<AttitudeModel>;
}