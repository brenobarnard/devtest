-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 23-Maio-2019 às 02:34
-- Versão do servidor: 10.1.40-MariaDB
-- versão do PHP: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_dodge`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cars`
--

CREATE TABLE `cars` (
  `ID` int(11) NOT NULL COMMENT 'ID do carro',
  `MODEL` varchar(200) NOT NULL COMMENT 'Modelo do Carro',
  `YEAR` smallint(4) NOT NULL DEFAULT '1500' COMMENT 'Ano do Carro',
  `FK_CATEGORY` int(11) DEFAULT '-1' COMMENT 'Categoria do Carro (FK)',
  `FK_COLOR` int(11) DEFAULT '-1' COMMENT 'Cor do Carro (FK)',
  `IMG_PATH` text NOT NULL COMMENT 'Nome da Imagem no diretório de upload'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabela de Carros Cadastrados';

-- --------------------------------------------------------

--
-- Estrutura da tabela `categories`
--

CREATE TABLE `categories` (
  `ID` int(11) NOT NULL COMMENT 'ID da categoria',
  `CATEGORY` varchar(25) NOT NULL COMMENT 'Nome da categoria'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `colors`
--

CREATE TABLE `colors` (
  `ID` int(11) NOT NULL COMMENT 'ID da cor',
  `COLOR` varchar(40) NOT NULL COMMENT 'Nome da cor'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabela de Cores';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_TO_CATEGORIES` (`FK_CATEGORY`),
  ADD KEY `FK_TO_COLORS` (`FK_COLOR`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cars`
--
ALTER TABLE `cars`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID do carro', AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID da categoria', AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `colors`
--
ALTER TABLE `colors`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID da cor', AUTO_INCREMENT=23;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `cars`
--
ALTER TABLE `cars`
  ADD CONSTRAINT `FK_TO_CATEGORIES` FOREIGN KEY (`FK_CATEGORY`) REFERENCES `categories` (`ID`) ON DELETE SET NULL ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_TO_COLORS` FOREIGN KEY (`FK_COLOR`) REFERENCES `colors` (`ID`) ON DELETE SET NULL ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
