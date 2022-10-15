import { Router } from 'express';
import multer from 'multer';
import { celebrate, Joi, Segments } from 'celebrate';
import uploadConfig from '@config/upload';
import { PetController } from '../controllers/PetController';
import isAuthenticated from '@shared/infra/middlewares/isAuthenticated';
import { PetAvatarController } from '../controllers/PetAvatarController';

const petRouter = Router();
const petController = new PetController();
const petAvatarController = new PetAvatarController();

const upload = multer(uploadConfig);

petRouter.get('/', isAuthenticated, petController.index);

petRouter.post(
  '/',
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      cellphone: Joi.string().required(),
      description: Joi.string().required(),
    },
  }),
  petController.create,
);

petRouter.patch(
  '/avatar/:uuid',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      uuid: Joi.string().uuid().required(),
    },
  }),
  upload.single('avatar'),
  petAvatarController.update,
);

export default petRouter;
