import Joi from "joi";
import { CreateTestData } from "../services/createTestService.js";

export const testSchema = Joi.object<CreateTestData>({
    name : Joi.string().required(),
    pdfUrl : Joi.string().uri().required(),
    categoryId :  Joi.number().required(),
    teacherDisciplineId: Joi.number().required()
});