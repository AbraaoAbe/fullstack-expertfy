import { AttitudeEndorsementModel } from "../../../data/data-sources/models/attitude.endorsement.model";
import { AttitudeEndorsRepository } from "../../interfaces/repositories/attitudeEndorsRepository";
import { DeleteAttitudeEndorsUseCase } from "../../interfaces/use-cases/attitudeEndors/deleteAttitudeEndors";

export class DeleteAttitudeEndorsUseCaseImpl implements DeleteAttitudeEndorsUseCase {
    private attitudeEndorsRepository: AttitudeEndorsRepository;

    constructor(attitudeEndorsRepository: AttitudeEndorsRepository) {
        this.attitudeEndorsRepository = attitudeEndorsRepository;
    }

    public async execute(id: string): Promise<boolean> {
        return await this.attitudeEndorsRepository.deleteAttitudeEndors(id);
    }
}