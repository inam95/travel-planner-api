import { User } from '../database/entities';
import { UserRepository } from '../database/repositories';
import { getUserSelections } from '../utils/helpers';
import { findUserOptions, findUserParams } from '../utils/types';

export const findUser = (
  params: findUserParams,
  options?: findUserOptions
): Promise<User | null> => {
  const select = getUserSelections(options?.selectAll);
  return UserRepository.findOne({
    where: params,
    select
  });
};
