import { Request, Response } from "express";

import * as getTestService from "../services/getTestService.js";

export async function getTests(req: Request, res: Response) {
  const {groupBy} = req.query;
  const data = await getTestService.getTest(groupBy);
  res.status(200).send(data);
}