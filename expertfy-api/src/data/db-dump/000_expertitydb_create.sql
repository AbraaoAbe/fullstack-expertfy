-- Dropa o usuário 'app' caso ele exista
DROP USER IF EXISTS 'app'@'%';

-- Dropa a tabela expertfydb caso ela exista
DROP DATABASE IF EXISTS expertfydb;

-- Cria o banco de dados expertfydb
CREATE DATABASE expertfydb;

-- Cria o usuário 'app' com a senha '123456' e concede todos os privilégios no banco de dados expertfydb
CREATE USER 'app'@'%' IDENTIFIED BY '123456';
GRANT ALL PRIVILEGES ON expertfydb.* TO 'app'@'%';

-- Seleciona o banco de dados expertfydb
USE expertfydb;