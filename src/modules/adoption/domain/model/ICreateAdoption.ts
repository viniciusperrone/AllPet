import { IPet } from '../../../pets/domain/model/IPet';
import { IUser } from '../../../users/domain/model/IUser';

export interface ICreateAdoption {
  user: IUser;
  pet: IPet;
}
