import { IPet } from '@modules/pets/domain/model/IPet';
import { IUser } from '@modules/users/domain/model/IUser';

export interface IDonation {
  uuid: string;
  user: IUser;
  pet: IPet;
  created_at: Date;
  updated_at: Date;
}
