import { IPet } from '@modules/pets/domain/model/IPet';
import { IUser } from '@modules/users/domain/model/IUser';

export interface ICreateAdoption {
  user: IUser;
  pet: IPet;
}
