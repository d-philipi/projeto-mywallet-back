import { Router } from "express";
import { getTransitions, postTransition } from "../controllers/transitionsController.js";

import { authValidation } from "../middlewares/authValidation.middleware.js";

const router = Router();

router.use(authValidation);

router.post("/transitions", postTransition);
router.get("/transitions", getTransitions);


export default router;