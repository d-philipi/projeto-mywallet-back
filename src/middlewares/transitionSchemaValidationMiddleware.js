import { transitionSchema } from "../models/transitionModel.js";

export function transitionSchemaValidation(req, res, next) {
    const transition = req.body;
  
    const { error } = transitionSchema.validate(transition, { abortEarly: false });
  
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(400).send(errors);
    }
  
    req.transition = transition;
  
    next();
  }