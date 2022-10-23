import { Router } from 'express';
import {
  createPlansController,
  getPlansController
} from '../controllers/plans';
import { validateAuth } from '../middleware/auth';
import { validateCreatePlan } from '../middleware/plans/validators';

const router = Router();

router.use(validateAuth);

router.post('/', validateCreatePlan, createPlansController);
router.get('/', getPlansController);

export default router;
