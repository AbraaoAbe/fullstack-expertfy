import { AttitudeModel } from "../../data/data-sources/models/attitude.model";
import { AttitudeDataSource } from "../../data/interfaces/data-sources/attitudeDataSource";
import { AttitudeRepository } from "../../domain/interfaces/repositories/attitudeRepository";

export class AttitudeRepositoryImpl implements AttitudeRepository {
  private attitudeDataSource: AttitudeDataSource;

  constructor(attitudeDataSource: AttitudeDataSource) {
    this.attitudeDataSource = attitudeDataSource;
  }

  public async createAttitude(attitude: AttitudeModel): Promise<boolean> {
    return await this.attitudeDataSource.createAttitude(attitude);
  }

  public async updateAttitude(id: string, attitude: AttitudeModel): Promise<boolean> {
    return await this.attitudeDataSource.updateAttitude(id, attitude);
  }

  public async deleteAttitude(id: string): Promise<boolean> {
    return await this.attitudeDataSource.deleteAttitude(id);
  }

  public async getAttitudeById(id: string): Promise<AttitudeModel> {
    return await this.attitudeDataSource.getAttitudeById(id);
  }

  public async getAllAttitudes(): Promise<AttitudeModel[]> {
    return await this.attitudeDataSource.getAllAttitudes();
  }
}