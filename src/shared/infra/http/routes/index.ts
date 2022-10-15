import usersRouter from '@modules/users/infra/http/routes/user.routes';
import { Router } from 'express';

const router = Router();

router.use('/users', usersRouter);

// router.get('/donation');
// router.get('/pet');
// router.get('/adoption');

export default router;
