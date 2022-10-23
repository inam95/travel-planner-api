import * as yup from 'yup';

export const registerUserSchema = yup.object({
  body: yup.object({
    username: yup.string().required().min(3).max(16),
    password: yup.string().required().min(3).max(32)
  })
});

export const createPlanSchema = yup.object({
  body: yup.object({
    title: yup.string().required(),
    date: yup.string().required(),
    description: yup.string().required()
  })
});
