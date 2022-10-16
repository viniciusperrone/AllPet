import { IPet } from '../../../pets/domain/model/IPet';
import { IUser } from '../../../users/domain/model/IUser';

export interface ICreateDonation {
  user: IUser;
  pet: IPet;
}
