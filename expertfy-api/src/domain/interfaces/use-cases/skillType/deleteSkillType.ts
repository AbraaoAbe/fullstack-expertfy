
export interface DeleteSkillTypeUseCase {
    execute(id: string): Promise<boolean>;
}