import { SimpleListModel } from "../models/simpleListModel";
import { SkillTypeDataSource } from "../../data/interfaces/data-sources/skillTypeDataSource";
import { SkillTypeRepository } from "../../domain/interfaces/repositories/skillTypeRepository";


export class SkillTypeRepositoryImpl implements SkillTypeRepository {
  private skillDataSource: SkillTypeDataSource;

  constructor(skillDataSource: SkillTypeDataSource) {
    this.skillDataSource = skillDataSource;
  }

  public async createSkillType(skillType: SimpleListModel): Promise<boolean> {
    return await this.skillDataSource.createSkillType(skillType);
  }

  public async updateSkillType(id: string, skillType: SimpleListModel): Promise<boolean> {
    return await this.skillDataSource.updateSkillType(id, skillType);
  }

  public async deleteSkillType(id: string): Promise<boolean> {
    return await this.skillDataSource.deleteSkillType(id);
  }

  public async getSkillTypeById(id: string): Promise<SimpleListModel> {
    return await this.skillDataSource.getSkillTypeById(id);
  }

  public async getAllSkillTypes(): Promise<SimpleListModel[]> {
    return await this.skillDataSource.getAllSkillTypes();
  }
}