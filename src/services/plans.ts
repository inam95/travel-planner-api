import { PlanRepository } from '../database/repositories';
import { CreatePlanParams } from '../utils/types';

export const createPlanService = async (params: CreatePlanParams) => {
  const plan = PlanRepository.create(params);
  return PlanRepository.save(plan);
};
