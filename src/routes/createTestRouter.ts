import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
import { testSchema } from "../schemas/testSchema.js";
import { postTest } from "../controllers/createTestController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/authMiddleware.js";

const testRouter = Router();

testRouter.post("/tests",ensureAuthenticatedMiddleware, validateSchemaMiddleware(testSchema), postTest);


export default testRouter;