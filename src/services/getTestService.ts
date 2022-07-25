import * as getTestRepository from "../repositories/getTestRepository.js";

import { conflictError, notFoundError, unauthorizedError } from "../utils/errorUtils.js";


export async function getTest(groupBy){   
   const data = await getTestRepository.findAllTests(groupBy) 
   return data  
}


