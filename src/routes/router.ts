import { Router } from "express";
import authRouter from "./authRouter.js";
import findCategoriesRouter from "./categoriesRouter.js";
import testRouter from "./createTestRouter.js";
import findTestRouter from "./getTestsRouter.js";

const router = Router();
router.use(authRouter)
router.use(testRouter)
router.use(findTestRouter)
router.use(findCategoriesRouter)

export default router;