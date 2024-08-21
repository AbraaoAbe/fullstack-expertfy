import { AttitudeEndorsementModel } from "../../../data/data-sources/models/attitude.endorsement.model";
import { AttitudeEndorsRepository } from "../../interfaces/repositories/attitudeEndorsRepository";
import { UpdateAttitudeEndorsUseCase } from "../../interfaces/use-cases/attitudeEndors/updateAttitudeEndors";

export class UpdateAttitudeEndorsUseCaseImpl implements UpdateAttitudeEndorsUseCase {
    private attitudeEndorsRepository: AttitudeEndorsRepository;

    constructor(attitudeEndorsRepository: AttitudeEndorsRepository) {
        this.attitudeEndorsRepository = attitudeEndorsRepository;
    }

    public async execute(id: string, endors: AttitudeEndorsementModel): Promise<boolean> {
        return await this.attitudeEndorsRepository.updateAttitudeEndors(id, endors);
    }
}