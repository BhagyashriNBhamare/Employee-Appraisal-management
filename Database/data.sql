-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: emp
-- ------------------------------------------------------
-- Server version	8.0.19

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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `emp` varchar(200) NOT NULL DEFAULT 'custom',
  `pass` varchar(200) NOT NULL DEFAULT 'custom'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES ('0','2609841');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empl`
--

DROP TABLE IF EXISTS `empl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empl` (
  `emp` varchar(200) NOT NULL DEFAULT 'custom',
  `pass` varchar(200) NOT NULL DEFAULT 'custom'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empl`
--

LOCK TABLES `empl` WRITE;
/*!40000 ALTER TABLE `empl` DISABLE KEYS */;
INSERT INTO `empl` VALUES ('11','11'),('12','12'),('13','13'),('2','2'),('3','3'),('4','4'),('28','28'),('28','28');
/*!40000 ALTER TABLE `empl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inform`
--

DROP TABLE IF EXISTS `inform`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inform` (
  `fname` varchar(200) NOT NULL,
  `lname` varchar(200) NOT NULL,
  `id` varchar(200) NOT NULL,
  `salary` varchar(200) NOT NULL,
  `mid` varchar(200) NOT NULL,
  `rating` varchar(20) DEFAULT '0',
  `email` varchar(200) DEFAULT NULL,
  `active` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inform`
--

LOCK TABLES `inform` WRITE;
/*!40000 ALTER TABLE `inform` DISABLE KEYS */;
INSERT INTO `inform` VALUES ('Bhagyashri','BHAMARE','1','200000','1','9','bhagyashri@gmail.com',1),('lata','bhyu','2','10000','1','8','lata@gmail.com',1),('neha ','chanan','3','10000','1','5','naha@gmail.com',1),('tanvi','pachpute ','4','10000','1','5','tanvi@gmail.com',0),('SNEHAL','BHAMARE','6','200000','6','8','bhamare.7791@gmail.com',0),('sandhya ','BHAMARE','10','15000','10','5','bhamar@gmail.com',1),('Bhagyashri','Bhamare','28','200000','1','0','bhamare.bhagyashri1999@gmail.com',0),('Bhagyashri','Bhamare','28','200000','1','0','bhamare.bhagyashri1999@gmail.com',0);
/*!40000 ALTER TABLE `inform` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manager`
--

DROP TABLE IF EXISTS `manager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manager` (
  `emp` varchar(200) NOT NULL DEFAULT 'custom',
  `pass` varchar(200) NOT NULL DEFAULT 'custom'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manager`
--

LOCK TABLES `manager` WRITE;
/*!40000 ALTER TABLE `manager` DISABLE KEYS */;
INSERT INTO `manager` VALUES ('1','1'),('6','6'),('10','10');
/*!40000 ALTER TABLE `manager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'emp'
--

--
-- Dumping routines for database 'emp'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-16 21:33:48
