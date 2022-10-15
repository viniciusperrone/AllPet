import { injectable as Injectable, inject as Inject } from 'tsyringe';
import { IPetsRepository } from '../domain/repositories/IPetsRepository';
import { IPet } from '../domain/model/IPet';

@Injectable()
class ListPetService {
  constructor(
    @Inject('PetsRepository')
    private petsRepository: IPetsRepository,
  ) {}

  public async execute(): Promise<IPet[]> {
    const pets = await this.petsRepository.findAll();

    return pets;
  }
}

export { ListPetService };
