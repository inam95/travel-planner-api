import { Request, Response } from 'express';

export const loginController = async (req: Request, res: Response) => {
  res.sendStatus(200);
};

export const authStatusController = async (req: Request, res: Response) => {
  req.user ? res.send(req.user) : res.sendStatus(401);
};
