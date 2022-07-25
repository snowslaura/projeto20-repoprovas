import * as getTestRepository from "../repositories/getTestRepository.js";

import { notFoundError } from "../utils/errorUtils.js";


export async function getTest(groupBy){  
   if (!groupBy) throw notFoundError("Select a filter");  
   if (groupBy!=="disciplines" && groupBy!== "teachers") throw notFoundError("Select an existing filter");
   const data = await getTestRepository.findAllTests(groupBy) 
   return data  
}


