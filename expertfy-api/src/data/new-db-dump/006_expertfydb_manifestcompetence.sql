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
-- Table structure for table `manifestcompetence`
--

USE expertfydb;

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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manifestcompetence`
--

LOCK TABLES `manifestcompetence` WRITE;
/*!40000 ALTER TABLE `manifestcompetence` DISABLE KEYS */;
INSERT INTO `manifestcompetence` VALUES (1,1000,2,'2023-10-12',NULL),(2,999,2,'2023-10-13',NULL),(4,999,1,'2023-10-13',NULL),(5,1000,1,'2023-10-13',NULL),(6,999,1,'2023-10-15',NULL),(7,999,1,'2023-10-14',NULL),(8,1001,1,'2023-10-13',NULL),(9,1001,1,'2023-10-14',NULL),(10,1018,1,'2023-10-23',NULL),(11,1018,1,'2023-10-23',NULL),(12,1018,1,'2023-10-23',NULL),(13,1017,1,'2023-10-23',NULL),(14,1017,1,'2023-10-23',NULL),(15,1017,1,'2023-10-23',NULL),(16,1017,1,'2023-10-23',NULL);
/*!40000 ALTER TABLE `manifestcompetence` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-19 12:02:34
