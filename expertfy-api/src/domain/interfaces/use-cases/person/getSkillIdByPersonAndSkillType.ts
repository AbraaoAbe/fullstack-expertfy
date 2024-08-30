export interface GetSkillIdByPersonAndSkillTypeUseCase {
  execute(personId: string, skillTypeId: string): Promise<string>;
}