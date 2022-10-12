import { Router } from 'express';
import { registerUserController } from '../controllers/register';
import { validateRegisterUser } from '../middleware/register/middleware';
const routes = Router();

routes.post('/', validateRegisterUser, registerUserController);

export default routes;
