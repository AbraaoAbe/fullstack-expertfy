import { SkillModel } from "../../data/data-sources/models/skill.model";
import { SkillRepository } from "../interfaces/repositories/skillRepository";
import { SkillDataSource } from "../../data/interfaces/data-sources/skillDataSource";

export class SkillRepositoryImpl implements SkillRepository {
  private skillDataSource: SkillDataSource;

  constructor(skillDataSource: SkillDataSource) {
    this.skillDataSource = skillDataSource;
  }

  public async createSkill(skill: SkillModel): Promise<boolean> {
    return await this.skillDataSource.createSkill(skill);
  }

  public async updateSkill(id: string, skill: SkillModel): Promise<boolean> {
    return await this.skillDataSource.updateSkill(id, skill);
  }

  public async deleteSkill(id: string): Promise<boolean> {
    return await this.skillDataSource.deleteSkill(id);
  }

  public async getSkillById(id: string): Promise<SkillModel> {
    return await this.skillDataSource.getSkillById(id);
  }

  public async getAllSkills(): Promise<SkillModel[]> {
    return await this.skillDataSource.getAllSkills();
  }
}