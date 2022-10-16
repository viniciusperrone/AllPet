import { injectable as Injectable, inject as Inject } from 'tsyringe';
import { IDonationsRepository } from '../domain/repositories/IDonationsRepository';
import { IUsersRepository } from '@modules/users/domain/repositories/IUsersRepository';
import { IPetsRepository } from '@modules/pets/domain/repositories/IPetsRepository';
import { ICreateDonation } from '../domain/model/ICreateDonation';
import { IDonation } from '../domain/model/IDonation';
import AppError from '@shared/errors/AppError';

@Injectable()
class CreateDonationService {
  constructor(
    @Inject('PetsRepository')
    private donationsRepository: IDonationsRepository,
    @Inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @Inject('PetsRepository')
    private petsRepository: IPetsRepository,
  ) {}

  public async execute({
    user_id,
    pet_id,
  }: ICreateDonation): Promise<IDonation> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Could not find any user with the given id.');
    }

    const pet = this.petsRepository.findById(pet_id);

    if (!pet) {
      throw new AppError('Could not find any pet with the given id.');
    }

    const donation = await this.donationsRepository.create({
      user_id,
      pet_id,
    });

    return donation;
  }
}

export { CreateDonationService };
