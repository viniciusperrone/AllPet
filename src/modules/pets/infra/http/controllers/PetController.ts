import { CreatePetService } from '@modules/pets/services/CreatePetService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class PetController {
  public async create(request: Request, response: Response) {
    const { name, cellphone, description } = request.body;
    const user_id = request.user.uuid;

    const createPetService = container.resolve(CreatePetService);

    const pet = await createPetService.execute({
      user_id,
      name,
      cellphone,
      description,
    });

    return response.json(pet);
  }
}

export { PetController };
