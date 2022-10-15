import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes/user.routes';
import sessionRouter from '@modules/users/infra/http/routes/session.routes';
import petRouter from '@modules/pets/infra/http/routes/pets.routes';

const router = Router();

router.use('/users', usersRouter);
router.use('/session', sessionRouter);
router.use('/pets', petRouter);
// router.get('/donation');
// router.get('/pet');
// router.get('/adoption');

export default router;
