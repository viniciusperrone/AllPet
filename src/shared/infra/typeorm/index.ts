import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

import {
  CreateUsers,
  CreateTokens,
  CreatePets,
  CreateDonations,
  AddUserIdToDonation,
  AddPetIdToDonation,
  CreateAdoptions,
  AddUserIdToAdoption,
  AddPetIdToAdoption,
} from './migrations';
import User from '../../../modules/users/infra/typeorm/entities/User';
import UserToken from '../../../modules/users/infra/typeorm/entities/UserToken';
import Pet from '../../../modules/pets/infra/typeorm/entities/Pet';
import Donation from '../../../modules/donation/infra/typeorm/entities/Donation';
import Adoption from '../../../modules/adoption/infra/typeorm/entities/Adoption';

dotenv.config();

export const dataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  migrations: [
    CreateUsers,
    CreateTokens,
    CreatePets,
    CreateDonations,
    AddUserIdToDonation,
    AddPetIdToDonation,
    CreateAdoptions,
    AddUserIdToAdoption,
    AddPetIdToAdoption,
  ],
  entities: [User, UserToken, Pet, Donation, Adoption],
});
