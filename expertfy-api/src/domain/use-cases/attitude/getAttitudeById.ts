import { AttitudeModel } from "../../../data/data-sources/models/attitude.model";
import { AttitudeRepository } from "../../../domain/interfaces/repositories/attitudeRepository";
import { GetAttitudeByIdUseCase } from "../../interfaces/use-cases/attitude/getAttitudeById";

export class GetAttitudeByIdUseCaseImpl implements GetAttitudeByIdUseCase {
    private attitudeRepository: AttitudeRepository;

    constructor(attitudeRepository: AttitudeRepository) {
        this.attitudeRepository = attitudeRepository;
    }

    public async execute(id: string): Promise<AttitudeModel> {
        return await this.attitudeRepository.getAttitudeById(id);
    }
}