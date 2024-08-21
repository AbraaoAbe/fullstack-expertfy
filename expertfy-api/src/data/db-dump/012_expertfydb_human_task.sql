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
-- Table structure for table `human_task`
--
USE expertfydb;
DROP TABLE IF EXISTS `human_task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `human_task` (
  `id` int NOT NULL AUTO_INCREMENT,
  `skillId` int DEFAULT NULL,
  `taskOutputId` int DEFAULT NULL,
  `taskType` varchar(45) DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk-skill-humantask_idx` (`skillId`),
  CONSTRAINT `fk-skill-humantask` FOREIGN KEY (`skillId`) REFERENCES `skill` (`id`),
  CONSTRAINT `fk-taskout-humantask` FOREIGN KEY (`taskOutputId`) REFERENCES `task_output` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `human_task`
--

LOCK TABLES `human_task` WRITE;
/*!40000 ALTER TABLE `human_task` DISABLE KEYS */;
INSERT INTO `human_task` VALUES (1,1,1,'tarefa1','1993-07-10'),(2,2,2,'tarefa2','1999-07-10'),(15,3,2,'t1','1999-07-10'),(16,3,3,'t1','2020-08-16'),(17,2,4,'t1','2020-08-17'),(18,4,3,'t1','2020-08-18'),(19,5,4,'t1','2020-08-19'),(20,6,5,'t1','2020-08-25'),(21,2,5,'t1','2024-11-02'),(22,3,3,'t1','2024-11-03'),(23,4,2,'t1','2024-11-04'),(24,5,1,'t1','2024-11-07'),(25,1,2,'t1','2024-11-10'),(26,2,3,'t1','2024-11-21'),(27,14,2,'t14','2024-11-21'),(28,26,1,'t26','2024-11-22'),(29,26,2,'t26','2024-11-23'),(30,62,4,'Type','2024-07-29'),(31,58,2,'Type','2024-07-21'),(32,57,5,'Type','2024-08-05'),(33,57,3,'Type','2024-07-25'),(34,57,2,'Type','2024-07-25'),(35,62,4,'Type','2024-07-24'),(36,60,2,'Type','2024-07-26'),(37,63,5,'Type','2024-07-24'),(38,61,2,'Type','2024-07-27'),(39,58,1,'Type','2024-08-01'),(40,62,4,'Type','2024-08-18'),(41,63,5,'Type','2024-07-31'),(42,58,2,'Type','2024-08-04'),(43,62,2,'Type','2024-07-26'),(44,57,1,'Type','2024-07-25'),(45,59,5,'Type','2024-07-28'),(46,60,1,'Type','2024-08-04'),(47,59,5,'Type','2024-08-06'),(48,59,4,'Type','2024-08-09'),(49,60,4,'Type','2024-07-21'),(50,63,4,'Type','2024-08-06'),(51,63,4,'Type','2024-08-15'),(52,57,3,'Type','2024-08-05'),(53,59,3,'Type','2024-07-29'),(54,56,2,'Type','2024-08-03'),(61,59,5,'Type','2024-08-13'),(62,60,2,'Type','2024-08-17'),(63,62,5,'Type','2024-08-05'),(64,62,4,'Type','2024-08-03'),(65,61,5,'Type','2024-07-22'),(66,63,3,'Type','2024-08-04'),(67,58,4,'Type','2024-08-05'),(68,61,5,'Type','2024-08-10'),(69,61,1,'Type','2024-08-06'),(70,60,5,'Type','2024-07-30'),(71,61,4,'Type','2024-07-26'),(72,63,2,'Type','2024-08-02'),(73,59,5,'Type','2024-07-27'),(74,59,3,'Type','2024-08-04'),(75,62,3,'Type','2024-07-24'),(76,57,2,'Type','2024-07-25'),(77,63,2,'Type','2024-08-07'),(78,57,5,'Type','2024-08-12'),(79,59,5,'Type','2024-08-15'),(80,62,4,'Type','2024-08-08'),(81,58,3,'Type','2024-08-04'),(82,57,2,'Type','2024-07-21'),(83,58,3,'Type','2024-08-14'),(84,59,4,'Type','2024-07-28'),(85,57,2,'Type','2024-08-16'),(92,4,2,'Type','2024-08-16'),(93,16,3,'Type','2024-08-17'),(94,28,4,'Type','2024-08-18'),(95,4,2,'Type','2024-08-19'),(96,4,1,'Type','2024-08-20'),(97,4,2,'Type','2024-07-16'),(98,16,3,'Type','2024-07-12'),(99,16,3,'Type','2024-06-11'),(100,28,4,'Type','2024-06-10'),(101,4,2,'Type','2024-05-09'),(102,4,1,'Type','2024-05-20'),(103,4,2,'Type','2024-05-21'),(104,4,5,'Type','2024-06-22'),(105,16,5,'Type','2024-08-16'),(106,NULL,NULL,'Type','2024-08-16');
/*!40000 ALTER TABLE `human_task` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-18 21:56:11
