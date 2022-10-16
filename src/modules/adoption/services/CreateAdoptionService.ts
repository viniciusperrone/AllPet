import { injectable as Injectable, inject as Inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import { IUsersRepository } from '@modules/users/domain/repositories/IUsersRepository';
import { IPetsRepository } from '@modules/pets/domain/repositories/IPetsRepository';
import { IAdoptionsRepository } from '../domain/repositories/IAdoptionsRepository';
import { IAdoption } from '../domain/model/IAdoption';
import { IRequestAdoption } from '../domain/model/IRequestAdoption';

@Injectable()
class CreateAdoptionService {
  constructor(
    @Inject('AdoptionsRepository')
    private adoptionsRepository: IAdoptionsRepository,
    @Inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @Inject('PetsRepository')
    private petsRepository: IPetsRepository,
  ) {}

  public async execute({
    user_id,
    pet_id,
  }: IRequestAdoption): Promise<IAdoption> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Could not find any user with the given id.');
    }

    const pet = await this.petsRepository.findById(pet_id);

    if (!pet) {
      throw new AppError('Could not find any pet with the given id.');
    }

    if (user_id === pet.user_id) {
      throw new AppError('You already have this pet.');
    }

    const donation = await this.adoptionsRepository.create({
      user,
      pet,
    });

    return donation;
  }
}

export { CreateAdoptionService };
