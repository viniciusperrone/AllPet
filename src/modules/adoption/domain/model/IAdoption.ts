import { IPet } from '../../../pets/domain/model/IPet';
import { IUser } from '../../../users/domain/model/IUser';

export interface IAdoption {
  uuid: string;
  user: IUser;
  pet: IPet;
  created_at: Date;
  updated_at: Date;
}
