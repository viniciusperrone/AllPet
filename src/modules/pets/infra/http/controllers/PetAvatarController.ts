import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';
import AppError from '../../../../../shared/errors/AppError';
import { UpdatePetAvatarService } from '../../../services/UpdatePetAvatarService';

class PetAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateAvatar = container.resolve(UpdatePetAvatarService);

    const { pet_id } = request.params;

    if (!request.file?.filename) {
      throw new AppError('No files have been inserted.');
    }
    const user = updateAvatar.execute({
      pet_id,
      avatarFileName: request.file.filename,
    });

    return response.json(instanceToInstance(user));
  }
}

export { PetAvatarController };
