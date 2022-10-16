import { injectable as Injectable, inject as Inject } from 'tsyringe';
import { IDonation } from '../domain/model/IDonation';
import { IDonationsRepository } from '../domain/repositories/IDonationsRepository';

@Injectable()
class ListDonationService {
  constructor(
    @Inject('DonationsRepository')
    private donationsRepository: IDonationsRepository,
  ) {}

  public async execute(): Promise<IDonation[]> {
    const donations = await this.donationsRepository.findAll();

    return donations;
  }
}

export { ListDonationService };
