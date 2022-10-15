import { injectable as Injectable, inject as Inject } from 'tsyringe';
import path from 'path';
import fs from 'fs';
import uploadConfig from '@config/upload';
import { IPetsRepository } from '../domain/repositories/IPetsRepository';
import { IPet } from '../domain/model/IPet';
import { IUpdatePetAvatar } from '../domain/model/IUpdatePetAvatar';
import AppError from '@shared/errors/AppError';

@Injectable()
class UpdatePetAvatarService {
  constructor(
    @Inject('PetsRepository')
    private petsRepository: IPetsRepository,
  ) {}

  public async execute({
    pet_id,
    avatarFileName,
  }: IUpdatePetAvatar): Promise<IPet> {
    const pet = await this.petsRepository.findById(pet_id);

    if (!pet) {
      throw new AppError('User not found.');
    }

    if (pet.avatar) {
      const petAvatarFilePath = path.join(uploadConfig.directory, pet.avatar);
      const petAvatarExists = await fs.promises.stat(petAvatarFilePath);

      if (petAvatarExists) {
        await fs.promises.unlink(petAvatarFilePath);
      }
    }

    pet.avatar = avatarFileName;

    await this.petsRepository.save(pet);

    return pet;
  }
}

export { UpdatePetAvatarService };
