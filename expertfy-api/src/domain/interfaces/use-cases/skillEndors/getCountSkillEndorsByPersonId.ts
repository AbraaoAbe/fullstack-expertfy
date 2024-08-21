import { SkillEndorsListDTO } from "../../../models/skillEndorsListDTO";

export interface GetCountSkillEndorsByPersonIdUseCase {
    execute(personId: string): Promise<SkillEndorsListDTO[]>;
}