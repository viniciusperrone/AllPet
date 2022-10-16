import { IPet } from '@modules/pets/domain/model/IPet';
import { IUser } from '@modules/users/domain/model/IUser';

export interface ICreateDonation {
  user: IUser;
  pet: IPet;
}
