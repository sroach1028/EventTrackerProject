-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema eventtracker
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `eventtracker` ;

-- -----------------------------------------------------
-- Schema eventtracker
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `eventtracker` ;
USE `eventtracker` ;

-- -----------------------------------------------------
-- Table `extinction`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `extinction` ;

CREATE TABLE IF NOT EXISTS `extinction` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  `animal_class` VARCHAR(45) NULL,
  `year` VARCHAR(45) NULL,
  `era` VARCHAR(45) NULL,
  `range` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS eventuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'eventuser'@'localhost' IDENTIFIED BY 'eventuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'eventuser'@'localhost';
GRANT SELECT, INSERT, TRIGGER ON TABLE * TO 'eventuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `extinction`
-- -----------------------------------------------------
START TRANSACTION;
USE `eventtracker`;
INSERT INTO `extinction` (`id`, `name`, `animal_class`, `year`, `era`, `range`) VALUES (1, 'American Mastadon', 'Mammal', '8,500', NULL, 'North America');
INSERT INTO `extinction` (`id`, `name`, `animal_class`, `year`, `era`, `range`) VALUES (2, 'Bermuda Hawk', 'Bird', '1603', NULL, 'Bermuda');
INSERT INTO `extinction` (`id`, `name`, `animal_class`, `year`, `era`, `range`) VALUES (3, 'Golden Toad', 'Amphibian', '1989', NULL, 'Costa Rica');

COMMIT;

