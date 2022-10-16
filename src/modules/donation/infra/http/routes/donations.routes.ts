import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from '@shared/infra/middlewares/isAuthenticated';
import { DonationController } from '../controllers/DonationController';

const donationRouter = Router();
const donationController = new DonationController();

donationRouter.get('/', isAuthenticated, donationController.index);

donationRouter.post(
  '/',
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      pet_id: Joi.string().uuid().required(),
    },
  }),
  donationController.create,
);

export default donationRouter;
