import { AttitudeModel } from "../../../data/data-sources/models/attitude.model";
import { AttitudeRepository } from "../../../domain/interfaces/repositories/attitudeRepository";
import { DeleteAttitudeUseCase } from "../../interfaces/use-cases/attitude/deleteAttitude";

export class DeleteAttitudeUseCaseImpl implements DeleteAttitudeUseCase {
    private attitudeRepository: AttitudeRepository;

    constructor(attitudeRepository: AttitudeRepository) {
        this.attitudeRepository = attitudeRepository;
    }

    public async execute(id: string): Promise<boolean> {
        return await this.attitudeRepository.deleteAttitude(id);
    }
}