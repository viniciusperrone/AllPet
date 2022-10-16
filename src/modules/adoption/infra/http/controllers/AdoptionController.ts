import { CreateAdoptionService } from '@modules/adoption/services/CreateAdoptionService';
import { ListAdoptionsService } from '@modules/adoption/services/ListAdoptionService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class AdoptionController {
  public async index(request: Request, response: Response) {
    const listAdoptions = container.resolve(ListAdoptionsService);

    const donations = await listAdoptions.execute();

    return response.json(donations);
  }
  public async create(request: Request, response: Response) {
    const { pet_id } = request.body;
    const user_id = request.user.uuid;

    const createDonationService = container.resolve(CreateAdoptionService);

    const pet = await createDonationService.execute({
      user_id,
      pet_id,
    });

    return response.json(pet);
  }
}

export { AdoptionController };
