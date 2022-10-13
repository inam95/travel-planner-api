import { Request, Router, Response } from 'express';
import passport from 'passport';
import { authStatusController, loginController } from '../controllers/auth';

const router = Router();

router.post('/login', passport.authenticate('local'), loginController);
router.get('/status', authStatusController);

export default router;
