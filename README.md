NestJS API - Books and Authors
Este projeto é uma API simples construída usando o framework NestJS. A API gerencia entidades de livros e autores, permitindo que usuários obtenham informações sobre autores e livros através de operações CRUD básicas.

Funcionalidades
A API possui duas entidades principais:

Authors (Autores): Representa autores de livros com informações básicas, como nome e biografia.
Books (Livros): Representa livros, cada um associado a um autor, com título e descrição.
Rotas Disponíveis
Autores (/authors)
GET /authors: Retorna uma lista de todos os autores.
GET /authors/:id: Retorna um autor específico baseado no id.
Livros (/books)
GET /books: Retorna uma lista de todos os livros.
GET /books/:id: Retorna um livro específico baseado no id.
Exemplo de resposta para /authors
json
Copiar código
[
  {
    "id": 1,
    "name": "George Orwell",
    "bio": "Author of 1984 and Animal Farm"
  },
  {
    "id": 2,
    "name": "J.K. Rowling",
    "bio": "Author of the Harry Potter series"
  }
]
Exemplo de resposta para /books
json
Copiar código
[
  {
    "id": 1,
    "title": "1984",
    "description": "Dystopian novel",
    "author": {
      "id": 1,
      "name": "George Orwell",
      "bio": "Author of 1984 and Animal Farm"
    }
  },
  {
    "id": 2,
    "title": "Harry Potter",
    "description": "Fantasy novel",
    "author": {
      "id": 2,
      "name": "J.K. Rowling",
      "bio": "Author of the Harry Potter series"
    }
  }
]
Tecnologias Utilizadas
NestJS: Framework Node.js para construir aplicações escaláveis.
TypeScript: Superset do JavaScript que adiciona tipagem estática.
Node.js: Ambiente de execução para JavaScript no backend.
Instalação
Siga os passos abaixo para rodar o projeto localmente:

Clone o repositório:

bash
Copiar código
git clone https://github.com/your-github-username/repository-name.git
Entre na pasta do projeto:

bash
Copiar código
cd repository-name
Instale as dependências:

bash
Copiar código
npm install
Rode o projeto:

bash
Copiar código
npm run start
A API estará disponível em http://localhost:3000.

Estrutura do Projeto
src/authors: Contém os arquivos relacionados à entidade de autores (controller, service, e entidade).
src/books: Contém os arquivos relacionados à entidade de livros (controller, service, e entidade).
Melhorias Futuras
Implementar métodos POST, PUT, e DELETE para adicionar e editar autores e livros.
Adicionar validações para garantir dados consistentes.
Implementar autenticação para proteger certas rotas.
