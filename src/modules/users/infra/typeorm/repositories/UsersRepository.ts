import { ICreateUser } from '@modules/users/domain/model/ICreateUser';
import { IUser } from '@modules/users/domain/model/IUser';
import { IUsersRepository } from '@modules/users/domain/repositories/IUsersRepository';
import { dataSource } from '@shared/infra/typeorm';
import { Repository } from 'typeorm';
import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private databaseRepository: Repository<User>;

  constructor() {
    this.databaseRepository = dataSource.getRepository(User);
  }

  public async findAll(): Promise<IUser[]> {
    const users = await this.databaseRepository.find();

    return users;
  }

  public async findById(uuid: string): Promise<IUser | null> {
    const user = await this.databaseRepository.findOne({ where: { uuid } });

    return user;
  }

  public async findByEmail(email: string): Promise<IUser | null> {
    const user = await this.databaseRepository.findOne({ where: { email } });

    return user;
  }

  public async create(data: ICreateUser): Promise<IUser | null> {
    const user = this.databaseRepository.create({ ...data });

    await this.databaseRepository.save(user);

    return user;
  }

  public async save(user: IUser): Promise<IUser | null> {
    await this.databaseRepository.save(user);

    return user;
  }
}

export { UsersRepository };
