
export interface DeleteTaskOutputUseCase {
    execute(id: string): Promise<boolean>;
}