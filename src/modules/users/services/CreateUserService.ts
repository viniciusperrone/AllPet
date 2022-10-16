import { injectable as Injectable, inject as Inject } from 'tsyringe';
import { hash } from 'bcryptjs';
import AppError from '../../../shared/errors/AppError';
import { ICreateUser } from '../domain/model/ICreateUser';
import { IUser } from '../domain/model/IUser';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';

@Injectable()
class CreateUserService {
  constructor(
    @Inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    name,
    email,
    cellphone,
    password,
  }: ICreateUser): Promise<IUser> {
    const emailExist = await this.usersRepository.findByEmail(email);

    if (emailExist) {
      throw new AppError('Email already used!');
    }

    const hashedPassword = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      email,
      cellphone,
      password: hashedPassword,
    });

    return user;
  }
}

export { CreateUserService };
