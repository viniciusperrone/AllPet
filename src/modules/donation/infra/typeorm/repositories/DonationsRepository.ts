import { ICreateDonation } from '@modules/donation/domain/model/ICreateDonation';
import { IDonation } from '@modules/donation/domain/model/IDonation';
import { IDonationsRepository } from '@modules/donation/domain/repositories/IDonationsRepository';
import { dataSource } from '@shared/infra/typeorm';
import { Repository } from 'typeorm';
import Donation from '../entities/Donation';

class DonationsRepository implements IDonationsRepository {
  private databaseRepository: Repository<Donation>;

  constructor() {
    this.databaseRepository = dataSource.getRepository(Donation);
  }

  public async findAll(): Promise<IDonation[]> {
    const donations = await this.databaseRepository.find();

    return donations;
  }

  public async findById(uuid: string): Promise<IDonation | null> {
    const donation = await this.databaseRepository.findOne({ where: { uuid } });

    return donation;
  }

  public async create({
    user_id,
    pet_id,
  }: ICreateDonation): Promise<IDonation> {
    const donation = this.databaseRepository.create({ user_id, pet_id });
    console.log(donation);
    try {
      await this.databaseRepository.save(donation);
    } catch (error) {
      console.log(error);
    }

    return donation;
  }

  public async save(donation: IDonation): Promise<IDonation | null> {
    await this.databaseRepository.save(donation);

    return donation;
  }
}

export { DonationsRepository };
