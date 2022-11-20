import { User } from '../database/entities';

export const userSelection: (keyof User)[] = ['id', 'username', 'plans', 'createdPlans'];
