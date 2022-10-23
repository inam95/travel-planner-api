import { NextFunction, Request, Response } from 'express';

export const validateAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.user ? next() : res.status(401).send({ message: 'Unauthorized' });
};
