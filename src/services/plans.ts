import { Plan } from '../database/entities';
import { PlanRepository, UserRepository } from '../database/repositories';
import { CreatePlanParams, GetPlansParams } from '../utils/types';
import { findUser } from './user';

export const createPlanService = async (params: CreatePlanParams) => {
  const user = await findUser({ id: params.creator.id }, { relations: ['plans'] });
  const newPlan = PlanRepository.create({ ...params });
  if (!user) throw new Error('User not found');
  const plan = await PlanRepository.save(newPlan);
  user.plans = [...user.plans, plan];
  await UserRepository.save(user);
  return plan;
};

export const getPlansService = async ({ userId }: GetPlansParams): Promise<Plan[]> => {
  return PlanRepository.createQueryBuilder('plans')
    .leftJoinAndSelect('plans.users', 'user')
    .where('user.id IN (:...users)', { users: [userId] })
    .leftJoinAndSelect('plans.users', 'users')
    .leftJoinAndSelect('plans.creator', 'creator')
    .getMany();
};
