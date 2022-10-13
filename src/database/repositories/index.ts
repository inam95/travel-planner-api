import { AppDataSource } from '..';
import { User } from '../entities';
import { Session } from '../entities/Session';

export const UserRepository = AppDataSource.getRepository(User);
export const SessionRepository = AppDataSource.getRepository(Session);
