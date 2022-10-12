import bcrypt from 'bcrypt';
import { User } from '../../database/entities';
import { userSelection } from '../constants';

export const hashPassword = (password: string) =>
  bcrypt.hash(password, bcrypt.genSaltSync(10));

export const validatePassword = (password: string, hash: string) =>
  bcrypt.compare(password, hash);

export const getUserSelections = (selectAll?: boolean): (keyof User)[] =>
  selectAll ? [...userSelection, 'password'] : userSelection;
