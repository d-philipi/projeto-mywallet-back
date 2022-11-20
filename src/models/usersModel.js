import joi from "joi";

export const signUpSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
});

export const signInSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    password: joi.object().required(),
    confirmedPassword: joi.object().required(),
  });