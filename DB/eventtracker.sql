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
-- Table `extinctions`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `extinctions` ;

CREATE TABLE IF NOT EXISTS `extinctions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `class` VARCHAR(45) NULL,
  `year` VARCHAR(45) NULL,
  `era` ENUM('BC', 'AD') NULL DEFAULT 'BC',
  `range` TEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS eventuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'eventuser'@'localhost' IDENTIFIED BY 'eventuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'eventuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `extinctions`
-- -----------------------------------------------------
START TRANSACTION;
USE `eventtracker`;
INSERT INTO `extinctions` (`id`, `name`, `class`, `year`, `era`, `range`) VALUES (1, 'American Mastadon', 'Mammal', '8,500', 'BC', 'North America');
INSERT INTO `extinctions` (`id`, `name`, `class`, `year`, `era`, `range`) VALUES (2, 'Bermuda Hawk', 'Bird', '1603', 'AD', 'Bermuda');
INSERT INTO `extinctions` (`id`, `name`, `class`, `year`, `era`, `range`) VALUES (3, 'Golden Toad', 'Amphibian', '1989', 'AD', 'Costa Rica');

COMMIT;

