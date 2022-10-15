import { Request, Response } from 'express';

class UserController {
  public async create(request: Request, response: Response) {
    const { name, email, password } = request.body;

    return response.json({ name, email, password });
  }
}

export { UserController };
