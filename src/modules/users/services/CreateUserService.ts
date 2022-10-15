import AppError from '@shared/errors/AppError';
import { injectable as Injectable, inject as Inject } from 'tsyringe';
import { ICreateUser } from '../domain/model/ICreateUser';
import { IUser } from '../domain/model/IUser';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';

@Injectable()
class CreateUserService {
  constructor(
    @Inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ name, email, password }: ICreateUser): Promise<IUser> {
    const emailExist = await this.usersRepository.findByEmail(email);

    if (emailExist) {
      throw new AppError('Email already used!');
    }

    const user = await this.usersRepository.create({
      name,
      email,
      password,
    });

    return user;
  }
}
