import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from '@shared/infra/middlewares/isAuthenticated';
import { AdoptionController } from '../controllers/AdoptionController';

const adoptionRouter = Router();
const adoptionController = new AdoptionController();

adoptionRouter.get('/', isAuthenticated, adoptionController.index);

adoptionRouter.post(
  '/',
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      pet_id: Joi.string().uuid().required(),
    },
  }),
  adoptionController.create,
);

export default adoptionRouter;
