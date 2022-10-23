import { NextFunction, Request, Response } from 'express';
import { createPlanSchema } from '../../utils/yup-schemas';

export const validateCreatePlan = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  createPlanSchema
    .validate({ body: req.body })
    .then(() => next())
    .catch(err => res.status(400).send({ err }));
};
