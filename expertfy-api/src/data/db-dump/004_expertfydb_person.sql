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
-- Table structure for table `person`
--

-- Seleciona o banco de dados expertfydb
USE expertfydb;


DROP TABLE IF EXISTS `person`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `person` (
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
  `seniorityId` int DEFAULT NULL,
  `areaId` int DEFAULT NULL,
  `office` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `SeniorityFK_idx` (`seniorityId`),
  KEY `AreaFK_idx` (`areaId`),
  CONSTRAINT `AreaFK` FOREIGN KEY (`areaId`) REFERENCES `area` (`id`),
  CONSTRAINT `SeniorityFK` FOREIGN KEY (`seniorityId`) REFERENCES `seniority` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1035 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='login, password, role, seniority, timeInCompany, languages, phone, email, linkedin, name, lastName, dateBorn';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `person`
--

LOCK TABLES `person` WRITE;
/*!40000 ALTER TABLE `person` DISABLE KEYS */;
INSERT INTO `person` VALUES (1,'99999999999','joao@admin.com','linkedin.com/in/admin','Joao','Felipe','1993-07-10','2022-10-28','/assets/avatar-10.png','dev-front',1,4,'desenvolvedor'),(2,'11955444442','joao@example.com','linkedin.com/in/joao123','Felipe','Silva','1990-05-15','2021-11-20','/assets/avatar-9.png','dev-back',2,3,'gerente'),(3,'11955444443','joao@example.com','linkedin.com/in/joao123','Jose','Silva','1990-05-15','2022-09-12','/assets/avatar-8.png','devops',3,2,'analista'),(4,'11955444444','maria@example.com','linkedin.com/in/string','Maria','Freitas','2023-09-25','2023-11-20','/assets/avatar-7.png','dev-front',1,1,'desenvolvedor'),(5,'11955544440','bianca@example.com','linkedin.com/in/Ademir','Bianca','Sales','2023-10-23','2023-10-23','/assets/avatar-6.png','dev-back',2,4,'desenvolvedor'),(6,'11955544441','cris@email.com','linkedin.com/in/chris','Chris','James','2023-10-23','2022-11-05','/assets/avatar-5.png','management',3,3,'gerente de projeto'),(7,'11955544442','jamesj@email.com','linkedin.com/in/james','James','Jhonson','2023-10-23','2021-10-23','/assets/avatar-4.png','TI',1,2,'analista de ti'),(8,'11955544443','philipwalkes@email.com','linkedin.com/in/philip','Philip','Walkes','2023-10-23','2020-10-23','/assets/avatar-3.png','TI',2,1,'analista de ti'),(9,'11955544444','pedro@email.com','linkedin.com/in/velma','Pedro','Secret','2023-10-23','2020-10-10','/assets/avatar-2.png','TI',3,4,'desenvolvedor'),(10,'11955554444','joao@example.com','linkedin.com/in/joao123','Felipe','Silva','1990-05-15','2021-10-23','/assets/avatar-9.png','dev-back',2,3,'gerente'),(11,'11955553333','maria@example.com','linkedin.com/in/maria456','Maria','Santos','1988-09-20','2020-09-15','/assets/avatar-7.png','dev-front',3,2,'desenvolvedor'),(12,'11955552222','carlos@example.com','linkedin.com/in/carlos789','Carlos','Oliveira','1992-03-10','2022-11-05','/assets/avatar-3.png','dev-back',1,4,'desenvolvedor'),(13,'11955551111','ana@example.com','linkedin.com/in/ana101','Ana','Ferreira','1995-07-25','2023-08-18','/assets/avatar-5.png','dev-ops',2,1,'analista'),(14,'11955550000','pedro@example.com','linkedin.com/in/pedroxyz','Pedro','Souza','1991-12-02','2023-09-30','/assets/avatar-2.png','qa',3,3,'tester'),(15,'11955559999','julia@example.com','linkedin.com/in/julia789','Júlia','Almeida','1993-04-17','2022-10-10','/assets/avatar-8.png','dev-front',1,2,'desenvolvedor'),(16,'11955558888','lucas@example.com','linkedin.com/in/lucas456','Lucas','Rodrigues','1994-08-05','2020-11-20','/assets/avatar-6.png','dev-back',2,4,'desenvolvedor'),(17,'11955557777','camila@example.com','linkedin.com/in/camila101','Camila','Martins','1996-02-12','2021-08-25','/assets/avatar-4.png','dev-front',3,1,'analista'),(18,'11955556666','gabriel@example.com','linkedin.com/in/gabrielxyz','Gabriel','Lima','1990-10-30','2022-10-03','/assets/avatar-1.png','dev-ops',1,2,'analista'),(19,'11955555555','luis@example.com','linkedin.com/in/luis123','Luís','Costa','1989-06-28','2023-09-12','/assets/avatar-9.png','qa',2,4,'tester'),(20,'11955554444','patricia@example.com','linkedin.com/in/patricia456','Patrícia','Pereira','1997-01-05','2023-11-30','/assets/avatar-7.png','dev-back',3,1,'desenvolvedor'),(21,'11955553333','ricardo@example.com','linkedin.com/in/ricardo789','Ricardo','Gomes','1998-03-22','2019-08-07','/assets/avatar-3.png','dev-front',1,3,'desenvolvedor'),(22,'11955552222','fernanda@example.com','linkedin.com/in/fernanda101','Fernanda','Dias','1990-11-18','2019-09-18','/assets/avatar-5.png','dev-ops',2,2,'analista'),(23,'11955551111','rodrigo@example.com','linkedin.com/in/rodrigoxyz','Rodrigo','Machado','1993-07-10','2018-10-28','/assets/avatar-2.png','qa',3,4,'tester'),(24,'11955550000','vanessa@example.com','linkedin.com/in/vanessa456','Vanessa','Barbosa','1987-09-15','2023-08-15','/assets/avatar-8.png','dev-back',1,1,'desenvolvedor'),(25,'string','string','string','Joao','Ferraz','2024-07-24','2024-07-24','string','string',1,1,NULL);
/*!40000 ALTER TABLE `person` ENABLE KEYS */;
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
