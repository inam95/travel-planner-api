import { Request } from 'express';
import { FindOptionsRelationByString, FindOptionsRelations } from 'typeorm';
import { User } from '../../database/entities';

export type CreateUserParams = {
  username: string;
  password: string;
};

export type findUserParams = Partial<{ id: number; username: string }>;

export type findUserOptions = Partial<{
  selectAll: boolean;
  relations: FindOptionsRelationByString | FindOptionsRelations<User>;
}>;

export type CreatePlanParams = {
  title: string;
  description: string;
  date: string;
  creator: User;
};

export type GetPlansParams = {
  userId: number;
};
