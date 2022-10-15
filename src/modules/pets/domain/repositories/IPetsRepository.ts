import { ICreatePet } from '../model/ICreatePet';
import { IPet } from '../model/IPet';

export interface IPetsRepository {
  findAll(): Promise<IPet[]>;
  findById(uuid: string): Promise<IPet | null>;
  create(data: ICreatePet): Promise<IPet>;
  save(pet: IPet): Promise<IPet | null>;
}
