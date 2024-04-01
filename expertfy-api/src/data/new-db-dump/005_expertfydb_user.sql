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
USE expertfydb;

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `phone` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `linkedin` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `lastName` varchar(45) DEFAULT NULL,
  `birthDate` date DEFAULT NULL,
  `employmentStartDate` date DEFAULT NULL,
  `photo` varchar(200) DEFAULT NULL,
  `team` varchar(45) DEFAULT 'none',
  `languageId` int DEFAULT NULL,
  `seniorityId` int DEFAULT NULL,
  `areaId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `LanguageFK_idx` (`languageId`),
  KEY `SeniorityFK_idx` (`seniorityId`),
  KEY `AreaFK_idx` (`areaId`),
  CONSTRAINT `AreaFK` FOREIGN KEY (`areaId`) REFERENCES `area` (`id`),
  CONSTRAINT `LanguageFK` FOREIGN KEY (`languageId`) REFERENCES `language` (`id`),
  CONSTRAINT `SeniorityFK` FOREIGN KEY (`seniorityId`) REFERENCES `seniority` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1020 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='login, password, role, seniority, timeInCompany, languages, phone, email, linkedin, name, lastName, dateBorn';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (999,NULL,'admin@admin.com',NULL,'Ademir',NULL,NULL,NULL,'/assets/avatar-10.png','dev-front',2,1,4),(1000,'(11) 1234-5678','joao@example.com','linkedin.com/in/joao123','Felipe','Silva','1990-05-15',NULL,'/assets/avatar-9.png','dev-back',2,2,3),(1001,'(11) 1234-5678','joao@example.com','linkedin.com/in/joao123','Jose','Silva','1990-05-15',NULL,'/assets/avatar-8.png','devops',2,3,2),(1002,'string','string','string','string','string','2023-09-25',NULL,'/assets/avatar-7.png','dev-front',2,1,1),(1004,'','admin@admin','','Ademir','Ademor','2023-10-23','2023-10-23','/assets/avatar-6.png','dev-back',1,2,4),(1016,'','asd@email.com','','Chris','James','2023-10-23','2023-10-23','/assets/avatar-5.png','devops',1,3,3),(1017,'','asddsa@email.com','','James','Jhonson','2023-10-23','2023-10-23','/assets/avatar-4.png','none',1,1,2),(1018,'','12313@email.com','','Philip','Walkes','2023-10-23','2023-10-23','/assets/avatar-3.png','none',1,2,1),(1019,'','vvv@email.com','','Velma','Secret','2023-10-23','2023-10-23','/assets/avatar-2.png','none',1,3,4);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-19 12:02:33
