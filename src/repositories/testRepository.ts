import  prisma  from "./../config/database.js";
import { CreateTestData } from "./../services/createTestService.js"

export async function findCategoryById(categoryId:number) {
  return prisma.categories.findUnique({
    where: { id: categoryId }
  });
}

export async function findTeacherDisciplineBYId(teacherDisciplineId:number){
    return prisma.teacherDisciplines.findUnique({
        where: { id: teacherDisciplineId }
    });
}

export async function insertTest(testData: CreateTestData){
    return prisma.tests.create({
        data: { 
            name: testData.name,
            pdfUrl: testData.pdfUrl,
            categoryId: testData.categoryId,
            teacherDisciplineId : testData.teacherDisciplineId
         }
    });
}