import { Request } from 'express';
import { User } from '../../database/entities';

export type CreateUserParams = {
  username: string;
  password: string;
};

export type findUserParams = Partial<{ id: number; username: string }>;

export type findUserOptions = Partial<{ selectAll: boolean }>;

export type CreatePlanParams = {
  title: string;
  description: string;
  date: string;
  user: User;
};

export type GetPlansParams = {
  userId: number;
};
