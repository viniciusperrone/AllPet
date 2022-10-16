import { injectable as Injectable, inject as Inject } from 'tsyringe';
import AppError from '../../../shared/errors/AppError';
import { IDonationsRepository } from '../domain/repositories/IDonationsRepository';
import { IUsersRepository } from '../../users/domain/repositories/IUsersRepository';
import { IPetsRepository } from '../../pets/domain/repositories/IPetsRepository';
import { IDonation } from '../domain/model/IDonation';
import { IRequestDonation } from '../domain/model/IRequestDonation';

@Injectable()
class CreateDonationService {
  constructor(
    @Inject('DonationsRepository')
    private donationsRepository: IDonationsRepository,
    @Inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @Inject('PetsRepository')
    private petsRepository: IPetsRepository,
  ) {}

  public async execute({
    user_id,
    pet_id,
  }: IRequestDonation): Promise<IDonation> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Could not find any user with the given id.');
    }

    const pet = await this.petsRepository.findById(pet_id);

    if (!pet) {
      throw new AppError('Could not find any pet with the given id.');
    }

    console.log('service');
    const donation = await this.donationsRepository.create({
      user,
      pet,
    });

    return donation;
  }
}

export { CreateDonationService };
