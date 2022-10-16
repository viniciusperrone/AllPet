import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

import {
  CreateUsers,
  CreateTokens,
  CreatePets,
  CreateDonations,
  AddUserId,
  AddPetId,
} from './migrations';
import User from '@modules/users/infra/typeorm/entities/User';
import UserToken from '@modules/users/infra/typeorm/entities/UserToken';
import Pet from '@modules/pets/infra/typeorm/entities/Pet';
import Donation from '@modules/donation/infra/typeorm/entities/Donation';

dotenv.config();

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: 5432,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  migrations: [
    CreateUsers,
    CreateTokens,
    CreatePets,
    CreateDonations,
    AddUserId,
    AddPetId,
  ],
  entities: [User, UserToken, Pet, Donation],
});
