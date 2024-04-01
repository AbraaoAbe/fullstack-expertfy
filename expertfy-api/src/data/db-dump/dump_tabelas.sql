-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: expertfydb
-- ------------------------------------------------------
-- Server version	8.1.0

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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `linkedin` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `lastName` varchar(45) DEFAULT NULL,
  `birthDate` date DEFAULT NULL,
  `employmentStartDate` date NOT NULL,
  `languages` varchar(35) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `role` varchar(45) NOT NULL,
  `seniority` varchar(45) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `team` varchar(45) DEFAULT NULL,
  `languageId` varchar(45) NOT NULL,
  `seniorityId` varchar(45) NOT NULL,
  `areaId` varchar(45) NOT NULL,
  `office` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1004 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='login, password, role, seniority, timeInCompany, languages, phone, email, linkedin, name, lastName, dateBorn';


--
-- Dumping data for table `user`
--




DROP TABLE IF EXISTS `competence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `competence` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Represents one competence';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `competence`
--

LOCK TABLES `competence` WRITE;
/*!40000 ALTER TABLE `competence` DISABLE KEYS */;
INSERT INTO `competence` VALUES (1,'Java','Linguagem de Programação'),(2,'Javascript','Linguagem de programação'),(3,'Kubernetes','Orquestrador de container'),(4,'Git','Versionador de código'),(5,'PostgreSQL','Banco de dados'),(6,'MongoDB','Banco de dados'),(7,'Swagger','Documentador de API');
/*!40000 ALTER TABLE `competence` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `manifestcompetence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manifestcompetence` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `competenceId` int NOT NULL,
  `timestamp` date NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userIdFK_idx` (`userId`),
  KEY `competenceIdFK_idx` (`competenceId`),
  CONSTRAINT `competenceIdFK` FOREIGN KEY (`competenceId`) REFERENCES `competence` (`id`),
  CONSTRAINT `userIdFK` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manifestcompetence`
--

LOCK TABLES `manifestcompetence` WRITE;
/*!40000 ALTER TABLE `manifestcompetence` DISABLE KEYS */;
INSERT INTO `manifestcompetence` VALUES (1,1000,2,'2023-10-12',NULL),(2,999,2,'2023-10-13',NULL),(4,999,1,'2023-10-13',NULL),(5,1000,1,'2023-10-13',NULL),(6,999,1,'2023-10-15',NULL),(7,999,1,'2023-10-14',NULL),(8,1001,1,'2023-10-13',NULL),(9,1001,1,'2023-10-14',NULL);
/*!40000 ALTER TABLE `manifestcompetence` ENABLE KEYS */;
UNLOCK TABLES;