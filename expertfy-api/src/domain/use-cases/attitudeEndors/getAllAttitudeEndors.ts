import { AttitudeEndorsementModel } from "../../../data/data-sources/models/attitude.endorsement.model";
import { AttitudeEndorsRepository } from "../../interfaces/repositories/attitudeEndorsRepository";
import { GetAllAttitudeEndorsUseCase } from "../../interfaces/use-cases/attitudeEndors/getAllAttitudeEndors";

export class GetAllAttitudeEndorsUseCaseImpl implements GetAllAttitudeEndorsUseCase {
    private attitudeEndorsRepository: AttitudeEndorsRepository;

    constructor(attitudeEndorsRepository: AttitudeEndorsRepository) {
        this.attitudeEndorsRepository = attitudeEndorsRepository;
    }

    public async execute(): Promise<AttitudeEndorsementModel[]> {
        return await this.attitudeEndorsRepository.getAllAttitudeEndors();
    }
}