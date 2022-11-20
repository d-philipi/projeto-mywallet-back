import { Router } from "express";
import { signIn, signUp } from "../controllers/authController.js";

import { signUpValidation } from "../middlewares/signUpValidationMiddleware.js";

const router = Router();

router.post("/sign-up", signUpValidation, signUp);
router.post("/sign-in", signInBodyValidation, signIn);

export default router;