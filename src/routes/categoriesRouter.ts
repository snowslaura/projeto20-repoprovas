import { Router } from "express";
import { getCategories } from "../controllers/categoriesController.js";

import { ensureAuthenticatedMiddleware } from "../middlewares/authMiddleware.js";

const findCategoriesRouter = Router();

findCategoriesRouter.get("/categories",ensureAuthenticatedMiddleware,getCategories);


export default findCategoriesRouter;