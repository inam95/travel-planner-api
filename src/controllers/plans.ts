import { Request, Response } from 'express';
import { createPlanService } from '../services/plans';

export const createPlansController = async (req: Request, res: Response) => {
  const user = req.user;
  const createPlanPayload = req.body;
  try {
    const plan = await createPlanService({ ...createPlanPayload, user });
    console.log(plan);

    res.status(201).send(plan);
  } catch (err: any) {
    console.log(err);
    res.status(400).status(err);
  }
};
