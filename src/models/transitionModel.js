import joi from "joi";

export const transitionSchema = joi.object({
  value: joi.Number().required(),
  description: joi.string().required(),
});