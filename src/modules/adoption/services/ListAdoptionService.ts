import { injectable as Injectable, inject as Inject } from 'tsyringe';
import { IAdoption } from '../domain/model/IAdoption';
import { IAdoptionsRepository } from '../domain/repositories/IAdoptionsRepository';

@Injectable()
class ListAdoptionsService {
  constructor(
    @Inject('AdoptionsRepository')
    private adoptionsRepository: IAdoptionsRepository,
  ) {}

  public async execute(): Promise<IAdoption[]> {
    const donations = await this.adoptionsRepository.findAll();

    return donations;
  }
}

export { ListAdoptionsService };
