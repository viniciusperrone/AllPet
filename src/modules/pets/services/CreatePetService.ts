import { injectable as Injectable, inject as Inject } from 'tsyringe';
import { IPetsRepository } from '../domain/repositories/IPetsRepository';
import { ICreatePet } from '../domain/model/ICreatePet';
import { IPet } from '../domain/model/IPet';

@Injectable()
class CreatePetService {
  constructor(
    @Inject('PetsRepository')
    private petsRepository: IPetsRepository,
  ) {}

  public async execute({
    name,
    cellphone,
    description,
  }: ICreatePet): Promise<IPet> {
    const user = await this.petsRepository.create({
      name,
      cellphone,
      description,
    });

    return user;
  }
}

export { CreatePetService };
