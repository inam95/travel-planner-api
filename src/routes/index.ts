import { Router } from 'express';
import registerRoutes from './register';
import authRoutes from './auth';
import plansRoutes from './plans';
const routes = Router();

routes.use('/register', registerRoutes);
routes.use('/auth', authRoutes);
routes.use('/plans', plansRoutes);

export default routes;
