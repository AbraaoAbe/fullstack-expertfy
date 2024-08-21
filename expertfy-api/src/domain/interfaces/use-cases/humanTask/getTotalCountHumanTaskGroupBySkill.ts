import { HumanTaskCountDTO } from "../../../models/humanTaskCountDTO";

export interface GetTotalCountHumanTaskGroupBySkillUsecase {
  execute(): Promise<HumanTaskCountDTO[]>;
}