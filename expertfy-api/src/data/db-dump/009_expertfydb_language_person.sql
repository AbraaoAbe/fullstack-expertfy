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
-- Table structure for table `language_person`
--

-- Seleciona o banco de dados expertfydb
USE expertfydb;


DROP TABLE IF EXISTS `language_person`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `language_person` (
  `id` int NOT NULL,
  `personId` int NOT NULL,
  `languageId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk-person-lp_idx` (`personId`),
  KEY `fk-language-lp_idx` (`languageId`),
  CONSTRAINT `fk-language-lp` FOREIGN KEY (`languageId`) REFERENCES `language` (`id`),
  CONSTRAINT `fk-person-lp` FOREIGN KEY (`personId`) REFERENCES `person` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `language_person`
--

LOCK TABLES `language_person` WRITE;
/*!40000 ALTER TABLE `language_person` DISABLE KEYS */;
INSERT INTO `language_person` VALUES (1,1,1),(2,2,2),(3,3,1),(4,4,2),(5,5,1),(6,6,2),(7,7,3),(8,8,1),(9,9,2),(10,10,1),(11,11,2),(12,12,3),(13,13,4),(14,14,1),(15,15,2),(16,16,1),(17,17,2),(18,18,3),(19,19,5),(20,20,1),(21,21,2),(22,22,1),(23,23,2),(24,24,3),(25,25,1),(26,1,2),(27,1,3),(28,2,2),(29,4,1);
/*!40000 ALTER TABLE `language_person` ENABLE KEYS */;
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
