import { ICreateUser } from '../model/ICreateUser';
import { IUser } from '../model/IUser';

export interface IUsersRepository {
  findAll(): Promise<IUser[]>;
  findById(uuid: string): Promise<IUser | null>;
  findByEmail(email: string): Promise<IUser | null>;
  create(data: ICreateUser): Promise<IUser>;
  save(user: IUser): Promise<IUser | null>;
}
