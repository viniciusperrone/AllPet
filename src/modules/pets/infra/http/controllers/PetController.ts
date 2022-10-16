import { CreatePetService } from '../../../services/CreatePetService';
import { ListPetService } from '../../../services/ListPetService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class PetController {
  public async index(request: Request, response: Response) {
    const listPets = container.resolve(ListPetService);

    const pets = await listPets.execute();

    return response.json(pets);
  }
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
