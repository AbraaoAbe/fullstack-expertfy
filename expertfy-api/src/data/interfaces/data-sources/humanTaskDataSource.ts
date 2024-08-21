import { HumanTaskModel } from "../../data-sources/models/human.task.model";
import { PersonCountDTO } from "../../../domain/models/personCountDTO";
import { PersonTableDTO } from "../../../domain/models/personTableDTO";
import { HumanTaskCountDTO } from "../../../domain/models/humanTaskCountDTO";

export interface HumanTaskDataSource {
  createHumanTask(taskOut: HumanTaskModel): Promise<boolean>;
  updateHumanTask(id: string, taskOut: HumanTaskModel): Promise<boolean>;
  deleteHumanTask(id: string): Promise<boolean>;
  getHumanTaskById(id: string): Promise<HumanTaskModel>;
  getAllHumanTasks(): Promise<HumanTaskModel[]>;
  getCountGroupByPersonHumanTasksBySkillType(skillType: string): Promise<PersonCountDTO[]>;
  getHumanTaskTableListByPersonId(personId: string): Promise<PersonTableDTO[]>
  getCountHumanTaskByPersonGroupBySkill(personId: string): Promise<HumanTaskCountDTO[]>;
  getTotalCountHumanTaskGroupBySkill(): Promise<HumanTaskCountDTO[]>;
}