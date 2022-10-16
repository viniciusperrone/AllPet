import { ICreateDonation } from '../../../../donation/domain/model/ICreateDonation';
import { IDonation } from '../../../../donation/domain/model/IDonation';
import { IDonationsRepository } from '../../../../donation/domain/repositories/IDonationsRepository';
import { dataSource } from '../../../../../shared/infra/typeorm';
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

  public async create(data: ICreateDonation): Promise<IDonation> {
    const donation = this.databaseRepository.create({ ...data });

    await this.databaseRepository.save(donation);

    return donation;
  }

  public async save(donation: IDonation): Promise<IDonation | null> {
    await this.databaseRepository.save(donation);

    return donation;
  }
}

export { DonationsRepository };
