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
  url: process.env.DATABASE_URL,
  type: 'postgres',
  host: 'ec2-44-209-24-62.compute-1.amazonaws.com',
  port: 5432,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
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
