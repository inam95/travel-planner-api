import { Router } from 'express';
import { createPlansController } from '../controllers/plans';
import { validateAuth } from '../middleware/auth';
import { validateCreatePlan } from '../middleware/plans/validators';

const router = Router();

router.use(validateAuth);

router.post('/', validateCreatePlan, createPlansController);

export default router;
