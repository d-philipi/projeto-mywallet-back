import joi from "joi";

export const transitionSchema = joi.object({
  value: joi.number().required(),
  description: joi.string().required(),
  direction:joi.string().required().valid(true, false)
});