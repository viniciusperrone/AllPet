import { IAdoption } from '../../../domain/model/IAdoption';
import { ICreateAdoption } from '../../../../adoption/domain/model/ICreateAdoption';
import { IAdoptionsRepository } from '../../../../adoption/domain/repositories/IAdoptionsRepository';
import { dataSource } from '../../../../../shared/infra/typeorm';
import { Repository } from 'typeorm';
import Adoption from '../entities/Adoption';

class AdoptionsRepository implements IAdoptionsRepository {
  private databaseRepository: Repository<Adoption>;

  constructor() {
    this.databaseRepository = dataSource.getRepository(Adoption);
  }

  public async findAll(): Promise<IAdoption[]> {
    const adoptions = await this.databaseRepository.find();

    return adoptions;
  }

  public async findById(uuid: string): Promise<IAdoption | null> {
    const adoption = await this.databaseRepository.findOne({ where: { uuid } });

    return adoption;
  }

  public async create(data: ICreateAdoption): Promise<IAdoption> {
    const adoption = this.databaseRepository.create({ ...data });

    await this.databaseRepository.save(adoption);

    return adoption;
  }

  public async save(adoption: IAdoption): Promise<IAdoption | null> {
    await this.databaseRepository.save(adoption);

    return adoption;
  }
}

export { AdoptionsRepository };
