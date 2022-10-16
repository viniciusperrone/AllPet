import { ICreateAdoption } from '../model/ICreateAdoption';
import { IAdoption } from '../model/IAdoption';

export interface IAdoptionsRepository {
  findAll(): Promise<IAdoption[]>;
  findById(uuid: string): Promise<IAdoption | null>;
  create(data: ICreateAdoption): Promise<IAdoption>;
  save(adoption: IAdoption): Promise<IAdoption | null>;
}
