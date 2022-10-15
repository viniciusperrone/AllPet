import { ICreatePet } from '@modules/pets/domain/model/ICreatePet';
import { IPet } from '@modules/pets/domain/model/IPet';
import { IPetsRepository } from '@modules/pets/domain/repositories/IPetsRepository';
import { dataSource } from '@shared/infra/typeorm';
import { Repository } from 'typeorm';
import Pet from '../entities/Pet';

class PetsRepository implements IPetsRepository {
  private databaseRepository: Repository<Pet>;

  constructor() {
    this.databaseRepository = dataSource.getRepository(Pet);
  }

  public async findAll(): Promise<IPet[]> {
    const pets = await this.databaseRepository.find();

    return pets;
  }

  public async findById(uuid: string): Promise<IPet | null> {
    const pet = await this.databaseRepository.findOne({ where: { uuid } });

    return pet;
  }

  public async create(data: ICreatePet): Promise<IPet> {
    const pet = this.databaseRepository.create({ ...data });

    await this.databaseRepository.save(pet);

    return pet;
  }

  public async save(pet: IPet): Promise<IPet | null> {
    await this.databaseRepository.save(pet);

    return pet;
  }
}

export { PetsRepository };
