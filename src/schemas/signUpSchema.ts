import Joi from "joi";
import { CreateUserData } from "../services/userService.js";

type newUserData = CreateUserData & {
  confirmation: string;
}

export const signUpSchema = Joi.object<newUserData>({
  email: Joi.string().email().required(),
  password: Joi.string().min(10).required(),
  confirmation: Joi.ref("password")
});
