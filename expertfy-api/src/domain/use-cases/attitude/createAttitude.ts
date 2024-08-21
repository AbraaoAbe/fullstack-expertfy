import { AttitudeModel } from "../../../data/data-sources/models/attitude.model";
import { AttitudeRepository } from "../../../domain/interfaces/repositories/attitudeRepository";
import { CreateAttitudeUseCase } from "../../interfaces/use-cases/attitude/createAttitude";

export class CreateAttitudeUseCaseImpl implements CreateAttitudeUseCase {
    private attitudeRepository: AttitudeRepository;

    constructor(attitudeRepository: AttitudeRepository) {
        this.attitudeRepository = attitudeRepository;
    }

    public async execute(attitude: AttitudeModel): Promise<boolean> {
        return await this.attitudeRepository.createAttitude(attitude);
    }
}