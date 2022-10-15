import { injectable as Injectable, inject as Inject } from 'tsyringe';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import AppError from '@shared/errors/AppError';
import authConfig from '@config/auth';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';
import { ICreateSession } from '../domain/model/ICreateSession';
import { IUserAuthenticated } from '../domain/model/IUserAuthenticated';

@Injectable()
class CreateSessionService {
  constructor(
    @Inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  public async execute({
    email,
    password,
  }: ICreateSession): Promise<IUserAuthenticated> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email/password combination!', 401);
    }

    if (password !== user.password) {
      throw new AppError('Incorrect email/password combination!', 401);
    }

    // const passwordConfirmed = await compare(password, user.password);

    // if (!passwordConfirmed) {
    //   throw new AppError('Incorrect email/password combination!', 401);
    // }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.uuid,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default CreateSessionService;
