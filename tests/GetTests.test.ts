import app from "./../src/index.js"
import supertest from "supertest"
import prisma from "../src/config/database.js"

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "users" CASCADE;`;
});

describe("GET /tests?groupBy=disciplines", () => {

    it("given groupby equal discipline it should return 200", async () => {       

        const token = await login()     
        
        const result = await supertest(app).get("/tests?groupBy=disciplines").set('Authorization', token)
        const status = result.status;
                   
        expect(status).toEqual(200);   
    }); 
});



describe("GET /tests?groupBy=teachers", () => {

    it("given groupby equal teachers it should return 200", async () => {       

        const token = await login()     
        
        const result = await supertest(app).get("/tests?groupBy=teachers").set('Authorization', token)
        const status = result.status;
                   
        expect(status).toEqual(200);  
    });  
});

describe("GET /tests?groupBy=wrongQueries", () => {

    it("given undefined groupby value it should return 404", async () => {        
        
        const token = await login() 
        
        const result = await supertest(app).get("/tests?groupBy=").set('Authorization', token)
        const status = result.status;
                   
        expect(status).toEqual(404);   
    });
    
    it("given an unexisted groupby value it should return 404", async () => {       
    
        const token = await login()            
        
        const result = await supertest(app).get("/tests?groupBy=wrongFilter").set('Authorization', token)
        const status = result.status;
                   
        expect(status).toEqual(404);   
    });
})



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
