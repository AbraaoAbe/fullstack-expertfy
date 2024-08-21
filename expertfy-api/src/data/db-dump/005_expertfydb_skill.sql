-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: expertfydb
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `skill`
--

-- Seleciona o banco de dados expertfydb
USE expertfydb;


DROP TABLE IF EXISTS `skill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skill` (
  `id` int NOT NULL AUTO_INCREMENT,
  `personId` int DEFAULT NULL,
  `skillType` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk-person_idx` (`personId`),
  CONSTRAINT `fk-person` FOREIGN KEY (`personId`) REFERENCES `person` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skill`
--

LOCK TABLES `skill` WRITE;
/*!40000 ALTER TABLE `skill` DISABLE KEYS */;
INSERT INTO `skill` VALUES (1,1,1,'Desenvolvimento de Aplicações Web em Java'),(2,2,1,'Programação Orientada a Objetos com Java'),(3,3,2,'Desenvolvimento de Interfaces Dinâmicas com JavaScript'),(4,4,2,'Criação de APIs com Node.js'),(5,5,3,'Gerenciamento de Clusters Kubernetes'),(6,6,3,'Configuração de Pods e Serviços em Kubernetes'),(7,7,4,'Controle de Versão com Git'),(8,8,4,'Fluxo de Trabalho GitFlow'),(9,9,5,'Administração de Banco de Dados PostgreSQL'),(10,10,5,'Otimização de Consultas SQL em PostgreSQL'),(11,11,6,'Modelagem de Dados NoSQL com MongoDB'),(12,12,6,'Indexação e Performance em MongoDB'),(13,1,7,'Documentação de API com Swagger'),(14,2,7,'Geração Automática de Documentação com Swagger'),(15,3,8,'Otimização de Consultas SQL Complexas'),(16,4,8,'Análise de Desempenho de Consultas SQL'),(17,5,9,'Desenvolvimento de Testes Unitários com JUnit'),(18,6,9,'Cobertura de Código com Testes Unitários'),(19,7,10,'Monitoramento de Aplicações com Prometheus'),(20,8,10,'Análise de Logs em Tempo Real'),(21,9,11,'Design de API RESTful'),(22,10,11,'Criação de Endpoints para APIs'),(23,11,12,'Elaboração de Documentação Técnica de Software'),(24,12,12,'Manutenção de Documentação de Projetos de Software'),(25,1,1,'Desenvolvimento de Microservices em Java'),(26,2,2,'Criação de Single Page Applications com JavaScript'),(27,3,3,'Deploy de Aplicações em Kubernetes'),(28,4,4,'Integração Contínua com Git'),(29,5,5,'Replication em PostgreSQL'),(30,6,6,'Sharding em MongoDB'),(31,7,7,'Especificação de Endpoints com Swagger'),(32,8,8,'Melhoria de Performance em Consultas SQL'),(33,9,9,'Mocking em Testes Unitários'),(34,10,10,'Dashboard de Monitoramento com Grafana'),(35,11,11,'Definição de Contratos de API'),(36,12,12,'Manual do Usuário para Sistemas de Software'),(37,1,1,'Manutenção de Aplicações Legadas em Java'),(38,2,2,'Debugging de JavaScript'),(39,3,3,'Escalabilidade com Kubernetes'),(40,4,4,'Branching Strategy com Git'),(41,5,5,'Backup e Recovery em PostgreSQL'),(42,6,6,'Aggregation Framework em MongoDB'),(43,7,7,'Customização de Documentação com Swagger'),(44,8,8,'Tuning de Consultas SQL'),(45,9,9,'Testes Unitários Automatizados'),(46,10,10,'Monitoramento de Performance de Aplicações'),(47,11,11,'Estruturação de APIs com HATEOAS'),(48,12,12,'Documentação de APIs REST'),(49,1,1,'Integração de Sistemas com Java'),(50,2,2,'Animações com JavaScript'),(51,3,3,'Segurança em Kubernetes'),(52,4,4,'Resolução de Conflitos com Git'),(53,5,5,'Tuning de Performance em PostgreSQL'),(54,6,6,'Consultas Avançadas com MongoDB'),(55,2,11,'aaa'),(56,3,1,NULL),(57,4,1,NULL),(58,5,1,NULL),(59,6,1,NULL),(60,7,1,NULL),(61,8,1,NULL),(62,9,1,NULL),(63,10,1,NULL);
/*!40000 ALTER TABLE `skill` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-24 11:21:58
