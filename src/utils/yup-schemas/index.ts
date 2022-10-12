import * as yup from 'yup';

export const registerUserSchema = yup.object({
  body: yup.object({
    username: yup.string().required().min(3).max(16),
    password: yup.string().required().min(3).max(32)
  })
});
