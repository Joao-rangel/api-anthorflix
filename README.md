# api-anthorflix
Api para gerenciar os filmes que mais gosta.

##  Observações/Considerações
* App desenvolvido com React, Axios e Sass;
* Funcinalidades:
  * Listar filmes na API;
  * Buscar filme por título:
    * Primeiramente a abusca é feita no banco de dados;
    * Caso não encontre, busca-se na api do [Omdb](https://omdbapi.com/);
  * CRUD de filmes no banco de dados.

---

## Dependências do sistema

* [Node.JS](https://nodejs.org/en/) - 16.13.x
* [Npm](https://www.npmjs.com/) - 8.15.x
* [Docker](https://docs.docker.com/get-docker/) 20.10.x
* [Postgres](https://www.postgresql.org/) 13.x

---
## Instalação
Instale as dependências:
```
npm i
```
Faça build das imagens:
```
docker compose up --build
```
Rode as migrations:
```
yarn migration:run
```
Inicie a aplicação:

```
docker compose up
```
* Utilize também o app web: [web-anthorflix](https://github.com/Joao-rangel/web-anthorflix)
---
## Sugestões para funcionalidades futuras

* Cdastro e autenticação de usuários;
* Opção de favoritar filmes;
* Avaliação filmes com cálculo da nota de forma assíncrona (sugiro utlização de filas com [Bull](https://www.npmjs.com/package/bull)).
