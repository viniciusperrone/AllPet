import { IDonation } from '../model/IDonation';
import { ICreateDonation } from '../model/ICreateDonation';

export interface IDonationsRepository {
  findAll(): Promise<IDonation[]>;
  findById(uuid: string): Promise<IDonation | null>;
  create(data: ICreateDonation): Promise<IDonation>;
  save(pet: IDonation): Promise<IDonation | null>;
}
