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
-- Table structure for table `task_output`
--
USE expertfydb;
DROP TABLE IF EXISTS `task_output`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task_output` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `ref` varchar(200) DEFAULT NULL,
  `taskId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_human_task_idx` (`taskId`),
  CONSTRAINT `fk_human_task` FOREIGN KEY (`taskId`) REFERENCES `human_task` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=280 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_output`
--

LOCK TABLES `task_output` WRITE;
/*!40000 ALTER TABLE `task_output` DISABLE KEYS */;
INSERT INTO `task_output` VALUES (1,'exemplo1','https://www.umartefato.com.br/artefato1',1),(2,'exemplo2','https://www.umartefato.com.br/artefato2',2),(3,'task3','https://www.umartefato.com.br/artefato3',15),(4,'task4','https://www.umartefato.com.br/artefato4',16),(5,'task5','https://www.umartefato.com.br/artefato5',17),(98,'task3','https://www.umartefato.com.br/artefato5',19),(99,'task3','https://www.umartefato.com.br/artefato5',20),(100,'task3','https://www.umartefato.com.br/artefato5',21),(101,'task3','https://www.umartefato.com.br/artefato5',1),(102,'task3','https://www.umartefato.com.br/artefato5',2),(103,'task3','https://www.umartefato.com.br/artefato5',23),(104,'task3','https://www.umartefato.com.br/artefato5',24),(105,'Task 15','https://www.umartefato.com.br/artefato15',15),(106,'Task 16','https://www.umartefato.com.br/artefato16',16),(184,'Task 17','https://www.umartefato.com.br/artefato17',17),(185,'Task 18','https://www.umartefato.com.br/artefato18',18),(186,'Task 19','https://www.umartefato.com.br/artefato19',19),(187,'Task 20','https://www.umartefato.com.br/artefato20',20),(188,'Task 21','https://www.umartefato.com.br/artefato21',21),(189,'Task 22','https://www.umartefato.com.br/artefato22',22),(190,'Task 23','https://www.umartefato.com.br/artefato23',23),(191,'Task 24','https://www.umartefato.com.br/artefato24',24),(192,'Task 25','https://www.umartefato.com.br/artefato25',25),(193,'Task 26','https://www.umartefato.com.br/artefato26',26),(194,'Task 27','https://www.umartefato.com.br/artefato27',27),(195,'Task 28','https://www.umartefato.com.br/artefato28',28),(196,'Task 29','https://www.umartefato.com.br/artefato29',29),(197,'Task 30','https://www.umartefato.com.br/artefato30',30),(198,'Task 31','https://www.umartefato.com.br/artefato31',31),(199,'Task 32','https://www.umartefato.com.br/artefato32',32),(200,'Task 33','https://www.umartefato.com.br/artefato33',33),(201,'Task 34','https://www.umartefato.com.br/artefato34',34),(202,'Task 35','https://www.umartefato.com.br/artefato35',35),(203,'Task 36','https://www.umartefato.com.br/artefato36',36),(204,'Task 37','https://www.umartefato.com.br/artefato37',37),(205,'Task 38','https://www.umartefato.com.br/artefato38',38),(206,'Task 39','https://www.umartefato.com.br/artefato39',39),(207,'Task 40','https://www.umartefato.com.br/artefato40',40),(208,'Task 41','https://www.umartefato.com.br/artefato41',41),(209,'Task 42','https://www.umartefato.com.br/artefato42',42),(210,'Task 43','https://www.umartefato.com.br/artefato43',43),(211,'Task 44','https://www.umartefato.com.br/artefato44',44),(212,'Task 45','https://www.umartefato.com.br/artefato45',45),(213,'Task 46','https://www.umartefato.com.br/artefato46',46),(214,'Task 47','https://www.umartefato.com.br/artefato47',47),(215,'Task 48','https://www.umartefato.com.br/artefato48',48),(216,'Task 49','https://www.umartefato.com.br/artefato49',49),(217,'Task 50','https://www.umartefato.com.br/artefato50',50),(218,'Task 51','https://www.umartefato.com.br/artefato51',51),(219,'Task 52','https://www.umartefato.com.br/artefato52',52),(220,'Task 53','https://www.umartefato.com.br/artefato53',53),(221,'Task 54','https://www.umartefato.com.br/artefato54',54),(255,'Task 61','https://www.umartefato.com.br/artefato61',61),(256,'Task 62','https://www.umartefato.com.br/artefato62',62),(257,'Task 63','https://www.umartefato.com.br/artefato63',63),(258,'Task 64','https://www.umartefato.com.br/artefato64',64),(259,'Task 65','https://www.umartefato.com.br/artefato65',65),(260,'Task 66','https://www.umartefato.com.br/artefato66',66),(261,'Task 67','https://www.umartefato.com.br/artefato67',67),(262,'Task 68','https://www.umartefato.com.br/artefato68',68),(263,'Task 69','https://www.umartefato.com.br/artefato69',69),(264,'Task 70','https://www.umartefato.com.br/artefato70',70),(265,'Task 71','https://www.umartefato.com.br/artefato71',71),(266,'Task 72','https://www.umartefato.com.br/artefato72',72),(267,'Task 73','https://www.umartefato.com.br/artefato73',73),(268,'Task 74','https://www.umartefato.com.br/artefato74',74),(269,'Task 75','https://www.umartefato.com.br/artefato75',75),(270,'Task 76','https://www.umartefato.com.br/artefato76',76),(271,'Task 77','https://www.umartefato.com.br/artefato77',77),(272,'Task 78','https://www.umartefato.com.br/artefato78',78),(273,'Task 79','https://www.umartefato.com.br/artefato79',79),(274,'Task 80','https://www.umartefato.com.br/artefato80',80),(275,'Task 81','https://www.umartefato.com.br/artefato81',81),(276,'Task 82','https://www.umartefato.com.br/artefato82',82),(277,'Task 83','https://www.umartefato.com.br/artefato83',83),(278,'Task 84','https://www.umartefato.com.br/artefato84',84),(279,'Task 85','https://www.umartefato.com.br/artefato85',85);
/*!40000 ALTER TABLE `task_output` ENABLE KEYS */;
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
