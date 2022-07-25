import  prisma  from "./../config/database.js";

export async function findAllTests(groupBy) {
    if(groupBy==='disciplines'){        
       return findByDisciplines()
    }else{
        return findByTeacher()
    } 

}

function findByDisciplines(){
    return prisma.terms.findFirst({
        where :{},
         include:{
             disciplines:{
                 select:{
                     id:true,
                     name:true,
                     teacherDisciplines:{
                         select:{
                             id:true,
                             disciplines:{},
                             teachers:{},
                             tests:{
                                 select:{
                                     id:true,
                                     name:true,
                                     pdfUrl:true,
                                     categories:{}
                                 }
                             }
                         }
                     },
                     terms:{}
                 }
             }
         }
         
     })
}

function findByTeacher(){
    return prisma.teacherDisciplines.findMany({
        where:{},
        select:{
            id:true,
            disciplines:{
                select:{
                    id:true,
                    name:true,
                    teacherDisciplines:{},
                    terms:{}
                }
            },
            tests:{
                select:{
                    id:true,
                    name:true,
                    pdfUrl:true,
                    categories:{}
                }
            },
            teachers:{},
            
            
        }
    })
}
