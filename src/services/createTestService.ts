import { Tests } from "@prisma/client";

import * as testRepository from "../repositories/testRepository.js";
import { conflictError, notFoundError, unauthorizedError } from "../utils/errorUtils.js";

export type CreateTestData = Omit<Tests, "id">;

export async function createTest(testData:CreateTestData){
    await verifyCategory(testData.categoryId)
    await verifyTeacherDiscipline(testData.teacherDisciplineId)
    await testRepository.insertTest(testData)
}

async function verifyCategory(categoryId:number){
    const existingCategory = testRepository.findCategoryById(categoryId)
    if(!existingCategory){
        throw notFoundError("Category doesn't exist")
    }
}

async function verifyTeacherDiscipline(teacherDisciplineId:number){
    const existingTeacherDiscipline = testRepository.findTeacherDisciplineBYId(teacherDisciplineId)
    if(!existingTeacherDiscipline){
        throw notFoundError("This teacher discipline relation doesn't exists")
    }
}