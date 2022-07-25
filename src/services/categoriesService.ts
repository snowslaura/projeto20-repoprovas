import * as categoriesRepository from "../repositories/categoriesRepository.js"

import { conflictError, notFoundError, unauthorizedError } from "../utils/errorUtils.js";


export async function getCategories(){   
  return categoriesRepository.getCategories();   
}
