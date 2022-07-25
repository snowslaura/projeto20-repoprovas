import  prisma  from "./../config/database.js";

export async function getCategories(){
    return prisma.categories.findMany({
        where:{}
    })    
}