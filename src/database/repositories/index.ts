import { AppDataSource } from '..';
import { Plan, User, Session } from '../entities';

export const UserRepository = AppDataSource.getRepository(User);
export const SessionRepository = AppDataSource.getRepository(Session);
export const PlanRepository = AppDataSource.getRepository(Plan);
