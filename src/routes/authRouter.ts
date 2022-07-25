import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
import { signUpSchema } from "../schemas/signUpSchema.js";
import { signInSchema } from "../schemas/signInSchema.js";
import {signIn, signUp} from "./../controllers/authController.js";

const authRouter = Router();

authRouter.post("/signup", validateSchemaMiddleware(signUpSchema), signUp);
authRouter.post("/sign-in", validateSchemaMiddleware(signInSchema), signIn);

export default authRouter;