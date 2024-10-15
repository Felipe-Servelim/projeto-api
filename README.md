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
