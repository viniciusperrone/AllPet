import { CreateDonationService } from '@modules/donation/services/CreateDonationService';
import { ListDonationService } from '@modules/donation/services/ListDonationService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class DonationController {
  public async index(request: Request, response: Response) {
    const listDonations = container.resolve(ListDonationService);

    const donations = await listDonations.execute();

    return response.json(donations);
  }
  public async create(request: Request, response: Response) {
    const { pet_id } = request.body;
    const user_id = request.user.uuid;

    const createDonationService = container.resolve(CreateDonationService);

    const pet = await createDonationService.execute({
      user_id,
      pet_id,
    });

    return response.json(pet);
  }
}

export { DonationController };
