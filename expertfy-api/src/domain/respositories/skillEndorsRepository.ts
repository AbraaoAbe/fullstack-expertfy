import { SkillEndorsementModel } from "../../data/data-sources/models/skill.endorsement.model";
import { SkillEndorsRepository } from "../interfaces/repositories/skillEndorsRepository";
import { SkillEndorsDataSource } from "../../data/interfaces/data-sources/skillEndorsDataSource";
import { SkillEndorsListDTO } from "../models/skillEndorsListDTO";

export class SkillEndorsRepositoryImpl implements SkillEndorsRepository {

  private skillEndorsDataSource: SkillEndorsDataSource;

  constructor(skillEndorsDataSource: SkillEndorsDataSource) {
    this.skillEndorsDataSource = skillEndorsDataSource;
  }

  public async createSkillEndors(endors: SkillEndorsementModel): Promise<boolean> {
    return await this.skillEndorsDataSource.createSkillEndors(endors);
  }

  public async updateSkillEndors(id: string, endors: SkillEndorsementModel): Promise<boolean> {
    return await this.skillEndorsDataSource.updateSkillEndors(id, endors);
  }

  public async deleteSkillEndors(id: string): Promise<boolean> {
    return await this.skillEndorsDataSource.deleteSkillEndors(id);
  }

  public async getSkillByIdEndors(id: string): Promise<SkillEndorsementModel> {
    return await this.skillEndorsDataSource.getSkillByIdEndors(id);
  }

  public async getAllSkillsEndors(): Promise<SkillEndorsementModel[]> {
    return await this.skillEndorsDataSource.getAllSkillsEndors();
  }

  public async getCountSkillEndorsByPersonId(personId: string): Promise<SkillEndorsListDTO[]> {
    return await this.skillEndorsDataSource.getCountSkillEndorsByPersonId(personId);
  }
}