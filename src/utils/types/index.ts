export type CreateUserParams = {
  username: string;
  password: string;
};

export type findUserParams = Partial<{ id: number; username: string }>;
export type findUserOptions = Partial<{ selectAll: boolean }>;
