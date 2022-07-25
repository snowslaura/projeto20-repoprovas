import { Request, Response } from "express";

import * as  getCategoriesService from "./../services/categoriesService.js"

export async function getCategories(req: Request, res: Response) {
  const data = await getCategoriesService.getCategories();
  res.status(200).send(data)
}