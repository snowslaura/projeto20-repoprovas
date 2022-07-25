import app from "./../src/index.js"
import supertest from "supertest"
import prisma from "../src/config/database.js"

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "users" CASCADE;`;
});

describe("POST /tests", () => {

    it("given both valid tests data and token it should return 201", async () => {       

        const token = await login() 
              
        const body = {
            "name": "PROVA DE GEOGRAFIA",
            "pdfUrl":"http://ptcomputador.com/Software/portable-document-format/153634.html",
            "categoryId":1,
            "teacherDisciplineId" : 1
        };

        const result = await supertest(app).post("/tests").set('Authorization', token).send(body)
        const status = result.status;        
        expect(status).toEqual(201);

        const createdTest = await prisma.tests.findFirst({
            where: {  
                name: "PROVA DE GEOGRAFIA",
                pdfUrl:"http://ptcomputador.com/Software/portable-document-format/153634.html",
                categoryId:1,
                teacherDisciplineId : 1 
            }
        });

        expect(createdTest).not.toBeNull();
    });   
});

async function login(){    

    const body = {
        "email": "teste@driven.com",
        "password": "1234567890"
    };

    const signUpResult = await supertest(app).post("/signup").send(body);
    const status = signUpResult.status;        
    expect(status).toEqual(201);

    const createdUser = await prisma.users.findUnique({
        where: { email: body.email }
    });
    expect(createdUser).not.toBeNull();

    const signInResult = await supertest(app).post("/sign-in").send(body);

    const token = signInResult.text 
    const signInstatus = signInResult.status

    expect(token).not.toBeUndefined();
    expect(signInstatus).toBe(200) 
    
    const tokenData = JSON.parse(token)
    
    return tokenData.token
            
}

afterAll(async () => {
    await prisma.$disconnect();
});
