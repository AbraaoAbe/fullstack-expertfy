import { AttitudeModel } from "../../../data/data-sources/models/attitude.model";
import { AttitudeRepository } from "../../../domain/interfaces/repositories/attitudeRepository";
import { GetAllAttitudeUseCase } from "../../interfaces/use-cases/attitude/getAllAttitude";

export class GetAllAttitudeUseCaseImpl implements GetAllAttitudeUseCase {
    private attitudeRepository: AttitudeRepository;

    constructor(attitudeRepository: AttitudeRepository) {
        this.attitudeRepository = attitudeRepository;
    }

    public async execute(): Promise<AttitudeModel[]> {
        return await this.attitudeRepository.getAllAttitudes();
    }
}