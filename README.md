<h1>This is Repoprovas!  /  Este é Repoprovas!</h1>

<h3>English</h3>
<b>This is an API to support a website that joins tests so ths studantes can check to study</b></br>
You can register, login, post a previous test, get all tests for a given subject or teacher</br>


```Highlights: Layered Architecture, Prisma, JWT, JEST, SuperTest```
<h3>Português</h3>
<b>Esta é uma API para dar suporte a um site que une testes para que os alunos possam verificar e estudar</b></br>
Você pode se registrar, fazer login, postar um teste anterior e suas informações, obter todos os testes de determinada disciplina ou professor</br>


```Destaques: Arquitetura em camadas, Prisma, JWT, JEST, SuperTest```

<h3>Database and backend deploy link</h3>
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

# Usage </br>
$ git clone https://github.com/snowslaura/projeto20-repoprovas

$ cd projeto20-repoprovas

$ npm install

$ npm run dev



# Rotas de autenticação:

- POST /signup</br>
    - Rota para cadastrar um usuário (Senha de no mínimo 10 caracteres)</br>
    - headers: {}</br>
    - body: {</br>
        "email": $"email@email.com",</br>
        "password": $"senha"</br>
    }
- POST /sign-in</br>
    - Rota para o usuário logar e receber um token através do corpo da resposta</br>
    - headers: {}</br>
    - body: {</br>
        "email": $"email@email.com",</br>
        "password": $"senha"</br>
    }</br>
    - Gera um token que será utilizado nas rotas privadas</br>
    
# Rotas de tests:

- POST /tests (rota privada)</br>
    - Rota para o usuário cadastrar uma prova/teste</br>
    - headers: {</br>
        "Authorization": "Bearer token"</br>
    }</br>
    - body: {</br>      
      "name": $"Titulo do arquivo",</br>
      "pdfUrl":$"<url do arquivo em pdf>",</br>
      "categoryId":$número da id referente à categoria,</br>
      "teacherDisciplineId" : $número da id referente à realçaõ teacherDIsciplines</br>
    }</br>
- GET /tests?groupBy=teachers(rota privada)</br>
    - Rota para o usuário buscar todas os testes da plataforma sepados por professor</br>
    - headers: {</br>
        "Authorization": "Bearer token"</br>
    }</br>
    - body: {}</br>    
- GET /tests?groupBy=disciplines(rota privada)</br>
    - Rota para o usuário buscar todas os testes da plataforma sepados por disciplina</br>
    - headers: {</br>
        "Authorization": "Bearer token"</br>
    }</br>
    - body: {}</br>
    
# Rotas de categorias:

- GET /categories (rota privada)</br>
    - Rota para o usuário buscar todas as categorias registradas</br>
    - headers: {</br>
        "Authorization": "Bearer token"</br>
    }</br>
    - body: {}</br>
