import { IUserToken } from '../model/IUserToken';

export interface IUserTokensRepository {
  findByToken(token: string): Promise<IUserToken | null>;
  generate(user_id: string): Promise<IUserToken>;
}
