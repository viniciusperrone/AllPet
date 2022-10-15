import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserService } from '@modules/users/services/CreateUserService';

class UserController {
  public async create(request: Request, response: Response) {
    const { name, email, cellphone, password } = request.body;

    const createUserService = container.resolve(CreateUserService);
    const user = await createUserService.execute({
      name,
      email,
      cellphone,
      password,
    });

    return response.json(user);
  }
}

export { UserController };
