import { AttitudeEndorsementModel } from "../../data/data-sources/models/attitude.endorsement.model";
import { AttitudeEndorsDataSource } from "../../data/interfaces/data-sources/attitudeEndorsDataSource";
import { AttitudeEndorsRepository } from "../../domain/interfaces/repositories/attitudeEndorsRepository";

export class AttitudeEndorsRepositoryImpl implements AttitudeEndorsRepository {
  private attitudeEndorsDataSource: AttitudeEndorsDataSource;
  
  constructor(attitudeEndorsDataSource: AttitudeEndorsDataSource) {
    this.attitudeEndorsDataSource = attitudeEndorsDataSource;
  }
  
  public async createAttitudeEndors(endors: AttitudeEndorsementModel): Promise<boolean> {
    return await this.attitudeEndorsDataSource.createAttitudeEndors(endors);
  }

  public async updateAttitudeEndors(id: string, endors: AttitudeEndorsementModel): Promise<boolean> {
    return await this.attitudeEndorsDataSource.updateAttitudeEndors(id, endors);
  }

  public async deleteAttitudeEndors(id: string): Promise<boolean> {
    return await this.attitudeEndorsDataSource.deleteAttitudeEndors(id);
  }

  public async getAttitudeByIdEndors(id: string): Promise<AttitudeEndorsementModel> {
    return await this.attitudeEndorsDataSource.getAttitudeByIdEndors(id);
  }

  public async getAllAttitudeEndors(): Promise<AttitudeEndorsementModel[]> {
    return await this.attitudeEndorsDataSource.getAllAttitudesEndors();
  }

}
