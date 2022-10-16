import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes/user.routes';
import sessionRouter from '@modules/users/infra/http/routes/session.routes';
import petRouter from '@modules/pets/infra/http/routes/pets.routes';
import donationRouter from '@modules/donation/infra/http/routes/donations.routes';
import adoptionRouter from '@modules/adoption/infra/http/routes/adoptions.routes';

const router = Router();

router.use('/users', usersRouter);
router.use('/session', sessionRouter);
router.use('/pets', petRouter);
router.use('/donations', donationRouter);
router.use('/adoptions', adoptionRouter);

export default router;
