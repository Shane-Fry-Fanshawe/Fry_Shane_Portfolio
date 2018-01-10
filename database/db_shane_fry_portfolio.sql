-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 10, 2018 at 05:54 PM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_shane_fry_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_graphics`
--

DROP TABLE IF EXISTS `tbl_graphics`;
CREATE TABLE IF NOT EXISTS `tbl_graphics` (
  `graphics_id` mediumint(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `graphics_name` varchar(200) NOT NULL,
  PRIMARY KEY (`graphics_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_graphics`
--

INSERT INTO `tbl_graphics` (`graphics_id`, `graphics_name`) VALUES
(1, 'overlay.png'),
(2, 'faces.png');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_logos`
--

DROP TABLE IF EXISTS `tbl_logos`;
CREATE TABLE IF NOT EXISTS `tbl_logos` (
  `logo_id` mediumint(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `logo_name` varchar(100) NOT NULL,
  PRIMARY KEY (`logo_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_logos`
--

INSERT INTO `tbl_logos` (`logo_id`, `logo_name`) VALUES
(1, 'k2f.png'),
(2, 'obj_logo.png'),
(3, 'lori_designs.png'),
(4, 'crunicans_logo.png'),
(5, 'sweets_logo.png');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_specialised`
--

DROP TABLE IF EXISTS `tbl_specialised`;
CREATE TABLE IF NOT EXISTS `tbl_specialised` (
  `special_id` mediumint(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `special_title` varchar(40) NOT NULL,
  `special_text` varchar(350) NOT NULL,
  `special_image` varchar(50) NOT NULL,
  PRIMARY KEY (`special_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_specialised`
--

INSERT INTO `tbl_specialised` (`special_id`, `special_title`, `special_text`, `special_image`) VALUES
(1, 'Responsive Web Design', 'I have gained a lot of experience designing and building many responsive websites. I have developed a personal approach to testing different solutions that has brought me to design very quickly', 'skill_responsive_mobile.png'),
(2, '3D Animation', 'I have alot of expreince of 3D rendering objects in Cinmea 4D. This is the proces of creating realistic objects on the computer. I can make sports intros, 3D logos, and any real life objects.', '3d.png'),
(3, 'Video editing', 'I have years of expreince editing and applying special effects to any videos. I specialize in socail media videos and qucik montage style edits.', 'video_icon.png'),
(4, 'graphic design', 'I can create almost anything graphically from minuplating photos to acheive another image, and create anything digitally from photoshop to SVGs in illustrator.', 'graphic_design.png'),
(5, 'Branding', 'I love to create a new brand for compaines or individuals from consitent imagery, colors, typography, and marketing.', 'branding.png'),
(6, 'Interaction Design', 'A key area of focus in my design process is to ensure the best interaction for each situation to guide the user in their digital journey, as this is essential in creating engaging and effective experiences.', 'interaction.png');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_ux`
--

DROP TABLE IF EXISTS `tbl_ux`;
CREATE TABLE IF NOT EXISTS `tbl_ux` (
  `ux_id` mediumint(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `ux_title` varchar(50) NOT NULL,
  `ux_info` varchar(1000) NOT NULL,
  `ux_image` varchar(40) NOT NULL,
  `ux_logo` varchar(70) NOT NULL,
  `ux_background_img` varchar(60) NOT NULL,
  PRIMARY KEY (`ux_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_ux`
--

INSERT INTO `tbl_ux` (`ux_id`, `ux_title`, `ux_info`, `ux_image`, `ux_logo`, `ux_background_img`) VALUES
(1, 'Odell Beckham Jr.', 'This was a school project presented by Officialize, the agency representing Odell. The site was one page, responsive, with animations/transitions, and a fully functioning timeline and image gallery. This was an unpaid service and never used from Odell himself. I was responsible for all coding, video, logos, and half design for this site, which I would say is one of my best work to date. Check out the website below to see it live in action!', 'obj_responsive.png', 'obj_logo.png', 'Odell_Preview.jpg'),
(2, 'Lord of the rings remastered', 'This project was to recreate Lord of the Rings, for its 15 year anniveristy, rebranding the original and touching up older images to give it a polished look. The site itself is a promo site for buying/downlaoding the original movie with better visuals and added cut scenes. \r\n\r\nI was responsible for everything creating in this project. It is fully responsive and a stunning movie promotion website designed to turn users into customers. Check it out live!', 'lotr_responsive.png', 'lotr_logo.png', 'LOTR_preview.jpg'),
(3, 'Shanes Sweets - Shop', 'This was a school project aswell, focusing on building a brand and using fundamentals of basic HTML and CSS practices to build a site. This website was heavily focused on CSS animations and animations, and content structure of a well driven online store.\r\n\r\nI was responsible for all coding, logos, and design. Although this is a static website, it still delievers a strong design and website structure. Check it out to see it live!', 'sweets_responsive.png', 'sweets_logo.png', 'Sweets_preview.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_videos`
--

DROP TABLE IF EXISTS `tbl_videos`;
CREATE TABLE IF NOT EXISTS `tbl_videos` (
  `video_id` mediumint(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `video_name` varchar(200) NOT NULL,
  PRIMARY KEY (`video_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_videos`
--

INSERT INTO `tbl_videos` (`video_id`, `video_name`) VALUES
(1, 'demo_reel.mp4'),
(2, 'obj.mp4'),
(3, 'car.mp4'),
(4, 'got.mp4'),
(5, 'soccer.mp4');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
