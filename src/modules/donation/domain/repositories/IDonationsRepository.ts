import { ICreateDonation } from '../model/ICreateDonation';
import { IDonation } from '../model/IDonation';

export interface IDonationsRepository {
  findAll(): Promise<IDonation[]>;
  findById(uuid: string): Promise<IDonation | null>;
  create(data: ICreateDonation): Promise<IDonation>;
  save(donation: IDonation): Promise<IDonation | null>;
}
