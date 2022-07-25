import { Router } from "express";
import { getTests } from "../controllers/getTestController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/authMiddleware.js";

const findTestRouter = Router();

findTestRouter.get("/tests",ensureAuthenticatedMiddleware,getTests);


export default findTestRouter;