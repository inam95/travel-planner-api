import { Request, Response } from 'express';
import { User } from '../database/entities';
import { createPlanService, getPlansService } from '../services/plans';

export const createPlansController = async (req: Request, res: Response) => {
  const creator = req.user;
  const createPlanPayload = req.body;
  try {
    const plan = await createPlanService({ ...createPlanPayload, creator });
    res.status(201).send(plan);
  } catch (err: any) {
    console.log(err);
    res.status(400).status(err);
  }
};

export const getPlansController = async (req: Request, res: Response) => {
  const user = req.user as User;
  console.log(user);

  try {
    const plans = await getPlansService({ userId: user?.id });
    res.send(plans);
  } catch (err: any) {
    console.log(err);
    res.status(400).send(err);
  }
};
