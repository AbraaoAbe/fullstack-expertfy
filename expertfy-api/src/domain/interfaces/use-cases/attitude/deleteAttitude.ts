import { AttitudeModel } from "../../../../data/data-sources/models/attitude.model";

export interface DeleteAttitudeUseCase {
    execute(id: string): Promise<boolean>
}