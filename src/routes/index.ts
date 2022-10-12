import { Router } from 'express';
import registerRoutes from './register';
import authRoutes from './auth';
const routes = Router();

routes.use('/register', registerRoutes);
routes.use('/auth', authRoutes);

export default routes;
