import { Router } from "express";
import { getTransitions, postTransition } from "../controllers/transitionsController.js";

import { authValidation } from "../middlewares/authValidationMiddleware.js";
import { transitionSchemaValidation } from "../middlewares/transitionSchemaValidationMiddleware.js";

const router = Router();

router.use(authValidation);

router.post("/transitions", transitionSchemaValidation, postTransition);
router.get("/transitions", getTransitions);


export default router;