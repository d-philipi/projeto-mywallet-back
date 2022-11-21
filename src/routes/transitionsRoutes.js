import { Router } from "express";
import { getTransitions, postTransition } from "../controllers/transitionsController.js";

import { authValidation } from "../middlewares/authValidationMiddleware.js";
import { transitionSchemaValidation } from "../middlewares/transitionSchemaValidationMiddleware.js";

const router = Router();

router.use(authValidation, transitionSchemaValidation);

router.post("/transitions", postTransition);
router.get("/transitions", getTransitions);


export default router;