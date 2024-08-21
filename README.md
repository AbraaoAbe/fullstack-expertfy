# Projeto ExpertFY

Este projeto foi desenvolvido utilizando Next.js + React para o Front-end e o Express + Node.js para o Back-end. O sistema conta também com o Swagger para documentação da API. O banco utilizado foi o MySQL. Siga as etapas abaixo para configurar e rodar o projeto em sua máquina.

## Pré-requisitos

- Docker: https://www.docker.com/get-started
- Docker Compose: https://docs.docker.com/compose/install/


## Configuração inicial do Banco de Dados 

1. Configure as variáveis de ambiente para a conexão com o banco de dados. Crie um arquivo `.env.dev` caso não existe, na pasta raiz do projeto e copie o conteudo de `db-vars.txt` para ele.


## Executando

1. Abra um terminal e execute `docker-compose up -d`

O API do back-end estará em execução em `http://localhost:3000`.

## Documentação

A partir deste momento você pode acessar a documentação da API através do Swagger no link `http://localhost:3000/api-docs/#/`

## Uso

Acesse o aplicativo em seu navegador acessando `http://localhost:5173` e utilize as funcionalidades conforme apropriado para o projeto.

## Comandos uteis

Caso deseje rebuildar as imagens dos containers em execução utilize os comandos

   ```
   docker-compose build api-expertfy
   ```

   ou

   ```
   docker-compose build fe-expertfy
   ```

## Contribuição

Se desejar contribuir para o projeto, siga as melhores práticas de contribuição e crie um pull request.


