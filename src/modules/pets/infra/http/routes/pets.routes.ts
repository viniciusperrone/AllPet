import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import { PetController } from '../controllers/PetController';
import isAuthenticated from '@shared/infra/middlewares/isAuthenticated';

const petRouter = Router();
const petController = new PetController();

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

export default petRouter;
