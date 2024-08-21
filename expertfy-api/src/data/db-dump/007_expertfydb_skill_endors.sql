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
-- Table structure for table `skill_endors`
--

-- Seleciona o banco de dados expertfydb
USE expertfydb;


DROP TABLE IF EXISTS `skill_endors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skill_endors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `personId` int NOT NULL,
  `skillId` int NOT NULL,
  `description` varchar(45) DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk-person-skill-endors_idx` (`personId`),
  KEY `fk-skill-skill-endors_idx` (`skillId`),
  CONSTRAINT `fk-person-skill-endors` FOREIGN KEY (`personId`) REFERENCES `person` (`id`),
  CONSTRAINT `fk-skill-skill-endors` FOREIGN KEY (`skillId`) REFERENCES `skill` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skill_endors`
--

LOCK TABLES `skill_endors` WRITE;
/*!40000 ALTER TABLE `skill_endors` DISABLE KEYS */;
INSERT INTO `skill_endors` VALUES (2,999,1,'uma','2020-08-17'),(3,999,1,'uma','2020-08-17'),(4,999,2,'uma','2020-08-17'),(16,999,26,'uma descrição','2020-08-17'),(17,999,26,'uma descrição','2020-08-17'),(18,999,2,'uma descrição','2020-08-17'),(19,999,14,'uma descrição','2020-08-17'),(20,999,57,'uma descrição','2020-08-17'),(21,999,4,'uma descrição','2020-08-17'),(22,999,3,'uma descrição','2024-08-18'),(23,999,3,'uma descrição','2024-08-18'),(24,999,3,'uma descrição','2024-08-18'),(25,999,3,'uma descrição','2024-08-18'),(26,999,3,'uma descrição','2024-08-18'),(27,999,3,'uma descrição','2024-08-18'),(28,999,3,'uma descrição','2024-08-18'),(29,999,3,'uma descrição','2024-08-18'),(30,999,3,'uma descrição','2024-08-18'),(31,999,3,'uma descrição','2024-08-18'),(32,999,56,'uma descrição','2024-08-18'),(33,999,56,'uma descrição','2024-08-18'),(34,999,56,'uma descrição','2024-08-18'),(35,999,56,'uma descrição','2024-08-18'),(36,999,3,'uma descrição','2024-08-19'),(37,999,3,'uma descrição','2024-08-19'),(38,999,3,'uma descrição','2024-08-19'),(39,999,3,'uma descrição','2024-08-19'),(40,999,3,'uma descrição','2024-08-19'),(41,999,56,'uma descrição','2024-08-19'),(42,999,3,'uma descrição','2024-08-19'),(43,999,3,'uma descrição','2024-08-19'),(44,999,56,'uma descrição','2024-08-19'),(45,999,3,'uma descrição','2024-08-19'),(46,999,3,'uma descrição','2024-08-19'),(47,999,56,'uma descrição','2024-08-19'),(48,999,56,'uma descrição','2024-08-19'),(49,999,3,'uma descrição','2024-08-19'),(50,999,56,'uma descrição','2024-08-19'),(51,999,3,'uma descrição','2024-08-19'),(52,999,3,'uma descrição','2024-08-19'),(53,999,56,'uma descrição','2024-08-19'),(54,999,56,'uma descrição','2024-08-19'),(55,999,56,'uma descrição','2024-08-19'),(56,999,3,'uma descrição','2024-08-19'),(57,999,56,'uma descrição','2024-08-19'),(58,999,57,'uma descrição','2024-08-19'),(59,999,57,'uma descrição','2024-08-19'),(60,999,3,'uma descrição','2024-08-20'),(61,999,56,'uma descrição','2024-08-20');
/*!40000 ALTER TABLE `skill_endors` ENABLE KEYS */;
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
