import { HumanTaskCountDTO } from "../../../models/humanTaskCountDTO";

export interface GetCountHumanTaskByPersonGroupBySkillUsecase {
  execute(personId: string): Promise<HumanTaskCountDTO[]>;
}