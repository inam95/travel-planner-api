import { Plan } from '../database/entities';
import { PlanRepository } from '../database/repositories';
import { CreatePlanParams, GetPlansParams } from '../utils/types';

export const createPlanService = async (params: CreatePlanParams) => {
  const plan = PlanRepository.create(params);
  return PlanRepository.save(plan);
};

export const getPlansService = async ({
  userId
}: GetPlansParams): Promise<Plan[]> => {
  console.log(userId);

  return PlanRepository.find({
    where: {
      user: {
        id: userId
      }
    }
  });
};
