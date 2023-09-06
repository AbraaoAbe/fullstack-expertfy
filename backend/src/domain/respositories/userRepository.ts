import { userModel } from "../models/userModel";
import { userRepository } from "../interfaces/repositories/userRepository";
import { userDataSource } from "../../data/interfaces/data-sources/userDataSource";

export class userRepositoryImpl implements userRepository {
  private userDataSource: userDataSource;

  constructor(userDataSource: userDataSource) {
    this.userDataSource = userDataSource;
  }

  public async createUser(user: userModel): Promise<boolean> {
    const result = await this.userDataSource.createUser(user);
    return result;
  }

  public async updateUser(id: string, user: userModel): Promise<boolean> {
    const result = await this.userDataSource.updateUser(id, user);
    return result;
  }

  public async deleteUser(id: string): Promise<boolean> {
    const deletedUser = await this.userDataSource.deleteUser(id);
    return deletedUser;
  }

  public async getUserById(id: string): Promise<userModel> {
    const user = await this.userDataSource.getUserById(id);
    return user;
  }

  public async getAllUser(): Promise<userModel[]> {
    const users = await this.userDataSource.getAllUsers();
    return users;
  }
}