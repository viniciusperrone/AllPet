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
    user_id,
    name,
    cellphone,
    description,
  }: ICreatePet): Promise<IPet> {
    const pet = await this.petsRepository.create({
      user_id,
      name,
      cellphone,
      description,
    });

    return pet;
  }
}

export { CreatePetService };
