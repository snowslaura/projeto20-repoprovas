import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
import { userSchema } from "../schemas/userSchema.js";
import {signIn, signUp} from "./../controllers/authController.js";

const authRouter = Router();

authRouter.post("/signup", validateSchemaMiddleware(userSchema), signUp);
authRouter.post("/signin", validateSchemaMiddleware(userSchema), signIn);

export default authRouter;