import { AttitudeModel } from "../../../data/data-sources/models/attitude.model";
import { AttitudeRepository } from "../../../domain/interfaces/repositories/attitudeRepository";
import { UpdateAttitudeUseCase } from "../../interfaces/use-cases/attitude/updateAttitude";

export class UpdateAttitudeUseCaseImpl implements UpdateAttitudeUseCase {
    private attitudeRepository: AttitudeRepository;

    constructor(attitudeRepository: AttitudeRepository) {
        this.attitudeRepository = attitudeRepository;
    }

    public async execute(id : string, attitude: AttitudeModel): Promise<boolean> {
        return await this.attitudeRepository.updateAttitude(id, attitude);
    }
}