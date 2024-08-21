import { SimpleListModel } from "../../data-sources/models/simple.list.model";

export interface SkillTypeDataSource {
  createSkillType(skill: SimpleListModel): Promise<boolean>;
  updateSkillType(id: string, skill: SimpleListModel): Promise<boolean>;
  deleteSkillType(id: string): Promise<boolean>;
  getSkillTypeById(id: string): Promise<SimpleListModel>;
  getAllSkillTypes(): Promise<SimpleListModel[]>;
}