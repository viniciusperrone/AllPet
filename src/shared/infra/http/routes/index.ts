import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes/user.routes';
import sessionRouter from '@modules/users/infra/http/routes/session.routes';

const router = Router();

router.use('/users', usersRouter);
router.use('/session', sessionRouter);
// router.get('/donation');
// router.get('/pet');
// router.get('/adoption');

export default router;
