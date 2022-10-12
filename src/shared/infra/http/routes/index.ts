import { Router} from 'express'

const router = Router();

router.get('/user');
router.get('/donation');
router.get('/pet');
router.get('/adoption');

export default router;