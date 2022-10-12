import { Router } from 'express';
import registerRoutes from './register';
const routes = Router();

routes.use('/register', registerRoutes);

export default routes;
