import { AttitudeEndorsementModel } from "../../../data/data-sources/models/attitude.endorsement.model";
import { AttitudeEndorsRepository } from "../../interfaces/repositories/attitudeEndorsRepository";
import { GetAttitudeEndorsByIdUseCase } from "../../interfaces/use-cases/attitudeEndors/getAttitudeEndorsById";

export class GetAttitudeEndorsByIdUseCaseImpl implements GetAttitudeEndorsByIdUseCase {
    private attitudeEndorsRepository: AttitudeEndorsRepository;

    constructor(attitudeEndorsRepository: AttitudeEndorsRepository) {
        this.attitudeEndorsRepository = attitudeEndorsRepository;
    }

    public async execute(id: string): Promise<AttitudeEndorsementModel> {
        return await this.attitudeEndorsRepository.getAttitudeByIdEndors(id);
    }
}