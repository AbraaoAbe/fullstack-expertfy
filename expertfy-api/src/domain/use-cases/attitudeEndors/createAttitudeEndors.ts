import { AttitudeEndorsementModel } from "../../../data/data-sources/models/attitude.endorsement.model";
import { AttitudeEndorsRepository } from "../../interfaces/repositories/attitudeEndorsRepository";
import { CreateAttitudeEndorsUseCase } from "../../interfaces/use-cases/attitudeEndors/createAttitudeEndors";

export class CreateAttitudeEndorsUseCaseImpl implements CreateAttitudeEndorsUseCase {
    private attitudeEndorsRepository: AttitudeEndorsRepository;

    constructor(attitudeEndorsRepository: AttitudeEndorsRepository) {
        this.attitudeEndorsRepository = attitudeEndorsRepository;
    }

    public async execute(endors: AttitudeEndorsementModel): Promise<boolean> {
        return await this.attitudeEndorsRepository.createAttitudeEndors(endors);
    }
}