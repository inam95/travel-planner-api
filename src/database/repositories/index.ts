import { AppDataSource } from '..';
import { User } from '../entities';

export const UserRepository = AppDataSource.getRepository(User);
