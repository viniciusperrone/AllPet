import { container } from 'tsyringe';

import { IUsersRepository } from '../../modules/users/domain/repositories/IUsersRepository';
import { UsersRepository } from '../../modules/users/infra/typeorm/repositories/UsersRepository';
import { IPetsRepository } from '../../modules/pets/domain/repositories/IPetsRepository';
import { PetsRepository } from '../../modules/pets/infra/typeorm/repositories/PetsRepository';
import { IDonationsRepository } from '../../modules/donation/domain/repositories/IDonationsRepository';
import { DonationsRepository } from '../../modules/donation/infra/typeorm/repositories/DonationsRepository';
import { IAdoptionsRepository } from '../../modules/adoption/domain/repositories/IAdoptionsRepository';
import { AdoptionsRepository } from '../../modules/adoption/infra/typeorm/repositories/AdoptionsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IPetsRepository>('PetsRepository', PetsRepository);

container.registerSingleton<IDonationsRepository>(
  'DonationsRepository',
  DonationsRepository,
);

container.registerSingleton<IAdoptionsRepository>(
  'AdoptionsRepository',
  AdoptionsRepository,
);
