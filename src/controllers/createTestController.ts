import { Request, Response } from "express";

import * as createTestService from "../services/createTestService.js";

export async function postTest(req: Request, res: Response) {
  const testData = req.body;
  await createTestService.createTest(testData);
  res.sendStatus(201);
}