-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 01, 2022 at 08:47 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `djangodatabase`
--
CREATE DATABASE IF NOT EXISTS `djangodatabase` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `djangodatabase`;

-- --------------------------------------------------------

--
-- Table structure for table `app_academicyear`
--

CREATE TABLE `app_academicyear` (
  `acayear_id` int(11) NOT NULL,
  `year` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `app_academicyear`
--

INSERT INTO `app_academicyear` (`acayear_id`, `year`) VALUES
(1, '2565'),
(2, '2566'),
(3, '2567'),
(4, '2568'),
(10, '2560'),
(11, '2574');

-- --------------------------------------------------------

--
-- Table structure for table `app_adminuser`
--

CREATE TABLE `app_adminuser` (
  `Admin_id_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `app_commiteevote`
--

CREATE TABLE `app_commiteevote` (
  `commitee_id` int(11) NOT NULL,
  `managescholarship_id_id` int(11) NOT NULL,
  `registerscholarship_id_id` int(11) NOT NULL,
  `user_id_id` int(11) NOT NULL,
  `weightcriteriapoint_id_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `app_hero`
--

CREATE TABLE `app_hero` (
  `id` bigint(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` longtext NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `File` varchar(100) DEFAULT NULL,
  `TestFKey_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `app_managescholarship`
--

CREATE TABLE `app_managescholarship` (
  `managescho_id` int(11) NOT NULL,
  `srcUpload` varchar(100) DEFAULT NULL,
  `srcStartDate` date NOT NULL,
  `srcEndDate` date NOT NULL,
  `majorSelect` longtext DEFAULT NULL,
  `nameScholar` varchar(255) DEFAULT NULL,
  `costScholar` varchar(255) DEFAULT NULL,
  `amountScholar` varchar(255) DEFAULT NULL,
  `detailScholar` longtext DEFAULT NULL,
  `qualificationScholar` longtext DEFAULT NULL,
  `addOnScholar` longtext DEFAULT NULL,
  `srcScholar_id` int(11) NOT NULL,
  `srcYear_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `app_managescholarship`
--

INSERT INTO `app_managescholarship` (`managescho_id`, `srcUpload`, `srcStartDate`, `srcEndDate`, `majorSelect`, `nameScholar`, `costScholar`, `amountScholar`, `detailScholar`, `qualificationScholar`, `addOnScholar`, `srcScholar_id`, `srcYear_id`) VALUES
(9, 'image/download_7jgiZyC.jpg', '2022-03-11', '2022-04-01', '{\"วิศวกรรมโยธา\":\"ถูกเลือก\",\"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและการออกแบบ\":\"ถูกเลือก\",\"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์\":\"ถูกเลือก\",\"วิศวกรรมอุตสาหการและระบบ\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและระบบการผลิต\":\"ถูกเลือก\",\"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ\":\"ถูกเลือก\"}', 'ทุนเตรียมตัวสอบปลายภาค', '5000000', '1', 'ทุนนี้จัดทำเพื่อให้มีกำลังใจในการสอบปลายภาค', '-ไม่เคยได้ A,B+,B\r\n-ไม่มีกำลังใจในการสอบ\r\n-ไม่เคยโดดเรียน ตัดคะแนนความประพฤติ', '{\"addFile\":[{\"id\":2,\"fileName\":\"เอกสารบัญชีไม่พร้อมเพย์\",\"fileType\":\"เอกสาร(PDF)\"}]}', 5, 1),
(10, 'image/best.jpg', '2022-03-18', '2022-04-11', '{\"วิศวกรรมโยธา\":\"\",\"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและการออกแบบ\":\"\",\"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์\":\"\",\"วิศวกรรมอุตสาหการและระบบ\":\"\",\"วิศวกรรมเครื่องกลและระบบการผลิต\":\"\",\"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ\":\"\"}', 'ทุนนี้เราต้องทำให้เสร็จนะครับสู้ๆคร้าบบ', '35000', '1000', 'ทุนนี่ทำมาเพื่อเตือนถึงวันที่ งานชื้นนี้ ต้องเสร็จ\r\nและต้องพร้อมพรีเซนต์', '- ทำเว็บให้เสร็จ\r\n- ทำ Word ให้เสร็จ\r\n- พร้อมพรีเซนต์ในวันที่ 11 เมษายน 2565', '{\"addFile\":[{\"id\":1,\"fileName\":\"Word ที่ให้พรีเซนต์\\t\",\"fileType\":\"เอกสาร(PDF)\"}]}', 7, 1),
(19, 'image/1_yM2jp9i.jpg', '2022-03-01', '2022-04-13', '{\"วิศวกรรมโยธา\":\"ถูกเลือก\",\"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและการออกแบบ\":\"ถูกเลือก\",\"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์\":\"ถูกเลือก\",\"วิศวกรรมอุตสาหการและระบบ\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและระบบการผลิต\":\"ถูกเลือก\",\"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ\":\"ถูกเลือก\"}', 'ทุนแรกที่เราทำกันมา', '11200', '1000', '- ทุนเพื่อคนสนใจเรียนนะครับ\r\n- สนใจสมัครได้เลย\r\n- ต้องการข้อมูลเพิ่มเติม 081-11393358', '- เกรดไม่ต่ำกว่า 5.00\r\n- ไม่เน้นคนเรียนเก่ง ขอคนที่ต้องการทุนจริง\r\n- ไม่มีประวัติเคย F,W', '{\"addFile\":[{\"id\":3,\"fileName\":\"รูปถ่าย 3 นิ้ว ชุดนิสิต\",\"fileType\":\"ภาพ(JPG,PNG)\"},{\"id\":3,\"fileName\":\"เอกสารเกรดตลอดการศึกษา\",\"fileType\":\"เอกสาร(PDF)\"}]}', 2, 1),
(20, 'image/2_KCSLccL.jpg', '2022-03-13', '2022-05-31', '{\"วิศวกรรมโยธา\":\"ถูกเลือก\",\"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและการออกแบบ\":\"ถูกเลือก\",\"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์\":\"ถูกเลือก\",\"วิศวกรรมอุตสาหการและระบบ\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและระบบการผลิต\":\"ถูกเลือก\",\"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ\":\"ถูกเลือก\"}', 'ทุนที่สอง', '50000', '90', 'ทุนสำหรับนิสิตที่ทำความดี เน้นทำประโยชน์เพื่อส่วนรวม', '- มีชั่วโมงของการทำคุณประโยชน์ ไม่ต่ำกว่า 1,000ปี', '{\"addFile\":[{\"id\":1,\"fileName\":\"หลักฐานของชั่วโมงการทำความดี\",\"fileType\":\"ภาพ(JPG,PNG)\"}]}', 3, 1),
(23, 'image/ดาวนโหลด_3.jpg', '2022-03-18', '2022-04-09', '{\"วิศวกรรมโยธา\":\"ถูกเลือก\",\"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและการออกแบบ\":\"ถูกเลือก\",\"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์\":\"ถูกเลือก\",\"วิศวกรรมอุตสาหการและระบบ\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและระบบการผลิต\":\"ถูกเลือก\",\"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ\":\"ถูกเลือก\"}', 'ทุนซาบซึ้ง', '1212', '112', 'กล่าวอะไรดี ก่อนรับ', 'รักชาติ', '{\"addFile\":[{\"id\":1,\"fileName\":\"บ้าน\",\"fileType\":\"เอกสาร(PDF)\"},{\"id\":2,\"fileName\":\"รถ\",\"fileType\":\"ภาพ(JPG,PNG)\"}]}', 11, 2),
(24, 'image/download.jpg', '2022-03-02', '2022-04-09', '{\"วิศวกรรมโยธา\":\"ถูกเลือก\",\"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและการออกแบบ\":\"ถูกเลือก\",\"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์\":\"ถูกเลือก\",\"วิศวกรรมอุตสาหการและระบบ\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและระบบการผลิต\":\"ถูกเลือก\",\"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ\":\"ถูกเลือก\"}', 'ทุนต้นไม้ของพ่อ', '30000', '69', '55555', '5555', '{\"addFile\":[{\"id\":1,\"fileName\":\"สระ\",\"fileType\":\"ภาพ(JPG,PNG)\"},{\"id\":2,\"fileName\":\"ดอกไม้\",\"fileType\":\"ภาพ(JPG,PNG)\"}]}', 11, 3),
(25, 'image/writing-clipart-transparent-23_1IjTddO.png', '2022-03-11', '2022-06-24', '{\"วิศวกรรมโยธา\":\"ถูกเลือก\",\"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและการออกแบบ\":\"ถูกเลือก\",\"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์\":\"ถูกเลือก\",\"วิศวกรรมอุตสาหการและระบบ\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและระบบการผลิต\":\"ถูกเลือก\",\"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ\":\"ถูกเลือก\"}', 'Stackoverflow', '1000', '100', 'How to set default Checked in checkbox ReactJS?', 'In the React rendering lifecycle, the value attribute on form elements will override the value in the DOM. With an uncontrolled component, you often want React to specify the initial value, but leave subsequent updates uncontrolled. To handle this case, you can specify a defaultValue or defaultChecked attribute instead of value.', '{\"addFile\":[{\"id\":1,\"fileName\":\"บ้าน\",\"fileType\":\"เอกสาร(PDF)\"},{\"id\":2,\"fileName\":\"บ้าน\",\"fileType\":\"วีดีโอ(MP4)\"}]}', 11, 1),
(26, 'image/writing-clipart-transparent-23_oD5qUG4.png', '2022-03-11', '2022-04-02', '{\"วิศวกรรมโยธา\":\"ถูกเลือก\",\"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและการออกแบบ\":\"ถูกเลือก\",\"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์\":\"ถูกเลือก\",\"วิศวกรรมอุตสาหการและระบบ\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและระบบการผลิต\":\"ถูกเลือก\",\"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ\":\"ถูกเลือก\"}', 'contact', '1', '1', 'contactcontactcontactcontactcontact', 'contactcontactcontactcontactcontact', '{\"addFile\":[{\"id\":1,\"fileName\":\"บ้าน\",\"fileType\":\"เอกสาร(PDF)\"}]}', 11, 4),
(28, 'image/177_2ydGAF7.png', '2022-04-08', '2022-04-09', '{\"วิศวกรรมโยธา\":\"ถูกเลือก\",\"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและการออกแบบ\":\"ถูกเลือก\",\"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์\":\"ถูกเลือก\",\"วิศวกรรมอุตสาหการและระบบ\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและระบบการผลิต\":\"ถูกเลือก\",\"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ\":\"ถูกเลือก\"}', 'ทุนต้นไม้ของแม่', '1212', '12', 'ต้องยืน', 'กล่าวสดุดี', '{\"addFile\":[{\"id\":1,\"fileName\":\"บ้าน\",\"fileType\":\"ภาพ(JPG,PNG)\"},{\"id\":2,\"fileName\":\"รถ\",\"fileType\":\"เอกสาร(PDF)\"}]}', 11, 1),
(29, 'image/แปลลๆๆ.JPG', '2022-03-19', '2022-04-28', '{\"วิศวกรรมโยธา\":\"ถูกเลือก\",\"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและการออกแบบ\":\"ถูกเลือก\",\"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์\":\"\",\"วิศวกรรมอุตสาหการและระบบ\":\"\",\"วิศวกรรมเครื่องกลและระบบการผลิต\":\"\",\"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ\":\"\"}', 'ทุนนี้จะแปลกๆหน่อยนะ', '120000', '2000', 'รู้แปลกๆหรือป่าว \r\nอยากเล่นใหญใจต้องนิ่ง', 'ขอคนใจนิ่งๆ ไม่วู่วามไม่สติแตกไม่โวยวาย', '{\"addFile\":[{\"id\":1,\"fileName\":\"สระ\",\"fileType\":\"วีดีโอ(MP4)\"}]}', 12, 1),
(31, 'image/ดาวนาเมก_xs3UuM2.png', '2022-04-04', '2022-04-01', '{\"วิศวกรรมโยธา\":\"ถูกเลือก\",\"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและการออกแบบ\":\"ถูกเลือก\",\"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์\":\"ถูกเลือก\",\"วิศวกรรมอุตสาหการและระบบ\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและระบบการผลิต\":\"ถูกเลือก\",\"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ\":\"ถูกเลือก\"}', 'MSchoTest', '10', '112', 'This specification shares some commonality with the -webkit-scrollbar specification for controlling the color of the scrollbar. However, there is presently no support for modifying the padding and roundness for the “track thumb”.', 'This specification shares some commonality with the -webkit-scrollbar specification for controlling the color of the scrollbar. However, there is presently no support for modifying the padding and roundness for the “track thumb”.', '{\"addFile\":[{\"id\":1,\"fileName\":\"qwqwq\",\"fileType\":\"เอกสาร(PDF)\"}]}', 2, 1),
(37, 'image/0.jpg', '2022-03-24', '2022-04-07', '{\"วิศวกรรมโยธา\":\"ถูกเลือก\",\"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและการออกแบบ\":\"\",\"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์\":\"\",\"วิศวกรรมอุตสาหการและระบบ\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและระบบการผลิต\":\"ถูกเลือก\",\"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ\":\"ถูกเลือก\"}', 'ทุนซาบซึ้งในพระมหา?', '7', '8', 'const entries = new Map([\r\n  [\'foo\', \'bar\'],\r\n  [\'baz\', 42]\r\n]);\r\n\r\nconst obj = Object.fromEntries(entries);\r\n\r\nconsole.log(obj);\r\n// expected output: Object { foo: \"bar\", baz: 42 }', 'Rendering Multiple Components\r\nYou can build collections of elements and include them in JSX using curly braces {}.\r\n\r\nBelow, we loop through the numbers array using the JavaScript map() function. We return a <li> element for each item. Finally, we assign the resulting array of elements to listItems:', '{\"addFile\":[{\"id\":1,\"fileName\":\"บ้าน\",\"fileType\":\"เอกสาร(PDF)\"}]}', 11, 4),
(42, 'image/รปทน11.jpg', '2022-03-30', '2022-08-06', '{\"วิศวกรรมโยธา\":\"ถูกเลือก\",\"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและการออกแบบ\":\"ถูกเลือก\",\"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์\":\"ถูกเลือก\",\"วิศวกรรมอุตสาหการและระบบ\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและระบบการผลิต\":\"ถูกเลือก\",\"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ\":\"ถูกเลือก\"}', 'ทุนนี้รักจริงหวังแต่ง', '246', '1507', 'เป็นทุนที่ดีมากมากๆ\r\nเหมาะกับทุกเพศทุกวัย', 'ใครก็ได้ได้หมดอะ', '{\"addFile\":[{\"id\":1,\"fileName\":\"สำเนาบัตรนิสิต\",\"fileType\":\"ภาพ(JPG,PNG)\"},{\"id\":2,\"fileName\":\"บ้าน\",\"fileType\":\"ภาพ(JPG,PNG)\"},{\"id\":3,\"fileName\":\"ชู2นิ้วลิโพ\",\"fileType\":\"ภาพ(JPG,PNG)\"},{\"id\":4,\"fileName\":\"บ้าน12\",\"fileType\":\"เอกสาร(PDF)\"}]}', 2, 1),
(44, 'image/1_gmG5SSn.jpg', '2022-03-30', '2022-07-28', '{\"วิศวกรรมโยธา\":\"\",\"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์\":\"\",\"วิศวกรรมเครื่องกลและการออกแบบ\":\"\",\"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์\":\"ถูกเลือก\",\"วิศวกรรมอุตสาหการและระบบ\":\"\",\"วิศวกรรมเครื่องกลและระบบการผลิต\":\"\",\"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ\":\"\"}', 'ทุนไต้ฝุ่นละอองทุรีพระบาท', '3213213', '3213289', 'คำ�ว่าใต้ฝ่าละอองธุลีพระบาท เป็นคำ�\r\nราชาศัพท์ที่ได้ยินกันมามาก แต่น้อยคน\r\nที่เข้าใจความหมายที่แท้จริง บางคนคิด\r\nว่า คำ�ว่าใต้ฝ่าละอองธุลีพระบาท แปล\r\nตรง ๆ ตัวว่า ใต้ฝุ่นเท้า หมายถึงประชาชน\r\nผู้จงรักภักดี แต่ในความเป็นจริงคำ�ว่า ใต้\r\nฝ่าละอองธุลีพระบาท หรือใต้ฝ่าพระบาท\r\nไม่ได้หมายถึงประชาชนที่เป็นผู้พูด แต่\r\nหมายถึงเจ้านายระดับสูงตั้งแต่ชั้นหม่อม\r\nเจ้า พระองค์เจ้าขึ้นไปจนถึงพระมหากษัตริย์ \r\nตามพระอิสริยยศของแต่ละพระองค์ต่างหาก', 'ผมเคยอ่านข้อถกเถียง คำวิสัชนาของหลายคนในเรื่องที่มา ของคำว่า \"ใต้ฝ่าละอองธุลีพระบาท\" ว่าทำไมถึงเป็นสรรพนามบุรุษที่สอง แทน \"พระมหากษัตริย์\"\r\n\r\nคือ เมื่อคำนึงว่า เป็นคำแทนพระมหากษัตริย์ สมควรที่จะไปในรูปยกย่องมากกว่า เช่นเดียวกับคำว่า \"ทูลกระหม่อม\" \"เหนือหัว\" หรือ \"พระเจ้าอยู่หัว\"\r\n\r\nฉะนั้น เมื่อได้ อ่านคำตอบที่ระบุว่า เป็นการยกย่อง และแสดงให้เห็นว่า ตัวเรานั้นอยู่ต่ำกว่า แม้ฝุ่นใต้เท้าท่าน ก็ดูไม่สมเหตุที่จะไปเป็นการยกย่องในทาง สรรพนามบุรุษที่สอง เพราะหากความหมายกระเดียดมาทางตัวเราก็ควรสื่อที่ สรรพนามบุรุษที่หนึ่งมากกว่า\r\n\r\nหรือ แม้แต่เหตุผลที่ดูยอมรับกันอย่างมากในแง่การยกพุทธประวัติ ในครั้งที่พระพุทธเจ้าทรงแสดงยมกปาฏิหาริย์ ทรงดำเนินในอากาศ แล้วฝุ่นละอองใต้พระบาท ตกต้องเศียรเจ้าศากยะวงศ์ จึงละทิฎฐิ ยกมืออัญชลี พระพุทธเจ้า ก็ดูเป็น ที่มาที่อยู่ในแง่ลบ เพราะเป็นเรื่องการปราบพยศ ไม่น่าจะเอามาเทียบยกย่องได้ แต่คิดว่า เกิดจากการอนุมาน จากคำว่า \"ข้าพระพุทธเจ้า\" มากกว่า\r\n\r\nหรือแม้ความเห็นที่ว่า คำนี้มีที่มาในราชสำนักเขมร เวลาเข้าเฝ้า จะมีการไขพระวิสูตรแล้วทำให้ละอองฝุ่นฟุ้ง เลยเป็นที่มาของคำนี้ คู่กับคำว่า \"เฝ้าทูลละอองธุลีพระบาท\"\r\n\r\nฉะนั้น จากที่อ่านๆ คำอธิบายต่างๆ ดูไม่สมเหตุผล ในการใช้คำนี้เป็นสรรพนามบุรุษที่สอง แทนพระมหากษัตริย์เลย\r\n\r\nที่นี้ดูว่าประเด็นที่หลายๆท่านเคยยกมา มันน่ากังขาและทำให้ผมตีตกไปหมดเลย ก็เลยค้นคว้าเพิ่ม จนคิดว่าได้คำตอบที่น่าพอใจและดูสมเหตุผลมา\r\n\r\nแต่อยากถามเพื่อนๆก่อนว่า คิดว่า คำว่า \"ใต้ฝ่าละอองธุลีพระบาท\" ในทัศนคติของแต่ละคน สือถึงอะไร และคิดว่าเป็นคำยกย่อง ในแง่ไหนกันบ้างครับ', '{\"addFile\":[{\"id\":1,\"fileName\":\"เสื้อ เหลืองๆ\",\"fileType\":\"ภาพ(JPG,PNG)\"}]}', 8, 1),
(54, '', '2022-03-28', '2022-05-04', '{\"วิศวกรรมโยธา\":\"ถูกเลือก\",\"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์\":\"\",\"วิศวกรรมเครื่องกลและการออกแบบ\":\"\",\"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์\":\"\",\"วิศวกรรมอุตสาหการและระบบ\":\"\",\"วิศวกรรมเครื่องกลและระบบการผลิต\":\"\",\"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ\":\"\"}', 'contact', '1212', '12', 'ๆไๆ', 'ๆไำ', '{\"addFile\":[{\"id\":1,\"fileName\":\"บ้าน\",\"fileType\":\"ภาพ(JPG,PNG)\"}]}', 11, 3),
(55, '', '2022-04-07', '2022-04-21', '{\"วิศวกรรมโยธา\":\"ถูกเลือก\",\"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและการออกแบบ\":\"\",\"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์\":\"\",\"วิศวกรรมอุตสาหการและระบบ\":\"\",\"วิศวกรรมเครื่องกลและระบบการผลิต\":\"\",\"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ\":\"\"}', 'ทุนซาบซึ้ง4', '1212', '12', 'df', 'dsf', '{\"addFile\":[{\"id\":1,\"fileName\":\"\",\"fileType\":\"เอกสาร(PDF)\"}]}', 11, 1),
(56, 'image/Notes_220103_151743.jpg', '2022-03-31', '2022-04-02', '{\"วิศวกรรมโยธา\":\"\",\"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและการออกแบบ\":\"\",\"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์\":\"\",\"วิศวกรรมอุตสาหการและระบบ\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและระบบการผลิต\":\"\",\"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ\":\"\"}', 'ทุนเตรียมตัวสอบกลางภาค', '50000', '30', 'FieldFile.name¶\r\nThe name of the file including the relative path from the root of the Storage of the associated FileField.\r\n\r\nFieldFile.path¶\r\nA read-only property to access the file’s local filesystem path by calling the path() method of the underlying Storage class.\r\n\r\nFieldFile.size¶\r\nThe result of the underlying Storage.size() method.', '-เกรด 1.50', '{\"addFile\":[]}', 12, 1);

-- --------------------------------------------------------

--
-- Table structure for table `app_place`
--

CREATE TABLE `app_place` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `app_registerscholarship`
--

CREATE TABLE `app_registerscholarship` (
  `register_id` int(11) NOT NULL,
  `namescholarregister_id` int(11) NOT NULL,
  `message` varchar(100) DEFAULT NULL,
  `statusCheck` varchar(100) DEFAULT NULL,
  `usermatch_id_id` int(11) NOT NULL,
  `studentinform_profile_id` int(11) NOT NULL,
  `statusInterview` varchar(100) DEFAULT NULL,
  `statusReceipt` varchar(100) DEFAULT NULL,
  `statusTransfer` varchar(100) DEFAULT NULL,
  `totalScore` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `app_registerscholarship`
--

INSERT INTO `app_registerscholarship` (`register_id`, `namescholarregister_id`, `message`, `statusCheck`, `usermatch_id_id`, `studentinform_profile_id`, `statusInterview`, `statusReceipt`, `statusTransfer`, `totalScore`) VALUES
(2025, 28, '', '0', 1, 49, '0', '0', '0', NULL),
(2026, 9, '', '0', 1, 50, '0', '0', '0', NULL),
(2028, 9, '', '0', 6, 52, '0', '0', '0', NULL),
(2029, 10, '', '0', 6, 53, '0', '0', '0', NULL),
(2031, 9, '', '0', 5, 55, '0', '0', '0', NULL),
(2032, 10, '', '0', 5, 56, '0', '0', '0', NULL),
(2033, 19, NULL, '0', 5, 57, '0', '0', '0', NULL),
(2034, 20, '', '0', 5, 58, '0', '0', '0', NULL),
(2035, 23, '', '0', 5, 59, '0', '0', '0', NULL),
(2036, 24, '', '0', 5, 60, '0', '0', '0', NULL),
(2037, 29, '', '0', 5, 61, '0', '0', '0', NULL),
(2038, 37, '', '0', 5, 62, '0', '0', '0', NULL),
(2039, 28, '', '0', 5, 63, '0', '0', '0', NULL),
(2042, 25, '', '0', 9, 66, '0', '0', '0', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `app_restaurant`
--

CREATE TABLE `app_restaurant` (
  `place_id` bigint(20) NOT NULL,
  `serves_hot_dogs` tinyint(1) NOT NULL,
  `serves_pizza` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `app_schedule`
--

CREATE TABLE `app_schedule` (
  `sche_id` int(11) NOT NULL,
  `titleSchedule` varchar(255) NOT NULL,
  `dateSchedule` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `app_schedule`
--

INSERT INTO `app_schedule` (`sche_id`, `titleSchedule`, `dateSchedule`) VALUES
(3, 'วันคล้ายวันเกิดตั้วนะคร้าบอิอิ^ ^', '2022-04-04'),
(4, 'วันส่งงานวิชานี้นะคร้าบ', '2022-04-11');

-- --------------------------------------------------------

--
-- Table structure for table `app_sourceofscholarship`
--

CREATE TABLE `app_sourceofscholarship` (
  `sourceofscho_id` int(11) NOT NULL,
  `nameSrcScholar` varchar(255) DEFAULT NULL,
  `tel` varchar(20) DEFAULT NULL,
  `selectedDate` date NOT NULL,
  `detailAddr` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `app_sourceofscholarship`
--

INSERT INTO `app_sourceofscholarship` (`sourceofscho_id`, `nameSrcScholar`, `tel`, `selectedDate`, `detailAddr`) VALUES
(1, 'กองกิจการมก.ศรช', '0956662354', '2022-04-20', 'โลก'),
(2, 'บริษัท ตั้วขนส่ง จำกัด', '0811393358', '2022-01-01', 'โลกใบนี้'),
(3, 'คุณ ประภวิษณุ์ สุดเฟี้ยวฟ้าว', '0911393358', '2022-02-01', 'เหมือนมีคำสาปให้คนทุกคน'),
(4, 'คุณ ตั้วแห่ง ดาวนาเม็ก', '0611393358', '2022-03-01', 'ทำสิ่งต้องห้าม ก็รู้ว่าไม่ดี'),
(5, 'ทุนสอบปลายภาค', '0643321432', '2022-03-10', '153/43 ม.45 ต.ดาวเหนือ อ.ดาวโลก จ.กาแล็ตซี่'),
(7, 'เตือนวันส่ง', '11042564', '2022-03-01', 'ม.เกษตรศรีราชา'),
(8, 'เจ้าสัว ตั้ว', '43242342334', '2022-03-18', 'ปราสาททรายทอง'),
(11, 'PhunyaweeCorp.', '0851111111', '2022-04-10', 'Neptune'),
(12, 'บุคลปริศนา0112', '112', '2022-10-13', 'ทั่วโลก'),
(13, 'op', '085555', '2022-03-01', ''),
(19, 'Master_M', '085555', '2022-04-13', '');

-- --------------------------------------------------------

--
-- Table structure for table `app_studentfile`
--

CREATE TABLE `app_studentfile` (
  `studentinform_profile_stdfile` int(11) NOT NULL,
  `stdinform_id_id` int(11) NOT NULL,
  `usermatch_id_stdfile_id` int(11) NOT NULL,
  `profile_essay` varchar(100) DEFAULT NULL,
  `national_id_card` varchar(100) DEFAULT NULL,
  `transcript` varchar(100) DEFAULT NULL,
  `house_registration` varchar(100) DEFAULT NULL,
  `checkFileFile` tinyint(1) NOT NULL,
  `Father_Profile_reg` longtext DEFAULT NULL,
  `GPA_Std_reg` varchar(100) DEFAULT NULL,
  `Mother_Profile_reg` longtext DEFAULT NULL,
  `Other_Profile_reg` longtext DEFAULT NULL,
  `Sibling_Profile_reg` longtext DEFAULT NULL,
  `address_Std_reg` longtext DEFAULT NULL,
  `advisor_Std_reg` varchar(100) DEFAULT NULL,
  `available_ID_reg` tinyint(1) NOT NULL,
  `birthDate_Std_reg` varchar(100) DEFAULT NULL,
  `email_Std_reg` varchar(100) DEFAULT NULL,
  `fullName_Std_reg` varchar(100) DEFAULT NULL,
  `id_Std_reg` varchar(100) DEFAULT NULL,
  `image_Std_reg` varchar(100) DEFAULT NULL,
  `major_Std_reg` varchar(100) DEFAULT NULL,
  `phone_Std_reg` varchar(10) DEFAULT NULL,
  `term_Std_reg` varchar(100) DEFAULT NULL,
  `year_Std_reg` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `app_studentfile`
--

INSERT INTO `app_studentfile` (`studentinform_profile_stdfile`, `stdinform_id_id`, `usermatch_id_stdfile_id`, `profile_essay`, `national_id_card`, `transcript`, `house_registration`, `checkFileFile`, `Father_Profile_reg`, `GPA_Std_reg`, `Mother_Profile_reg`, `Other_Profile_reg`, `Sibling_Profile_reg`, `address_Std_reg`, `advisor_Std_reg`, `available_ID_reg`, `birthDate_Std_reg`, `email_Std_reg`, `fullName_Std_reg`, `id_Std_reg`, `image_Std_reg`, `major_Std_reg`, `phone_Std_reg`, `term_Std_reg`, `year_Std_reg`) VALUES
(48, 1, 1, 'Profile_Essay/87-875807_http-moniquestrella-minus-com-mw2cxuf41ymwb-edible-mushroom_ZqUBmhJ.png', 'ID_card/198-1983605_cylinder-shape-png-banner-free-library-cylinder-clipart_fXyvX7J.png', 'Transcript/6230300923_pt9qbVg.jpg', 'house_registration/247072095_615447642947186_2959930884237452374_n_1SBtyve.jpg', 0, '{\"fullname_Father\":\"\",\"state_Father\":\"\",\"job_Father\":\"\",\"workplace_Father\":\"\",\"salary_Father\":\"\",\"phone_Father\":\"\",\"address_Father\":\"\"}', '4.00', '{\"fullname_Mother\":\"\",\"state_Mother\":\"\",\"job_Mother\":\"\",\"workplace_Mother\":\"\",\"salary_Mother\":\"\",\"phone_Mother\":\"\",\"address_Mother\":\"\",\"mariage_Mother\":\"\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"-\",\"scholarship\":\"-\",\"cost\":\"-\"}],\"parttime_Other\":\"เคย\",\"takeloan_Other\":\"\",\"job_Other\":\"\",\"salary_Other\":\"0\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"}],\"money_Donator\":\"\",\"who_Donators\":\"\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'ศุภพงษ์ บุญปัญญา', '100/901 ม10', 1, '2022-03-12', 'zxohm2543@gmail.com', 'ศุภพงษ์ บุญปัญญา', '6230300923', '', 'สาขาวิชาวิศวกรรมคอมพิวเตอร์', '0956321391', 'ภาคพิเศษ', '3'),
(49, 1, 1, 'Profile_Essay/ll_kEnRSl9.JPG', 'ID_card/Login_toKfyFz.png', 'Transcript/โอมเอง_8O5QZyP.jpg', 'house_registration/Moonbackground.png_IVoiHnt.jpg', 0, '{\"fullname_Father\":\"\",\"state_Father\":\"\",\"job_Father\":\"\",\"workplace_Father\":\"\",\"salary_Father\":\"\",\"phone_Father\":\"\",\"address_Father\":\"\"}', '4.00', '{\"fullname_Mother\":\"\",\"state_Mother\":\"\",\"job_Mother\":\"\",\"workplace_Mother\":\"\",\"salary_Mother\":\"\",\"phone_Mother\":\"\",\"address_Mother\":\"\",\"mariage_Mother\":\"\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"-\",\"scholarship\":\"-\",\"cost\":\"-\"}],\"parttime_Other\":\"เคย\",\"takeloan_Other\":\"\",\"job_Other\":\"\",\"salary_Other\":\"0\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"}],\"money_Donator\":\"\",\"who_Donators\":\"\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'ศุภพงษ์ บุญปัญญา', '100/901 ม10', 1, '2022-03-12', 'zxohm2543@gmail.com', 'ศุภพงษ์ บุญปัญญา', '6230300923', '', 'สาขาวิชาวิศวกรรมคอมพิวเตอร์', '0956321391', 'ภาคพิเศษ', '3'),
(50, 1, 1, 'Profile_Essay/T1_yYxxuVc.png', 'ID_card/T2_EKUpEBl.png', 'Transcript/โอมเอง_E5xCJp5.jpg', 'house_registration/T3_5yBxlFU.png', 0, '{\"fullname_Father\":\"\",\"state_Father\":\"\",\"job_Father\":\"\",\"workplace_Father\":\"\",\"salary_Father\":\"\",\"phone_Father\":\"\",\"address_Father\":\"\"}', '4.00', '{\"fullname_Mother\":\"\",\"state_Mother\":\"\",\"job_Mother\":\"\",\"workplace_Mother\":\"\",\"salary_Mother\":\"\",\"phone_Mother\":\"\",\"address_Mother\":\"\",\"mariage_Mother\":\"\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"-\",\"scholarship\":\"-\",\"cost\":\"-\"}],\"parttime_Other\":\"เคย\",\"takeloan_Other\":\"\",\"job_Other\":\"\",\"salary_Other\":\"0\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"}],\"money_Donator\":\"\",\"who_Donators\":\"\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'ศุภพงษ์ บุญปัญญา', '100/901 ม10', 1, '2022-03-12', 'zxohm2543@gmail.com', 'ศุภพงษ์ บุญปัญญา', '6230300923', '', 'สาขาวิชาวิศวกรรมคอมพิวเตอร์', '0956321391', 'ภาคพิเศษ', '3'),
(51, 6, 6, 'Profile_Essay/kondt1userGroup33-71205ว-แนวคดการทำงานรวมกนในการจดการสงแวดลอมอยางยงยน_081VQzJ.pdf', 'ID_card/6230300940_สำเนาทะเบยนบาน_Me0dwVa.pdf', 'Transcript/แผนแมบท_ทส_m5XFlli.pdf', 'house_registration/นโยบายธรรมาภบาลขอมลกระทรวงทรพยากรธรรมชาตและสงแวดลอม_OaePQPw.pdf', 0, '{\"fullname_Father\":\"นางสาวไทย ใจร่ม\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ข้าบริวาลทั้งหลายเหล่านี้\",\"workplace_Father\":\"รร.\",\"salary_Father\":\"-51\",\"phone_Father\":\"0945432345\",\"address_Father\":\"asf fwe fawe\"}', '4', '{\"fullname_Mother\":\"นายพลไม่บดี เดชะนุรักษ์\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"หทารชั้นต่ำ\",\"workplace_Mother\":\"มทบ.9รบ8\",\"salary_Mother\":\"-3\",\"phone_Mother\":\"0945432345\",\"address_Mother\":\"agrev\",\"mariage_Mother\":\"แยกกันอยู่\",\"mariage_Seperate_Reason\":\"รายได้ติดลบ แก้ด้วย\"}', '{\"contacts2\":[],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"id\":\"-\",\"fullName\":\"นางสาว Tanoshi Shizuoni\",\"education\":\"High School Academic\",\"job\":\"Programmer\",\"workplace\":\"workpoint\"}],\"money_Donator\":\"-2\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'd', 'd', 1, '2000-08-31', 'sapol.m@ku.th', 'สพล มหาวงศ์', '6230300940', '', 'สาขาวิชาวิศวกรรมคอมพิวเตอร์', '0945432345', 'ภาคปกติ', '3'),
(52, 6, 6, 'Profile_Essay/6230300940_สำเนาทะเบยนบาน_lMzaAjG.pdf', 'ID_card/Math3_รอบจด.pdf', 'Transcript/mst_9zmjZZB.pdf', 'house_registration/kondt1userGroup33-71205ว-แนวคดการทำงานรวมกนในการจดการสงแวดลอมอยางยงยน_OToouf5.pdf', 0, '{\"fullname_Father\":\"นางสาวไทย ใจร่ม\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ข้าบริวาลทั้งหลายเหล่านี้\",\"workplace_Father\":\"รร.\",\"salary_Father\":\"-51\",\"phone_Father\":\"0945432345\",\"address_Father\":\"asf fwe fawe\"}', '4', '{\"fullname_Mother\":\"นายพลไม่บดี เดชะนุรักษ์\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"หทารชั้นต่ำ\",\"workplace_Mother\":\"มทบ.9รบ8\",\"salary_Mother\":\"-3\",\"phone_Mother\":\"0945432345\",\"address_Mother\":\"agrev\",\"mariage_Mother\":\"แยกกันอยู่\",\"mariage_Seperate_Reason\":\"รายได้ติดลบ แก้ด้วย\"}', '{\"contacts2\":[],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"id\":\"-\",\"fullName\":\"นางสาว Tanoshi Shizuoni\",\"education\":\"High School Academic\",\"job\":\"Programmer\",\"workplace\":\"workpoint\"}],\"money_Donator\":\"-2\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'd', 'd', 1, '2000-08-31', 'sapol.m@ku.th', 'สพล มหาวงศ์', '6230300940', '', 'สาขาวิชาวิศวกรรมคอมพิวเตอร์', '0945432345', 'ภาคปกติ', '3'),
(53, 6, 6, 'Profile_Essay/Math3_รอบจด.pdf', 'ID_card/6230300940_สำเนาทะเบยนบาน_Eg5r9ay.pdf', 'Transcript/แผนแมบท_ทส_WFt9XqS.pdf', 'house_registration/นโยบายธรรมาภบาลขอมลกระทรวงทรพยากรธรรมชาตและสงแวดลอม_cgnmXd5.pdf', 0, '{\"fullname_Father\":\"นางสาวไทย ใจร่ม\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ข้าบริวาลทั้งหลายเหล่านี้\",\"workplace_Father\":\"รร.\",\"salary_Father\":\"-51\",\"phone_Father\":\"0945432345\",\"address_Father\":\"asf fwe fawe\"}', '4', '{\"fullname_Mother\":\"นายพลไม่บดี เดชะนุรักษ์\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"หทารชั้นต่ำ\",\"workplace_Mother\":\"มทบ.9รบ8\",\"salary_Mother\":\"-3\",\"phone_Mother\":\"0945432345\",\"address_Mother\":\"agrev\",\"mariage_Mother\":\"แยกกันอยู่\",\"mariage_Seperate_Reason\":\"รายได้ติดลบ แก้ด้วย\"}', '{\"contacts2\":[],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"id\":\"-\",\"fullName\":\"นางสาว Tanoshi Shizuoni\",\"education\":\"High School Academic\",\"job\":\"Programmer\",\"workplace\":\"workpoint\"}],\"money_Donator\":\"-2\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'd', 'd', 1, '2000-08-31', 'sapol.m@ku.th', 'สพล มหาวงศ์', '6230300940', '', 'สาขาวิชาวิศวกรรมคอมพิวเตอร์', '0945432345', 'ภาคปกติ', '3'),
(54, 5, 5, 'Profile_Essay/1_gRrZIrS.jpg', 'ID_card/2_RZ5s6Te.jpg', 'Transcript/4_8XiI46Q.jpg', 'house_registration/3_rq44E9Y.jpg', 0, '{\"fullname_Father\":\"จิรชัย\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ธุรกิจส่วนตัว\",\"workplace_Father\":\"บ้าน\",\"salary_Father\":\"10000\",\"phone_Father\":\"0810772340\",\"address_Father\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\"}', '2.69', '{\"fullname_Mother\":\"กฤษณา\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"พยาบาล\",\"workplace_Mother\":\"โรงพยาบาล\",\"salary_Mother\":\"35000\",\"phone_Mother\":\"0944969640\",\"address_Mother\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":2,\"schoolyear\":\"กกกกกกก\",\"scholarship\":\"กกกกกกกกกกก\",\"cost\":\"กกกกกกกกก\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"},{\"id\":2,\"fullName\":\"นางสาว ปวิตรา น้อง\",\"education\":\"ม.ปลาย\",\"job\":\"นักเรียน\",\"workplace\":\"โรงเรียน\"}],\"money_Donator\":\"8000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'อ.กุลวดี', 'ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง', 1, '2001-04-04', 'prapavit.p@ku.th', 'ประภวิษณุ์ ปัทมาสวิน', '6230300583', '', 'สาขาวิชาวิศวกรรมคอมพิวเตอร์', '0811393358', 'ภาคปกติ', '3'),
(55, 5, 5, 'Profile_Essay/1_jymRY9P.jpg', 'ID_card/2_E6Lu0B0.jpg', 'Transcript/4_DuUWIoj.jpg', 'house_registration/3_gF1k6a8.jpg', 0, '{\"fullname_Father\":\"จิรชัย\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ธุรกิจส่วนตัว\",\"workplace_Father\":\"บ้าน\",\"salary_Father\":\"10000\",\"phone_Father\":\"0810772340\",\"address_Father\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\"}', '2.69', '{\"fullname_Mother\":\"กฤษณา\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"พยาบาล\",\"workplace_Mother\":\"โรงพยาบาล\",\"salary_Mother\":\"35000\",\"phone_Mother\":\"0944969640\",\"address_Mother\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":2,\"schoolyear\":\"กกกกกกก\",\"scholarship\":\"กกกกกกกกกกก\",\"cost\":\"กกกกกกกกก\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"},{\"id\":2,\"fullName\":\"นางสาว ปวิตรา น้อง\",\"education\":\"ม.ปลาย\",\"job\":\"นักเรียน\",\"workplace\":\"โรงเรียน\"}],\"money_Donator\":\"8000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'อ.กุลวดี', 'ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง', 1, '2001-04-04', 'prapavit.p@ku.th', 'ประภวิษณุ์ ปัทมาสวิน', '6230300583', '', 'สาขาวิชาวิศวกรรมคอมพิวเตอร์', '0811393358', 'ภาคปกติ', '3'),
(56, 5, 5, 'Profile_Essay/1_1Nw3aFU.jpg', 'ID_card/2_AkhYaJl.jpg', 'Transcript/4_hINO25v.jpg', 'house_registration/3_RRUYEuK.jpg', 0, '{\"fullname_Father\":\"จิรชัย\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ธุรกิจส่วนตัว\",\"workplace_Father\":\"บ้าน\",\"salary_Father\":\"10000\",\"phone_Father\":\"0810772340\",\"address_Father\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\"}', '2.69', '{\"fullname_Mother\":\"กฤษณา\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"พยาบาล\",\"workplace_Mother\":\"โรงพยาบาล\",\"salary_Mother\":\"35000\",\"phone_Mother\":\"0944969640\",\"address_Mother\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":2,\"schoolyear\":\"กกกกกกก\",\"scholarship\":\"กกกกกกกกกกก\",\"cost\":\"กกกกกกกกก\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"},{\"id\":2,\"fullName\":\"นางสาว ปวิตรา น้อง\",\"education\":\"ม.ปลาย\",\"job\":\"นักเรียน\",\"workplace\":\"โรงเรียน\"}],\"money_Donator\":\"8000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'อ.กุลวดี', 'ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง', 1, '2001-04-04', 'prapavit.p@ku.th', 'ประภวิษณุ์ ปัทมาสวิน', '6230300583', '', 'สาขาวิชาวิศวกรรมคอมพิวเตอร์', '0811393358', 'ภาคปกติ', '3'),
(57, 5, 5, 'Profile_Essay/2_5PcTfx8.jpg', 'ID_card/5.jpg', 'Transcript/3_hi6Ngib.jpg', 'house_registration/4_lf6l6ZN.jpg', 0, '{\"fullname_Father\":\"จิรชัย\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ธุรกิจส่วนตัว\",\"workplace_Father\":\"บ้าน\",\"salary_Father\":\"10000\",\"phone_Father\":\"0810772340\",\"address_Father\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\"}', '2.69', '{\"fullname_Mother\":\"กฤษณา\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"พยาบาล\",\"workplace_Mother\":\"โรงพยาบาล\",\"salary_Mother\":\"35000\",\"phone_Mother\":\"0944969640\",\"address_Mother\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":2,\"schoolyear\":\"กกกกกกก\",\"scholarship\":\"กกกกกกกกกกก\",\"cost\":\"กกกกกกกกก\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"},{\"id\":2,\"fullName\":\"นางสาว ปวิตรา น้อง\",\"education\":\"ม.ปลาย\",\"job\":\"นักเรียน\",\"workplace\":\"โรงเรียน\"}],\"money_Donator\":\"8000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'อ.กุลวดี', 'ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง', 1, '2001-04-04', 'prapavit.p@ku.th', 'ประภวิษณุ์ ปัทมาสวิน', '6230300583', '', 'สาขาวิชาวิศวกรรมคอมพิวเตอร์', '0811393358', 'ภาคปกติ', '3'),
(58, 5, 5, 'Profile_Essay/1_TDIpPPg.jpg', 'ID_card/2_s0afX4m.jpg', 'Transcript/4_q2XrVwo.jpg', 'house_registration/3_Y04fWXP.jpg', 0, '{\"fullname_Father\":\"จิรชัย\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ธุรกิจส่วนตัว\",\"workplace_Father\":\"บ้าน\",\"salary_Father\":\"10000\",\"phone_Father\":\"0810772340\",\"address_Father\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\"}', '2.69', '{\"fullname_Mother\":\"กฤษณา\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"พยาบาล\",\"workplace_Mother\":\"โรงพยาบาล\",\"salary_Mother\":\"35000\",\"phone_Mother\":\"0944969640\",\"address_Mother\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":2,\"schoolyear\":\"กกกกกกก\",\"scholarship\":\"กกกกกกกกกกก\",\"cost\":\"กกกกกกกกก\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"},{\"id\":2,\"fullName\":\"นางสาว ปวิตรา น้อง\",\"education\":\"ม.ปลาย\",\"job\":\"นักเรียน\",\"workplace\":\"โรงเรียน\"}],\"money_Donator\":\"8000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'อ.กุลวดี', 'ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง', 1, '2001-04-04', 'prapavit.p@ku.th', 'ประภวิษณุ์ ปัทมาสวิน', '6230300583', '', 'สาขาวิชาวิศวกรรมคอมพิวเตอร์', '0811393358', 'ภาคปกติ', '3'),
(59, 5, 5, 'Profile_Essay/1_BjVMpUc.jpg', 'ID_card/2_08szRM7.jpg', 'Transcript/4_bFPcTXL.jpg', 'house_registration/3_bt1EB4t.jpg', 0, '{\"fullname_Father\":\"จิรชัย\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ธุรกิจส่วนตัว\",\"workplace_Father\":\"บ้าน\",\"salary_Father\":\"10000\",\"phone_Father\":\"0810772340\",\"address_Father\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\"}', '2.69', '{\"fullname_Mother\":\"กฤษณา\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"พยาบาล\",\"workplace_Mother\":\"โรงพยาบาล\",\"salary_Mother\":\"35000\",\"phone_Mother\":\"0944969640\",\"address_Mother\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":2,\"schoolyear\":\"กกกกกกก\",\"scholarship\":\"กกกกกกกกกกก\",\"cost\":\"กกกกกกกกก\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"},{\"id\":2,\"fullName\":\"นางสาว ปวิตรา น้อง\",\"education\":\"ม.ปลาย\",\"job\":\"นักเรียน\",\"workplace\":\"โรงเรียน\"}],\"money_Donator\":\"8000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'อ.กุลวดี', 'ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง', 1, '2001-04-04', 'prapavit.p@ku.th', 'ประภวิษณุ์ ปัทมาสวิน', '6230300583', '', 'สาขาวิชาวิศวกรรมคอมพิวเตอร์', '0811393358', 'ภาคปกติ', '3'),
(60, 5, 5, 'Profile_Essay/1_CwD71Es.jpg', 'ID_card/2_ddaXxCg.jpg', 'Transcript/4_FGE6Dxi.jpg', 'house_registration/3_WJhwOdo.jpg', 0, '{\"fullname_Father\":\"จิรชัย\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ธุรกิจส่วนตัว\",\"workplace_Father\":\"บ้าน\",\"salary_Father\":\"10000\",\"phone_Father\":\"0810772340\",\"address_Father\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\"}', '2.69', '{\"fullname_Mother\":\"กฤษณา\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"พยาบาล\",\"workplace_Mother\":\"โรงพยาบาล\",\"salary_Mother\":\"35000\",\"phone_Mother\":\"0944969640\",\"address_Mother\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":2,\"schoolyear\":\"กกกกกกก\",\"scholarship\":\"กกกกกกกกกกก\",\"cost\":\"กกกกกกกกก\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"},{\"id\":2,\"fullName\":\"นางสาว ปวิตรา น้อง\",\"education\":\"ม.ปลาย\",\"job\":\"นักเรียน\",\"workplace\":\"โรงเรียน\"}],\"money_Donator\":\"8000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'อ.กุลวดี', 'ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง', 1, '2001-04-04', 'prapavit.p@ku.th', 'ประภวิษณุ์ ปัทมาสวิน', '6230300583', '', 'สาขาวิชาวิศวกรรมคอมพิวเตอร์', '0811393358', 'ภาคปกติ', '3'),
(61, 5, 5, 'Profile_Essay/1_acLwK5w.jpg', 'ID_card/2_VIxwTo5.jpg', 'Transcript/4_HRsGvdP.jpg', 'house_registration/3_RRCwVk0.jpg', 0, '{\"fullname_Father\":\"จิรชัย\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ธุรกิจส่วนตัว\",\"workplace_Father\":\"บ้าน\",\"salary_Father\":\"10000\",\"phone_Father\":\"0810772340\",\"address_Father\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\"}', '2.69', '{\"fullname_Mother\":\"กฤษณา\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"พยาบาล\",\"workplace_Mother\":\"โรงพยาบาล\",\"salary_Mother\":\"35000\",\"phone_Mother\":\"0944969640\",\"address_Mother\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":2,\"schoolyear\":\"กกกกกกก\",\"scholarship\":\"กกกกกกกกกกก\",\"cost\":\"กกกกกกกกก\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"},{\"id\":2,\"fullName\":\"นางสาว ปวิตรา น้อง\",\"education\":\"ม.ปลาย\",\"job\":\"นักเรียน\",\"workplace\":\"โรงเรียน\"}],\"money_Donator\":\"8000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'อ.กุลวดี', 'ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง', 1, '2001-04-04', 'prapavit.p@ku.th', 'ประภวิษณุ์ ปัทมาสวิน', '6230300583', '', 'สาขาวิชาวิศวกรรมคอมพิวเตอร์', '0811393358', 'ภาคปกติ', '3'),
(62, 5, 5, 'Profile_Essay/best.jpg', 'ID_card/1_cFNL0mM.jpg', 'Transcript/3_9bxbI2o.jpg', 'house_registration/4_QS9JPZF.jpg', 0, '{\"fullname_Father\":\"จิรชัย\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ธุรกิจส่วนตัว\",\"workplace_Father\":\"บ้าน\",\"salary_Father\":\"10000\",\"phone_Father\":\"0810772340\",\"address_Father\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\"}', '2.69', '{\"fullname_Mother\":\"กฤษณา\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"พยาบาล\",\"workplace_Mother\":\"โรงพยาบาล\",\"salary_Mother\":\"35000\",\"phone_Mother\":\"0944969640\",\"address_Mother\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":2,\"schoolyear\":\"กกกกกกก\",\"scholarship\":\"กกกกกกกกกกก\",\"cost\":\"กกกกกกกกก\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"},{\"id\":2,\"fullName\":\"นางสาว ปวิตรา น้อง\",\"education\":\"ม.ปลาย\",\"job\":\"นักเรียน\",\"workplace\":\"โรงเรียน\"}],\"money_Donator\":\"8000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'อ.กุลวดี', 'ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง', 1, '2001-04-04', 'prapavit.p@ku.th', 'ประภวิษณุ์ ปัทมาสวิน', '6230300583', '', 'สาขาวิชาวิศวกรรมคอมพิวเตอร์', '0811393358', 'ภาคปกติ', '3'),
(63, 5, 5, 'Profile_Essay/best_5rBvupV.jpg', 'ID_card/1_lPFuXAO.jpg', 'Transcript/3_kbDsxbP.jpg', 'house_registration/2.jpg', 0, '{\"fullname_Father\":\"จิรชัย\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ธุรกิจส่วนตัว\",\"workplace_Father\":\"บ้าน\",\"salary_Father\":\"10000\",\"phone_Father\":\"0810772340\",\"address_Father\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\"}', '2.69', '{\"fullname_Mother\":\"กฤษณา\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"พยาบาล\",\"workplace_Mother\":\"โรงพยาบาล\",\"salary_Mother\":\"35000\",\"phone_Mother\":\"0944969640\",\"address_Mother\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":2,\"schoolyear\":\"กกกกกกก\",\"scholarship\":\"กกกกกกกกกกก\",\"cost\":\"กกกกกกกกก\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"},{\"id\":2,\"fullName\":\"นางสาว ปวิตรา น้อง\",\"education\":\"ม.ปลาย\",\"job\":\"นักเรียน\",\"workplace\":\"โรงเรียน\"}],\"money_Donator\":\"8000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'อ.กุลวดี', 'ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง', 1, '2001-04-04', 'prapavit.p@ku.th', 'ประภวิษณุ์ ปัทมาสวิน', '6230300583', '', 'T19 วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ', '0811393358', 'ภาคปกติ', '3'),
(64, 5, 5, 'Profile_Essay/1_Vvmuzpq.jpg', 'ID_card/2_dlRIwlg.jpg', 'Transcript/3_CopLjhj.jpg', 'house_registration/4_hotJAVO.jpg', 0, '{\"fullname_Father\":\"จิรชัย\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ธุรกิจส่วนตัว\",\"workplace_Father\":\"บ้าน\",\"salary_Father\":\"10000\",\"phone_Father\":\"0810772340\",\"address_Father\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\"}', '2.69', '{\"fullname_Mother\":\"กฤษณา\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"พยาบาล\",\"workplace_Mother\":\"โรงพยาบาล\",\"salary_Mother\":\"35000\",\"phone_Mother\":\"0944969640\",\"address_Mother\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":2,\"schoolyear\":\"กกกกกกก\",\"scholarship\":\"กกกกกกกกกกก\",\"cost\":\"กกกกกกกกก\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"},{\"id\":2,\"fullName\":\"นางสาว ปวิตรา น้อง\",\"education\":\"ม.ปลาย\",\"job\":\"นักเรียน\",\"workplace\":\"โรงเรียน\"}],\"money_Donator\":\"8000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'อ.กุลวดี', 'ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง', 1, '2001-04-04', 'prapavit.p@ku.th', 'ประภวิษณุ์ ปัทมาสวิน', '6230300583', '', 'T19 วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ', '0811393358', 'ภาคปกติ', '3'),
(65, 5, 5, 'Profile_Essay/1_BpmZS41.jpg', 'ID_card/2_jEyJVKD.jpg', 'Transcript/3_g7XZ1Hb.jpg', 'house_registration/4_NBFHJyB.jpg', 0, '{\"fullname_Father\":\"จิรชัย\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ธุรกิจส่วนตัว\",\"workplace_Father\":\"บ้าน\",\"salary_Father\":\"10000\",\"phone_Father\":\"0810772340\",\"address_Father\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\"}', '2.69', '{\"fullname_Mother\":\"กฤษณา\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"พยาบาล\",\"workplace_Mother\":\"โรงพยาบาล\",\"salary_Mother\":\"35000\",\"phone_Mother\":\"0944969640\",\"address_Mother\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":2,\"schoolyear\":\"กกกกกกก\",\"scholarship\":\"กกกกกกกกกกก\",\"cost\":\"กกกกกกกกก\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"},{\"id\":2,\"fullName\":\"นางสาว ปวิตรา น้อง\",\"education\":\"ม.ปลาย\",\"job\":\"นักเรียน\",\"workplace\":\"โรงเรียน\"}],\"money_Donator\":\"8000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'อ.กุลวดี', 'ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง', 1, '2001-04-04', 'prapavit.p@ku.th', 'ประภวิษณุ์ ปัทมาสวิน', '6230300583', '', 'T19 วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ', '0811393358', 'ภาคปกติ', '3'),
(66, 9, 9, 'Profile_Essay/ssaw.jpg', 'ID_card/ssaw.jpg', 'Transcript/ssaw.jpg', 'house_registration/ssaw.jpg', 0, '{\"fullname_Father\":\"\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"\",\"workplace_Father\":\"\",\"salary_Father\":\"\",\"phone_Father\":\"\",\"address_Father\":\"\"}', '4.00', '{\"fullname_Mother\":\"\",\"state_Mother\":\"\",\"job_Mother\":\"\",\"workplace_Mother\":\"\",\"salary_Mother\":\"\",\"phone_Mother\":\"\",\"address_Mother\":\"\",\"mariage_Mother\":\"\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"-\",\"scholarship\":\"-\",\"cost\":\"-\"}],\"parttime_Other\":\"\",\"takeloan_Other\":\"\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"}],\"money_Donator\":\"\",\"who_Donators\":\"\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'son', '164 ม.2', 1, '2022-03-02', 'pongsatorn.saw@ku.th', 'นายพงศธร สว่างเกล้า', '6230300621', '', 'T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์', '0879999936', 'ภาคปกติ', '3');

-- --------------------------------------------------------

--
-- Table structure for table `app_studentfilefile`
--

CREATE TABLE `app_studentfilefile` (
  `id` bigint(20) NOT NULL,
  `file` varchar(100) DEFAULT NULL,
  `file_id_id` int(11) NOT NULL,
  `fileTitle` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `app_studentfilefile`
--

INSERT INTO `app_studentfilefile` (`id`, `file`, `file_id_id`, `fileTitle`) VALUES
(116, 'file/โอมเอง_1WXZXad.jpg', 48, 'ตัวเอง'),
(117, 'file/T3.png', 49, 'บ้าน'),
(118, 'file/01_BecomeTheSoftwareEngineer_R6hIWhK.pdf', 49, 'รถ'),
(119, 'file/01_BecomeTheSoftwareEngineer_CfsYqoy.pdf', 50, 'เอกสารบัญชีไม่พร้อมเพย์'),
(120, 'file/doc-icon-png-29.jpg', 51, 'ตัวเอง'),
(121, 'file/06_Design_Patterns_1.pdf', 52, 'เอกสารบัญชีไม่พร้อมเพย์'),
(122, 'file/n2_energy_situations_Autosaved_oUFLRnO.pdf', 53, 'Word ที่ให้พรีเซนต์'),
(123, 'file/ทำความด2_yaKHaYj.jpg', 54, 'ตัวเอง'),
(124, 'file/ใบชำระคาธรรมเนยมหอพก_brOCXVy.pdf', 55, 'เอกสารบัญชีไม่พร้อมเพย์'),
(125, 'file/ใบชำระคาธรรมเนยมหอพก_cBG2tav.pdf', 56, 'Word ที่ให้พรีเซนต์'),
(126, 'file/3.jpg', 57, 'รูปถ่าย 3 นิ้ว ชุดนิสิต'),
(127, 'file/ใบชำระคาธรรมเนยมหอพก_TBSXM5r.pdf', 57, 'เอกสารเกรดตลอดการศึกษา'),
(128, 'file/ทำความด2_jRoVPT6.jpg', 58, 'หลักฐานของชั่วโมงการทำความดี'),
(129, 'file/ใบชำระคาธรรมเนยมหอพก_nxhgFn0.pdf', 59, 'บ้าน'),
(130, 'file/ทอบ_yEOQYMc.jpg', 59, 'รถ'),
(131, 'file/ทอบ_kKknzsl.jpg', 60, 'สระ'),
(132, 'file/ทำความด_8eK7pMh.jpg', 60, 'ดอกไม้'),
(133, 'file/ใบชำระคาธรรมเนยมหอพก_bouBGGm.pdf', 62, 'บ้าน'),
(134, 'file/ทอบ_YXmklEP.jpg', 63, 'บ้าน'),
(135, 'file/ใบชำระคาธรรมเนยมหอพก_mPfOqal.pdf', 63, 'รถ'),
(136, 'file/ใบชำระคาธรรมเนยมหอพก_izpoUkd.pdf', 64, 'บ้าน'),
(137, 'file/03-Conversational-RecSys.pdf', 66, 'บ้าน');

-- --------------------------------------------------------

--
-- Table structure for table `app_studentinform`
--

CREATE TABLE `app_studentinform` (
  `stdInform_id_id` int(11) NOT NULL,
  `image_Std` varchar(100) DEFAULT NULL,
  `fullName_Std` varchar(100) DEFAULT NULL,
  `birthDate_Std` varchar(100) DEFAULT NULL,
  `major_Std` varchar(100) DEFAULT NULL,
  `phone_Std` varchar(10) DEFAULT NULL,
  `GPA_Std` varchar(100) DEFAULT NULL,
  `id_Std` varchar(100) DEFAULT NULL,
  `year_Std` varchar(100) DEFAULT NULL,
  `term_Std` varchar(100) DEFAULT NULL,
  `email_Std` varchar(100) DEFAULT NULL,
  `address_Std` longtext DEFAULT NULL,
  `advisor_Std` varchar(100) DEFAULT NULL,
  `Father_Profile` longtext DEFAULT NULL,
  `Mother_Profile` longtext DEFAULT NULL,
  `Sibling_Profile` longtext DEFAULT NULL,
  `Other_Profile` longtext DEFAULT NULL,
  `available_ID` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `app_studentinform`
--

INSERT INTO `app_studentinform` (`stdInform_id_id`, `image_Std`, `fullName_Std`, `birthDate_Std`, `major_Std`, `phone_Std`, `GPA_Std`, `id_Std`, `year_Std`, `term_Std`, `email_Std`, `address_Std`, `advisor_Std`, `Father_Profile`, `Mother_Profile`, `Sibling_Profile`, `Other_Profile`, `available_ID`) VALUES
(1, 'image/โอมเอง_99MUFSN.jpg', 'ศุภพงษ์ บุญปัญญา', '2022-03-12', 'T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์', '0956321391', '4.00', '6230300923', '3', 'ภาคพิเศษ', 'zxohm2543@gmail.com', '100/901 ม10', 'ศุภพงษ์ บุญปัญญา', '{\"fullname_Father\":\"\",\"state_Father\":\"\",\"job_Father\":\"\",\"workplace_Father\":\"\",\"salary_Father\":\"\",\"phone_Father\":\"\",\"address_Father\":\"\"}', '{\"fullname_Mother\":\"\",\"state_Mother\":\"\",\"job_Mother\":\"\",\"workplace_Mother\":\"\",\"salary_Mother\":\"\",\"phone_Mother\":\"\",\"address_Mother\":\"\",\"mariage_Mother\":\"\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"}],\"money_Donator\":\"\",\"who_Donators\":\"\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"-\",\"scholarship\":\"-\",\"cost\":\"-\"}],\"parttime_Other\":\"เคย\",\"takeloan_Other\":\"\",\"job_Other\":\"\",\"salary_Other\":\"0\"}', 1),
(4, 'image/pic2_AEgB32y.jpg', 'Phunyawee Somabutra', '2022-03-16', 'สาขาวิชาวิศวกรรมคอมพิวเตอร์', '0853669252', '3.33', '6230300613', '3', 'ภาคปกติ', 'phunyawee.s@ku.th', 'Chonburi', 'ปุณยวีร โสมาบุตร', '{\"fullname_Father\":\"ปุณยวีร โสมาบุตร\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"\",\"workplace_Father\":\"\",\"salary_Father\":\"\",\"phone_Father\":\"\",\"address_Father\":\"Chonburi\"}', '{\"fullname_Mother\":\"Phunyawee Somabutra\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"\",\"workplace_Mother\":\"\",\"salary_Mother\":\"\",\"phone_Mother\":\"\",\"address_Mother\":\"\",\"mariage_Mother\":\"\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts1\":[{\"id\":1,\"fullName\":\"Phunyawee Somabutra\",\"education\":\"t66\",\"job\":\"56656\",\"workplace\":\"5675\"},{\"id\":2,\"fullName\":\"www\",\"education\":\"t66\",\"job\":\"g\",\"workplace\":\"5675\"}],\"money_Donator\":\"\",\"who_Donators\":\"\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', '{\"contacts2\":[{\"id\":1,\"schoolyear\":\"ww\",\"scholarship\":\"ww\",\"cost\":\"g\"}],\"parttime_Other\":\"\",\"takeloan_Other\":\"\",\"job_Other\":\"\",\"salary_Other\":\"\"}', 1),
(5, 'image/2_6zHrG6f.jpg', 'ประภวิษณุ์ ปัทมาสวิน', '2001-04-04', 'T19 วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ', '0811393358', '2.69', '6230300583', '3', 'ภาคปกติ', 'prapavit.p@ku.th', 'ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง', 'อ.กุลวดี', '{\"fullname_Father\":\"จิรชัย\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ธุรกิจส่วนตัว\",\"workplace_Father\":\"บ้าน\",\"salary_Father\":\"10000\",\"phone_Father\":\"0810772340\",\"address_Father\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\"}', '{\"fullname_Mother\":\"กฤษณา\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"พยาบาล\",\"workplace_Mother\":\"โรงพยาบาล\",\"salary_Mother\":\"35000\",\"phone_Mother\":\"0944969640\",\"address_Mother\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"},{\"id\":2,\"fullName\":\"นางสาว ปวิตรา น้อง\",\"education\":\"ม.ปลาย\",\"job\":\"นักเรียน\",\"workplace\":\"โรงเรียน\"}],\"money_Donator\":\"8000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', '{\"contacts2\":[{\"id\":2,\"schoolyear\":\"กกกกกกก\",\"scholarship\":\"กกกกกกกกกกก\",\"cost\":\"กกกกกกกกก\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', 1),
(6, 'image/20210110_153831.jpg', 'สพล มหาวงศ์', '2000-08-31', 'สาขาวิชาวิศวกรรมคอมพิวเตอร์', '0945432345', '4', '6230300940', '3', 'ภาคปกติ', 'sapol.m@ku.th', 'd', 'd', '{\"fullname_Father\":\"นางสาวไทย ใจร่ม\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ข้าบริวาลทั้งหลายเหล่านี้\",\"workplace_Father\":\"รร.\",\"salary_Father\":\"-51\",\"phone_Father\":\"0945432345\",\"address_Father\":\"asf fwe fawe\"}', '{\"fullname_Mother\":\"นายพลไม่บดี เดชะนุรักษ์\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"หทารชั้นต่ำ\",\"workplace_Mother\":\"มทบ.9รบ8\",\"salary_Mother\":\"-3\",\"phone_Mother\":\"0945432345\",\"address_Mother\":\"agrev\",\"mariage_Mother\":\"แยกกันอยู่\",\"mariage_Seperate_Reason\":\"รายได้ติดลบ แก้ด้วย\"}', '{\"contacts1\":[{\"id\":\"-\",\"fullName\":\"นางสาว Tanoshi Shizuoni\",\"education\":\"High School Academic\",\"job\":\"Programmer\",\"workplace\":\"workpoint\"}],\"money_Donator\":\"-2\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', '{\"contacts2\":[],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', 1),
(8, 'image/81272950_2581971802044272_3308028831226396672_n_d8Gv3f6.jpg', 'ชลทัศน์ เจริญยิ่ง', '2001-08-03', 'T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์', '0925359497', '3', '6230300222', '3', 'ภาคปกติ', 'chonlatad.c@ku.th', '44 ซอยศาลเจ้า', 'จาร', '{\"fullname_Father\":\"พ่อ\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ทหาร\",\"workplace_Father\":\"กองทัพอากาศ\",\"salary_Father\":\"103141341\",\"phone_Father\":\"0631067582\",\"address_Father\":\"333/83 ซอยสายไหม \"}', '{\"fullname_Mother\":\"เเม่\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"แม่บ้าน\",\"workplace_Mother\":\"บ้าน\",\"salary_Mother\":\"100001431\",\"phone_Mother\":\"0925359999\",\"address_Mother\":\"333/83 ซอยสายไหม\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts1\":[],\"money_Donator\":\"10000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', '{\"contacts2\":[],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', 1),
(9, 'image/พงศธร_YDIkzKa.jpg', 'นายพงศธร สว่างเกล้า', '2022-03-02', 'T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์', '0879999936', '4.00', '6230300621', '3', 'ภาคปกติ', 'pongsatorn.saw@ku.th', '164 ม.2', 'son', '{\"fullname_Father\":\"\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"\",\"workplace_Father\":\"\",\"salary_Father\":\"\",\"phone_Father\":\"\",\"address_Father\":\"\"}', '{\"fullname_Mother\":\"\",\"state_Mother\":\"\",\"job_Mother\":\"\",\"workplace_Mother\":\"\",\"salary_Mother\":\"\",\"phone_Mother\":\"\",\"address_Mother\":\"\",\"mariage_Mother\":\"\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"}],\"money_Donator\":\"\",\"who_Donators\":\"\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"-\",\"scholarship\":\"-\",\"cost\":\"-\"}],\"parttime_Other\":\"\",\"takeloan_Other\":\"\",\"job_Other\":\"\",\"salary_Other\":\"\"}', 1);

-- --------------------------------------------------------

--
-- Table structure for table `app_studentuser`
--

CREATE TABLE `app_studentuser` (
  `std_id_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `app_testforeignkey`
--

CREATE TABLE `app_testforeignkey` (
  `id` int(11) NOT NULL,
  `TestName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `app_topic`
--

CREATE TABLE `app_topic` (
  `id` bigint(20) NOT NULL,
  `fullName` longtext NOT NULL,
  `address` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `app_user_login`
--

CREATE TABLE `app_user_login` (
  `user_id` int(11) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `role` varchar(100) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `access_token` longtext DEFAULT NULL,
  `refresh_token` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `app_user_login`
--

INSERT INTO `app_user_login` (`user_id`, `fullname`, `role`, `email`, `access_token`, `refresh_token`) VALUES
(1, 'Suphapong BUNPUNYA', 'User', 'suphapong.b@ku.th', 'ZdyexeKg4zFyMTsJWUUoBfFZPsU0hI', 'XppjvnmZntAGXmEPF6MPy7sGAUosCL'),
(4, 'Phunyawee SOMABUTRA', 'User', 'phunyawee.s@ku.th', 'y2X0BD96Xiv8vZfJAMWHXWGWGYNiOg', 'i6VhRBGKstcDOJTrM99xQkZJGXbHcW'),
(5, 'Prapavit PATTAMASAWIN', 'User', 'prapavit.p@ku.th', 'anRyg6KewAEyiSIlIQTHbWk6TM3nr4', '6dihTnssHV9CKdRbiLV2Mfeu9W9ywl'),
(6, 'Sapol MAHAWONG', 'User', 'sapol.m@ku.th', 'DVd460o7PlDtBCdTW6yJsz4DMldwva', 'uUCq1cAMOuii42xSQTJYxYKjZiJrk7'),
(7, 'Khunnapat MEECHAROEN', 'User', 'khunnaphat.m@ku.th', 'rmPHptcEDOdvJ8wxcdZXupgxAqMmIu', 'qnw4JqWS7qCmH3EEiaoNovzYqZERCo'),
(8, 'Chonlatad CHAROENYING', 'User', 'chonlatad.c@ku.th', 'k54bV7GAvj47zbohWUoTF2xuZa8RoO', 'tjKQ885LwmwNAgEMYJ2DaEmupwgVEu'),
(9, 'Pongsatorn SAWANGKLAO', 'User', 'pongsatorn.saw@ku.th', 'xUrPO8hU7ydpYaaVf7zqxCJpjbNuxc', 'Tv6CYqsnTqKE2OyZNLldtn4yw03UIe'),
(10, 'Chollasit SUTHANMA', 'User', 'chollasit.su@ku.th', '0r8HSQennCn2GeQfvD8tR56OkxqwtO', 'RugEtUL4iPukDMi5NMh1Q8dMbga8o2'),
(11, 'Thiwat SUSANGIAM', 'User', 'thiwat.su@ku.th', 'HKTei9yLf9ZP2MmQI9dcMGgRBN1Tdl', 'pZIltnKikAGHHUWQnT52IHoc043tat'),
(12, 'Kitsanaphon JUIPRASERT', 'User', 'kitsanaphon.j@ku.th', 'KGtb50eEuuoLXTNhqzQYlKjc64jL8i', '8ABelq3K1hzeULLO2V4Vxw06BxUEny');

-- --------------------------------------------------------

--
-- Table structure for table `app_weightcriteriapoint`
--

CREATE TABLE `app_weightcriteriapoint` (
  `weight_id` int(11) NOT NULL,
  `criterianame` varchar(255) DEFAULT NULL,
  `message` longtext DEFAULT NULL,
  `weightpoint` int(11) DEFAULT NULL,
  `managescho_id_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `app_weightcriteriapoint`
--

INSERT INTO `app_weightcriteriapoint` (`weight_id`, `criterianame`, `message`, `weightpoint`, `managescho_id_id`) VALUES
(19, 'love dad', 'long live the', 4, 24),
(25, 'QA websiteV3', 'YouTube ได้รับอนุญาตจาก\r\nSME, Sony Music Entertainment (Japan) Inc. (ในนามของ (P)2015 Sony Music Records); UMPI, Muserk Rights Management และสมาคมจัดเก็บค่าลิขสิทธิ์เพลง 4 แห่ง', 5, 20),
(46, 'เกณฑ์ความดี', 'good', 4, 9),
(47, 'เกณฑ์ความดีสู้ๆ', '....', 4, 10),
(48, 'เกณฑ์ความพร้อมในการรับทุน', 'เช็ตคความพร้อม', 5, 9),
(49, 'เกณฑ์mind set ที่ที่ดี', 'แนวความคิดที่ดี', 3, 9),
(50, 'เกณฑ์อ่านหนังสือดีเด่น', 'อ่านหนังสือดีเด่น เน้นอ่านๆๆๆๆๆๆ', 5, 9),
(51, 'เกณฑ์ให้กำลังใจสู้ๆนะคร้าบบ', 'ให้กำลังใจ', 3, 10),
(52, 'เกณฑ์ความลำบากสู้ๆ', 'ลำบากมาก สู้มาก', 5, 10),
(53, 'เกณฑ์ใจสั่งมา', 'สั่งมากจ่ายมาก', 5, 10),
(54, 'เกณฑทุนหนา', 'หนามาก เงินเยอะ', 5, 10),
(55, 'เกณฑ์ความสามัคคี', 'สามัคคีเอาไว้ ให้ใจเข้มแข็ง', 5, 19),
(56, 'เกณฑ์ลงมือคำ', 'อย่าคิดเยอะ เปอะเปื้อนไปหมเ', 3, 19),
(57, 'เกณฑ์คิดเก่ง', 'คิดอะไรก็ไม่รู้ คิดไปหมด คิดเก่งจริงๆ', 5, 19),
(58, 'เกณฑ์ความเป็นเรา', 'เราเป็นใคร ไม่มีใครรู้ดี เท่าตัวเรา', 5, 19),
(59, 'เกณฑ์ของการ พูดที่ดี', 'พูดดีเป็นศรีแก่ปาก พูดมาก ก็พูดไปดิ๊!!!!', 3, 19),
(60, 'ความดี', 'ทำดีได้ ก็ทำไปดิ', 5, 20),
(61, 'ความชั่ว', 'สวรรค์อยู่ในอก นรกก็แค่น้ำใจ', 2, 20),
(62, 'ความเป็นกลาง', 'เดินทางสายกลาง ก็ว่าขึ้นเกาะกลางถนนตลอด', 4, 20),
(63, 'ความเอื้อเฟื้อ', 'คนเราควรมีความเอื้ออออออ ฝากลูกเมียข้าด้วย', 5, 20),
(64, 'การใช้ if else', 'เขียนโค้ด', 5, 25),
(65, 'การใช้ for loop', 'เขัยนโค้ดอีกไง', 4, 25),
(66, 'การใช้ while loop', 'ก็เขียนโค้ดนี่ไง', 3, 25),
(67, 'การใช้ function', 'ก็เขียนโค้ดอีกอะแหละ', 2, 25),
(68, 'การใช้ ความรู้', 'ก็เขียนโค้ดอีกไงอะแหละว่าไงเป็นไงเอาไง', 5, 25),
(69, 'รักแม่', 'รักแม่คร้าบบ', 5, 28),
(70, 'จงรักต่อแม่', 'ต้องรักแม่ไง', 4, 28),
(71, 'ภักดีต่อแม่', 'วัดเลยใครภักดีกับแม่', 3, 28),
(72, 'เกณฑ์ ต้นไม้', 'ต้นไมอะไร ทำไม หะ!!!!', 4, 28),
(73, 'ความต้องการทุน', 'อยากได้ปะละทุนนี้ รวยเลยนะ', 4, 28),
(75, 'ความแปลก', 'แปลกยังไงอะ ไหนบอกสิ๊', 5, 29),
(76, 'ความลื่น', 'สไลดเดอร์มันลื่นปะละ', 4, 29),
(78, 'ความยิ้มแย้ม', 'ยิ้มเลยๆ ยิ้มดิๆ ยิ้มให้กล้องไปเลย', 4, 29),
(79, 'ความหล่อ', 'หล่อจัดๆอะโครตหล่อเลย', 2, 29),
(80, 'ความจริง', 'เล่าสิความจริงอะ พูดออกมาสิ ความจริงอะ', 3, 29),
(81, 'Test1', 'Test1', 1, 31),
(82, 'Test2', 'TEst', 2, 31),
(83, 'Test3', 'testttt', 3, 31),
(84, 'Test4', 'testeras', 4, 31),
(85, 'Test5', 'test update', 5, 31),
(86, 'จริงใจ', 'ความจริงใจใจต้องงมาละ', 4, 42),
(87, 'รักจริง', 'รักได้ป่าว ให้ฉักรักแล้วได้อะไร', 3, 42),
(88, 'สินสอด', 'ไม่ต้องเยอะก็ได้ แต่ขอจนกว่าจะพอใจ', 4, 42),
(89, 'อนาคต', 'ไม่สนว่าอนาคตจะเป็นยังไง ตอนนี้ขอมีเงิน', 5, 42),
(90, 'ทายาท', 'ทายาทไม่มาก แต่ท่ายากพี่เยอะ', 5, 42),
(91, 'โดนพระบาทเหยียบ', 'ก็เจ็บดิ', 4, 44),
(92, 'หมอบกราบ', 'หมอบๆๆๆ', 5, 44),
(93, 'รับเสด็จ', 'รถติดๆๆๆๆๆ', 5, 44),
(94, 'ทรงพระเจริญ', 'ตะโกณเลย  ตะโดณแล้วดูดี', 5, 44),
(95, 'เถ้าทุรี', 'สุดท้ายกลายเป็นเถ้าท่าน', 4, 44),
(96, 'ความซาบซึ้ง', 'ซาบซึ้งจัดๆๆๆ', 4, 55),
(97, 'น้ำตาไหล', 'ไหลไปให้ถึงตีนเลยย', 4, 55),
(98, 'ความเศร้า', 'พสนิกรรงโศกเศร้าเสียใจ', 3, 55),
(99, 'โหยหวน', 'โหยหา หวนหา หวยหา หา...', 5, 55),
(100, 'เรียงความ', 'แสดงตวามซาบซึ่ง', 4, 55),
(101, 'รักพ่อ', 'รักมากก', 4, 24),
(102, 'โบกธงเหลือง', 'สะบัดแขนโบกๆๆๆๆ', 4, 24),
(103, 'เรียงความ', 'เรียงความถึงพ่อ', 4, 24),
(104, 'ลำบาก', 'เราลำบาก พ่อสบาย มันใช่หรอออ', 2, 24),
(105, 'SPY×FAMILY', 'For the agent known as \"Twilight,\" no order is too tall if it is for the sake of peace. Operating as Westalis\' master spy, Twilight works tirelessly to prevent extremists from sparking a war with neighboring country Ostania. For his latest mission, he must investigate Ostanian politician Donovan Desmond by infiltrating his son\'s school: the prestigious Eden Academy. Thus, the agent faces the most difficult task of his career: get married, have a child, and play family.\r\n\r\nTwilight, or \"Loid Forger,\" quickly adopts the unassuming orphan Anya to play the role of a six-year-old daughter and prospective Eden Academy student. For a wife, he comes across Yor Briar, an absent-minded office worker who needs a pretend partner of her own to impress her friends. However, Loid is not the only one with a hidden nature. Yor moonlights as the lethal assassin \"Thorn Princess.\" For her, marrying Loid creates the perfect cover. Meanwhile, Anya is not the ordinary girl she appears to be; she is an esper, the product of secret experiments that allow her to read minds. Although she uncovers their true identities, Anya is thrilled that her new parents are cool secret agents! She would never tell them, of course. That would ruin the fun.\r\n\r\nUnder the guise of \"The Forgers,\" the spy, the assassin, and the esper must act as a family while carrying out their own agendas. Although these liars and misfits are only playing parts, they soon find that family is about far more than blood relations.', 5, 54),
(106, 'where we are least alone', 'Due to a sudden accident, twins Haruka and Sora Kasugano have lost both of their parents. Starting their lives anew, they return to their childhood home—living once again in the rural, quaint town like they did four years ago.\r\n\r\nHowever, revisiting such a nostalgic place also means recalling all the memories the two of them made together, be it those that gave them blissful joy or those that made them suffer painful sorrow. Meeting both old acquaintances and new companions alike, the story of Haruka and Sora only gets more convoluted as their lives are slowly influenced by different acts of love, friendship, envy—and perhaps even lust.', 3, 26),
(109, 'ความซาบซึ้ง', 'เน้นซาบซึ้ง', NULL, 37);

-- --------------------------------------------------------

--
-- Table structure for table `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add academic year', 7, 'add_academicyear'),
(26, 'Can change academic year', 7, 'change_academicyear'),
(27, 'Can delete academic year', 7, 'delete_academicyear'),
(28, 'Can view academic year', 7, 'view_academicyear'),
(29, 'Can add managescholarship', 8, 'add_managescholarship'),
(30, 'Can change managescholarship', 8, 'change_managescholarship'),
(31, 'Can delete managescholarship', 8, 'delete_managescholarship'),
(32, 'Can view managescholarship', 8, 'view_managescholarship'),
(33, 'Can add place', 9, 'add_place'),
(34, 'Can change place', 9, 'change_place'),
(35, 'Can delete place', 9, 'delete_place'),
(36, 'Can view place', 9, 'view_place'),
(37, 'Can add schedule', 10, 'add_schedule'),
(38, 'Can change schedule', 10, 'change_schedule'),
(39, 'Can delete schedule', 10, 'delete_schedule'),
(40, 'Can view schedule', 10, 'view_schedule'),
(41, 'Can add source of scholarship', 11, 'add_sourceofscholarship'),
(42, 'Can change source of scholarship', 11, 'change_sourceofscholarship'),
(43, 'Can delete source of scholarship', 11, 'delete_sourceofscholarship'),
(44, 'Can view source of scholarship', 11, 'view_sourceofscholarship'),
(45, 'Can add test foreign key', 12, 'add_testforeignkey'),
(46, 'Can change test foreign key', 12, 'change_testforeignkey'),
(47, 'Can delete test foreign key', 12, 'delete_testforeignkey'),
(48, 'Can view test foreign key', 12, 'view_testforeignkey'),
(49, 'Can add topic', 13, 'add_topic'),
(50, 'Can change topic', 13, 'change_topic'),
(51, 'Can delete topic', 13, 'delete_topic'),
(52, 'Can view topic', 13, 'view_topic'),
(53, 'Can add user_ login', 14, 'add_user_login'),
(54, 'Can change user_ login', 14, 'change_user_login'),
(55, 'Can delete user_ login', 14, 'delete_user_login'),
(56, 'Can view user_ login', 14, 'view_user_login'),
(57, 'Can add admin user', 15, 'add_adminuser'),
(58, 'Can change admin user', 15, 'change_adminuser'),
(59, 'Can delete admin user', 15, 'delete_adminuser'),
(60, 'Can view admin user', 15, 'view_adminuser'),
(61, 'Can add restaurant', 16, 'add_restaurant'),
(62, 'Can change restaurant', 16, 'change_restaurant'),
(63, 'Can delete restaurant', 16, 'delete_restaurant'),
(64, 'Can view restaurant', 16, 'view_restaurant'),
(65, 'Can add student inform', 17, 'add_studentinform'),
(66, 'Can change student inform', 17, 'change_studentinform'),
(67, 'Can delete student inform', 17, 'delete_studentinform'),
(68, 'Can view student inform', 17, 'view_studentinform'),
(69, 'Can add student user', 18, 'add_studentuser'),
(70, 'Can change student user', 18, 'change_studentuser'),
(71, 'Can delete student user', 18, 'delete_studentuser'),
(72, 'Can view student user', 18, 'view_studentuser'),
(73, 'Can add register scholar ship', 19, 'add_registerscholarship'),
(74, 'Can change register scholar ship', 19, 'change_registerscholarship'),
(75, 'Can delete register scholar ship', 19, 'delete_registerscholarship'),
(76, 'Can view register scholar ship', 19, 'view_registerscholarship'),
(77, 'Can add hero', 20, 'add_hero'),
(78, 'Can change hero', 20, 'change_hero'),
(79, 'Can delete hero', 20, 'delete_hero'),
(80, 'Can view hero', 20, 'view_hero'),
(81, 'Can add association', 21, 'add_association'),
(82, 'Can change association', 21, 'change_association'),
(83, 'Can delete association', 21, 'delete_association'),
(84, 'Can view association', 21, 'view_association'),
(85, 'Can add code', 22, 'add_code'),
(86, 'Can change code', 22, 'change_code'),
(87, 'Can delete code', 22, 'delete_code'),
(88, 'Can view code', 22, 'view_code'),
(89, 'Can add nonce', 23, 'add_nonce'),
(90, 'Can change nonce', 23, 'change_nonce'),
(91, 'Can delete nonce', 23, 'delete_nonce'),
(92, 'Can view nonce', 23, 'view_nonce'),
(93, 'Can add user social auth', 24, 'add_usersocialauth'),
(94, 'Can change user social auth', 24, 'change_usersocialauth'),
(95, 'Can delete user social auth', 24, 'delete_usersocialauth'),
(96, 'Can view user social auth', 24, 'view_usersocialauth'),
(97, 'Can add partial', 25, 'add_partial'),
(98, 'Can change partial', 25, 'change_partial'),
(99, 'Can delete partial', 25, 'delete_partial'),
(100, 'Can view partial', 25, 'view_partial'),
(101, 'Can add application', 26, 'add_application'),
(102, 'Can change application', 26, 'change_application'),
(103, 'Can delete application', 26, 'delete_application'),
(104, 'Can view application', 26, 'view_application'),
(105, 'Can add access token', 27, 'add_accesstoken'),
(106, 'Can change access token', 27, 'change_accesstoken'),
(107, 'Can delete access token', 27, 'delete_accesstoken'),
(108, 'Can view access token', 27, 'view_accesstoken'),
(109, 'Can add grant', 28, 'add_grant'),
(110, 'Can change grant', 28, 'change_grant'),
(111, 'Can delete grant', 28, 'delete_grant'),
(112, 'Can view grant', 28, 'view_grant'),
(113, 'Can add refresh token', 29, 'add_refreshtoken'),
(114, 'Can change refresh token', 29, 'change_refreshtoken'),
(115, 'Can delete refresh token', 29, 'delete_refreshtoken'),
(116, 'Can view refresh token', 29, 'view_refreshtoken'),
(117, 'Can add id token', 30, 'add_idtoken'),
(118, 'Can change id token', 30, 'change_idtoken'),
(119, 'Can delete id token', 30, 'delete_idtoken'),
(120, 'Can view id token', 30, 'view_idtoken'),
(121, 'Can add student file', 31, 'add_studentfile'),
(122, 'Can change student file', 31, 'change_studentfile'),
(123, 'Can delete student file', 31, 'delete_studentfile'),
(124, 'Can view student file', 31, 'view_studentfile'),
(125, 'Can add student file file', 32, 'add_studentfilefile'),
(126, 'Can change student file file', 32, 'change_studentfilefile'),
(127, 'Can delete student file file', 32, 'delete_studentfilefile'),
(128, 'Can view student file file', 32, 'view_studentfilefile'),
(129, 'Can add weightcriteriapoint', 33, 'add_weightcriteriapoint'),
(130, 'Can change weightcriteriapoint', 33, 'change_weightcriteriapoint'),
(131, 'Can delete weightcriteriapoint', 33, 'delete_weightcriteriapoint'),
(132, 'Can view weightcriteriapoint', 33, 'view_weightcriteriapoint'),
(133, 'Can add commiteevote', 34, 'add_commiteevote'),
(134, 'Can change commiteevote', 34, 'change_commiteevote'),
(135, 'Can delete commiteevote', 34, 'delete_commiteevote'),
(136, 'Can view commiteevote', 34, 'view_commiteevote');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auth_user`
--

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$260000$kdPFjjvfjrDqEzg3YoHBrl$zDhGgOWj8X/cu9Yegr2hUaSXSpjIuxxJ5iWqqgnvpkw=', '2022-03-09 14:32:05.857562', 1, 'Teru50', '', '', 'sapol.m@ku.th', 1, 1, '2022-03-04 13:27:21.469636'),
(2, '!f1rMhglAJf8a6QL445pdkzQebixkMsUTZcEjfY5Z', NULL, 0, 'sapol.m', 'Sapol', 'MAHAWONG', 'sapol.m@ku.th', 0, 1, '2022-03-04 13:32:38.874535'),
(3, '!q5FJQGFWHKGnLvnIKLGOuNKTqHulomaP6Q2MFIv4', NULL, 0, 'suphapong.b', 'Suphapong', 'BUNPUNYA', 'suphapong.b@ku.th', 0, 1, '2022-03-05 14:42:42.368180'),
(4, '!TKYaDTc3JEaQs4RoFB8OfZPwZPryFL9hAnYtmrKo', NULL, 0, 'ppmahawong', 'Sapol', 'Mahawong', 'ppmahawong@gmail.com', 0, 1, '2022-03-05 14:56:06.281934'),
(5, '!IEVscPgH9jT73L4ytS2UC5fJrbLwbyIlrC2t49VU', NULL, 0, 'phunyawee.s', 'Phunyawee', 'SOMABUTRA', 'phunyawee.s@ku.th', 0, 1, '2022-03-07 10:58:21.905820'),
(6, '!MCNCyh3vTvGtHyditlKbdrqrb4EAFVKEKpPMn9na', NULL, 0, 'prapavit.p', 'Prapavit', 'PATTAMASAWIN', 'prapavit.p@ku.th', 0, 1, '2022-03-07 11:16:04.659818'),
(7, '!MJnLOYrByTI9524UvVlEyJOlz8NeQtzYI43qz7FO', NULL, 0, 'khunnaphat.m', 'Khunnapat', 'MEECHAROEN', 'khunnaphat.m@ku.th', 0, 1, '2022-03-07 17:17:42.791721'),
(8, '!6zuFppLAzMp6nVHpYNaDdBYX0xwv51U70Oyxbpv7', NULL, 0, 'zxohm2543', 'ศุภพงษ์', 'บุญปัญญา', 'zxohm2543@gmail.com', 0, 1, '2022-03-10 10:23:46.090566'),
(9, '!p2NWk2EudPFwCHA7Jb2zIDQfFkya45LR4ZGhjX18', NULL, 0, 'goodnessboy79', 'Body', 'Call', 'goodnessboy79@gmail.com', 0, 1, '2022-03-18 07:49:59.228881'),
(10, '!KgPDpaTRxCWqfFO4my8BDY2AeJ1HN9vmJ9ntnVl2', NULL, 0, 'smtpnetpro', 'NetPro', 'SMTP', 'smtpnetpro@gmail.com', 0, 1, '2022-03-18 08:37:14.498077'),
(11, '!YlwwqqXI0qfWQhfG7zlVyZ2NTG4DIYnlgF3wuTSm', NULL, 0, 'chonlatad.c', 'Chonlatad', 'CHAROENYING', 'chonlatad.c@ku.th', 0, 1, '2022-03-18 09:17:16.184588'),
(12, '!qi6zK0kEFcxD1kuqT7qGPHfV7JF5HTH34UTGdj8K', NULL, 0, 'pongsatorn.saw', 'Pongsatorn', 'SAWANGKLAO', 'pongsatorn.saw@ku.th', 0, 1, '2022-03-18 09:17:16.626340'),
(13, '!Nr4DBEzM3nJ4UN3v4ymrRX50sRdbUb4t0ZdSC31E', NULL, 0, 'chollasit.su', 'Chollasit', 'SUTHANMA', 'chollasit.su@ku.th', 0, 1, '2022-03-18 14:13:39.646209'),
(14, '!tAA2gIk7dIrWRGyP8DbHsn4QUNUo5rrncy17jzR9', NULL, 0, 'thiwat.su', 'Thiwat', 'SUSANGIAM', 'thiwat.su@ku.th', 0, 1, '2022-03-18 14:28:43.131177'),
(15, '!z1G9SDDuA9ZMOekPy28LXxJjW91OIHRjKfJJqYrl', NULL, 0, 'onezeromay', 'Kitsanaphon', 'Juiprasert', 'onezeromay@gmail.com', 0, 1, '2022-03-18 15:02:23.995654'),
(16, '!POrh7z2uOidRLBbzg10nD2aAspmHEjZNNeGL8cJi', NULL, 0, 'kitsanaphon.j', 'Kitsanaphon', 'JUIPRASERT', 'kitsanaphon.j@ku.th', 0, 1, '2022-03-18 15:03:43.653541'),
(17, '!yhE60jPmdreP17q3YmVPzQcJHyG0ysJzEFFoDRba', NULL, 0, 'phunyaweesomabutra2544', 'Master', 'M', 'phunyaweesomabutra2544@gmail.com', 0, 1, '2022-03-26 14:21:59.058120');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_admin_log`
--

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(1, '2022-03-04 13:28:26.850197', '1', 'xGM9uIAX7C3aNCu6poiGQY9VxmD2qnGCyyYeoAHv', 1, '[{\"added\": {}}]', 26, 1);

-- --------------------------------------------------------

--
-- Table structure for table `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(7, 'app', 'academicyear'),
(15, 'app', 'adminuser'),
(34, 'app', 'commiteevote'),
(20, 'app', 'hero'),
(8, 'app', 'managescholarship'),
(9, 'app', 'place'),
(19, 'app', 'registerscholarship'),
(16, 'app', 'restaurant'),
(10, 'app', 'schedule'),
(11, 'app', 'sourceofscholarship'),
(31, 'app', 'studentfile'),
(32, 'app', 'studentfilefile'),
(17, 'app', 'studentinform'),
(18, 'app', 'studentuser'),
(12, 'app', 'testforeignkey'),
(13, 'app', 'topic'),
(14, 'app', 'user_login'),
(33, 'app', 'weightcriteriapoint'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(5, 'contenttypes', 'contenttype'),
(27, 'oauth2_provider', 'accesstoken'),
(26, 'oauth2_provider', 'application'),
(28, 'oauth2_provider', 'grant'),
(30, 'oauth2_provider', 'idtoken'),
(29, 'oauth2_provider', 'refreshtoken'),
(6, 'sessions', 'session'),
(21, 'social_django', 'association'),
(22, 'social_django', 'code'),
(23, 'social_django', 'nonce'),
(25, 'social_django', 'partial'),
(24, 'social_django', 'usersocialauth');

-- --------------------------------------------------------

--
-- Table structure for table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2022-03-04 11:12:55.803048'),
(2, 'auth', '0001_initial', '2022-03-04 11:12:56.149784'),
(3, 'admin', '0001_initial', '2022-03-04 11:12:56.236623'),
(4, 'admin', '0002_logentry_remove_auto_add', '2022-03-04 11:12:56.244603'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2022-03-04 11:12:56.252582'),
(6, 'app', '0001_initial', '2022-03-04 11:12:56.779187'),
(7, 'app', '0002_rename_id_studentinform_id_id', '2022-03-04 11:12:56.845686'),
(8, 'contenttypes', '0002_remove_content_type_name', '2022-03-04 11:12:56.897544'),
(9, 'auth', '0002_alter_permission_name_max_length', '2022-03-04 11:12:56.936431'),
(10, 'auth', '0003_alter_user_email_max_length', '2022-03-04 11:12:56.953387'),
(11, 'auth', '0004_alter_user_username_opts', '2022-03-04 11:12:56.961365'),
(12, 'auth', '0005_alter_user_last_login_null', '2022-03-04 11:12:56.992283'),
(13, 'auth', '0006_require_contenttypes_0002', '2022-03-04 11:12:56.995275'),
(14, 'auth', '0007_alter_validators_add_error_messages', '2022-03-04 11:12:57.003281'),
(15, 'auth', '0008_alter_user_username_max_length', '2022-03-04 11:12:57.019239'),
(16, 'auth', '0009_alter_user_last_name_max_length', '2022-03-04 11:12:57.036194'),
(17, 'auth', '0010_alter_group_name_max_length', '2022-03-04 11:12:57.052152'),
(18, 'auth', '0011_update_proxy_permissions', '2022-03-04 11:12:57.066113'),
(19, 'auth', '0012_alter_user_first_name_max_length', '2022-03-04 11:12:57.081074'),
(20, 'oauth2_provider', '0001_initial', '2022-03-04 11:12:57.537357'),
(21, 'oauth2_provider', '0002_auto_20190406_1805', '2022-03-04 11:12:57.585230'),
(22, 'oauth2_provider', '0003_auto_20201211_1314', '2022-03-04 11:12:57.655094'),
(23, 'oauth2_provider', '0004_auto_20200902_2022', '2022-03-04 11:12:57.865777'),
(24, 'oauth2_provider', '0005_auto_20211222_2352', '2022-03-04 11:12:57.919634'),
(25, 'sessions', '0001_initial', '2022-03-04 11:12:57.950550'),
(26, 'default', '0001_initial', '2022-03-04 11:12:58.106349'),
(27, 'social_auth', '0001_initial', '2022-03-04 11:12:58.109341'),
(28, 'default', '0002_add_related_name', '2022-03-04 11:12:58.122408'),
(29, 'social_auth', '0002_add_related_name', '2022-03-04 11:12:58.125401'),
(30, 'default', '0003_alter_email_max_length', '2022-03-04 11:12:58.139363'),
(31, 'social_auth', '0003_alter_email_max_length', '2022-03-04 11:12:58.142355'),
(32, 'default', '0004_auto_20160423_0400', '2022-03-04 11:12:58.155320'),
(33, 'social_auth', '0004_auto_20160423_0400', '2022-03-04 11:12:58.158330'),
(34, 'social_auth', '0005_auto_20160727_2333', '2022-03-04 11:12:58.175285'),
(35, 'social_django', '0006_partial', '2022-03-04 11:12:58.209252'),
(36, 'social_django', '0007_code_timestamp', '2022-03-04 11:12:58.236215'),
(37, 'social_django', '0008_partial_timestamp', '2022-03-04 11:12:58.262146'),
(38, 'social_django', '0009_auto_20191118_0520', '2022-03-04 11:12:58.313010'),
(39, 'social_django', '0010_uid_db_index', '2022-03-04 11:12:58.332956'),
(40, 'social_django', '0002_add_related_name', '2022-03-04 11:12:58.337944'),
(41, 'social_django', '0003_alter_email_max_length', '2022-03-04 11:12:58.340935'),
(42, 'social_django', '0005_auto_20160727_2333', '2022-03-04 11:12:58.343927'),
(43, 'social_django', '0001_initial', '2022-03-04 11:12:58.346919'),
(44, 'social_django', '0004_auto_20160423_0400', '2022-03-04 11:12:58.349938'),
(45, 'app', '0003_rename_id_id_studentinform_id', '2022-03-04 11:13:41.070513'),
(46, 'app', '0004_auto_20220304_1836', '2022-03-04 11:36:24.404556'),
(47, 'app', '0001_kuy', '2022-03-04 15:18:00.539694'),
(48, 'app', '0002_KUY2', '2022-03-05 14:31:11.556519'),
(49, 'app', '0003_kuy2', '2022-03-05 15:33:01.106359'),
(50, 'app', '0004_kuy2', '2022-03-05 16:34:07.795266'),
(51, 'app', '0005_alter_studentfile_stdinform_id', '2022-03-07 13:23:33.467320'),
(52, 'app', '0006_kuy2', '2022-03-07 17:24:28.031745'),
(53, 'app', '0007_kuy2', '2022-03-09 13:41:58.292065'),
(54, 'app', '0008_kuy2', '2022-03-09 13:44:52.875689'),
(55, 'app', '0009_kuy2', '2022-03-09 13:50:15.132941'),
(56, 'app', '0010_kuy2', '2022-03-09 14:19:11.419652'),
(57, 'app', '0011_kuy2', '2022-03-09 14:49:32.137279'),
(58, 'app', '0012_kuy2', '2022-03-19 18:08:53.394863'),
(59, 'app', '0013_kuy2', '2022-03-24 15:41:00.075100'),
(60, 'app', '0014_kuy2', '2022-03-24 16:01:24.462231'),
(61, 'app', '0015_kuy2', '2022-03-24 16:02:26.990355'),
(62, 'app', '0016_kuy2', '2022-03-25 13:30:26.140815'),
(63, 'app', '0017_kuy2', '2022-03-29 08:28:06.318496'),
(64, 'app', '0018_kuy2', '2022-03-31 16:25:23.002742'),
(65, 'app', '0019_rename_point_weightcriteriapoint_weightpoint', '2022-04-01 17:13:57.631710');

-- --------------------------------------------------------

--
-- Table structure for table `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('iguh40ybcqwfz6ua2jvt4uud2dqsknnw', '.eJxVjEEOwiAQRe_C2pAZCBRcuvcMZIBBqgaS0q6Md9cmXej2v_f-SwTa1hq2wUuYszgLFKffLVJ6cNtBvlO7dZl6W5c5yl2RBx3y2jM_L4f7d1Bp1G8NSNEhFyiosbBNk02uQFbKGfAxas_FKFCZADOb4pLCaPVEYI1Fb8T7A-epN48:1nRxMD:J2pFbqh5z9noicu_jL-r_Spd7ktTnquJKaXAXd11bi4', '2022-03-23 14:32:05.860554'),
('uoemloyweoqmze9ji9j1ob9l5zl7fobm', '.eJxVjEEOwiAQRe_C2pAZCBRcuvcMZIBBqgaS0q6Md9cmXej2v_f-SwTa1hq2wUuYszgLFKffLVJ6cNtBvlO7dZl6W5c5yl2RBx3y2jM_L4f7d1Bp1G8NSNEhFyiosbBNk02uQFbKGfAxas_FKFCZADOb4pLCaPVEYI1Fb8T7A-epN48:1nQ7yM:RyTvWSHmV7pds9qlhMP6JjXczbVNgsN4nOZghVapD-Y', '2022-03-18 13:27:54.924310');

-- --------------------------------------------------------

--
-- Table structure for table `oauth2_provider_accesstoken`
--

CREATE TABLE `oauth2_provider_accesstoken` (
  `id` bigint(20) NOT NULL,
  `token` varchar(255) NOT NULL,
  `expires` datetime(6) NOT NULL,
  `scope` longtext NOT NULL,
  `application_id` bigint(20) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created` datetime(6) NOT NULL,
  `updated` datetime(6) NOT NULL,
  `source_refresh_token_id` bigint(20) DEFAULT NULL,
  `id_token_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `oauth2_provider_accesstoken`
--

INSERT INTO `oauth2_provider_accesstoken` (`id`, `token`, `expires`, `scope`, `application_id`, `user_id`, `created`, `updated`, `source_refresh_token_id`, `id_token_id`) VALUES
(1, 'k6UEojNhvJKfBULGJVYX5zHyD9Y9o0', '2022-03-04 23:32:39.033983', 'read write', 1, 2, '2022-03-04 13:32:39.033983', '2022-03-04 13:32:39.033983', NULL, NULL),
(2, 'mdKFJlFLR8v6iIg9wBhbW3dKhHxT6s', '2022-03-06 00:42:42.536281', 'read write', 1, 3, '2022-03-05 14:42:42.537278', '2022-03-05 14:42:42.537278', NULL, NULL),
(3, 'FobNf3VhDqKdFB56udexHXcxMnIq8i', '2022-03-06 00:56:06.456494', 'read write', 1, 4, '2022-03-05 14:56:06.456494', '2022-03-05 14:56:06.456494', NULL, NULL),
(4, 'BLGg7BE9UiReUihYbdtNpItukxuEWu', '2022-03-06 00:56:31.023404', 'read write', 1, 2, '2022-03-05 14:56:31.023404', '2022-03-05 14:56:31.023404', NULL, NULL),
(5, '6GEKfUcpWNIYvm7ZBaqwvxSck99koP', '2022-03-07 20:38:05.661293', 'read write', 1, 3, '2022-03-07 10:38:05.661293', '2022-03-07 10:38:05.661293', NULL, NULL),
(6, 'c0YwDGXdUZiU65FtW7dArpzdgLnX0W', '2022-03-07 20:58:22.066331', 'read write', 1, 5, '2022-03-07 10:58:22.066331', '2022-03-07 10:58:22.066331', NULL, NULL),
(7, 'q7ZHQsaeuA8dygEsmQX3ciVw0562qh', '2022-03-07 21:01:09.488400', 'read write', 1, 2, '2022-03-07 11:01:09.488400', '2022-03-07 11:01:09.488400', NULL, NULL),
(8, 'ITdZQcEQEDBq0gEcbcmeVNgnw3kfCT', '2022-03-07 21:16:04.821916', 'read write', 1, 6, '2022-03-07 11:16:04.821916', '2022-03-07 11:16:04.821916', NULL, NULL),
(9, '8VJZducttAUPp4vGIHw975yUFgFKaC', '2022-03-08 03:17:42.954176', 'read write', 1, 7, '2022-03-07 17:17:42.955173', '2022-03-07 17:17:42.955173', NULL, NULL),
(10, '5V0mSGnLU3pkxeM6kGHB1Qg8waUgzx', '2022-03-09 01:03:59.290096', 'read write', 1, 4, '2022-03-08 15:03:59.290096', '2022-03-08 15:03:59.290096', NULL, NULL),
(11, 'beLhxoEhMJyjroMwkOzZdPoCgayIGW', '2022-03-09 01:04:21.928003', 'read write', 1, 2, '2022-03-08 15:04:21.928003', '2022-03-08 15:04:21.928003', NULL, NULL),
(12, 'A3XAL6aN0qqh4ftNVJkum2dCcOi1FN', '2022-03-09 01:07:26.729408', 'read write', 1, 6, '2022-03-08 15:07:26.730405', '2022-03-08 15:07:26.730405', NULL, NULL),
(13, 'FGYb5DDBa1br5h9gNCjzAwBANGyejV', '2022-03-09 19:51:13.048015', 'read write', 1, 2, '2022-03-09 09:51:13.049013', '2022-03-09 09:51:13.049013', NULL, NULL),
(14, 'i5KTByGzk331ThIussmXjTXltJflRs', '2022-03-10 02:10:03.283545', 'read write', 1, 3, '2022-03-09 16:10:03.283545', '2022-03-09 16:10:03.283545', NULL, NULL),
(15, 'Y9MLLQvQBO1SoNfXKmPQgNOoG8WZlM', '2022-03-10 18:05:43.122807', 'read write', 1, 3, '2022-03-10 08:05:43.123805', '2022-03-10 08:05:43.123805', NULL, NULL),
(16, 'ZU6UTliviN97EaJP3Dk15IIZqi6E1N', '2022-03-10 20:23:46.250859', 'read write', 1, 8, '2022-03-10 10:23:46.251856', '2022-03-10 10:23:46.251856', NULL, NULL),
(17, 'y6FCpq6uskSvPlXu8xoJ0qqp2AEGiu', '2022-03-11 00:06:45.873238', 'read write', 1, 2, '2022-03-10 14:06:45.873238', '2022-03-10 14:06:45.873238', NULL, NULL),
(18, 'kYenpjivbYe51EFpYD6jbfOAT5LIAs', '2022-03-11 17:57:48.494490', 'read write', 1, 4, '2022-03-11 07:57:48.495488', '2022-03-11 07:57:48.495488', NULL, NULL),
(19, 'XnIxNaEtFJW83uJZxlPNSKUx4oUYf6', '2022-03-18 17:25:02.460854', 'read write', 1, 4, '2022-03-18 07:25:02.461851', '2022-03-18 07:25:02.461851', NULL, NULL),
(20, 'xdkYGrAaHuEcWMMO2qMp8xMMbfdPMN', '2022-03-18 17:25:16.812863', 'read write', 1, 2, '2022-03-18 07:25:16.813861', '2022-03-18 07:25:16.813861', NULL, NULL),
(21, '2VTyOXLDQR8XGWgUhTgxEtMy0ATZlA', '2022-03-18 17:42:04.445685', 'read write', 1, 3, '2022-03-18 07:42:04.445685', '2022-03-18 07:42:04.445685', NULL, NULL),
(22, 'zjKXxi2BI2WFMwc8Uch98l1rsMk6xE', '2022-03-18 17:49:59.547280', 'read write', 1, 9, '2022-03-18 07:49:59.547280', '2022-03-18 07:49:59.547280', NULL, NULL),
(23, 'hFJKUlAewmxkFZ9Ii4MRfdcjzA10oR', '2022-03-18 17:50:02.305379', 'read write', 1, 6, '2022-03-18 07:50:02.306375', '2022-03-18 07:50:02.306375', NULL, NULL),
(24, 'TOcHVto7fGUuk1MFsOvHKntm8z1sVT', '2022-03-18 18:37:14.676595', 'read write', 1, 10, '2022-03-18 08:37:14.677593', '2022-03-18 08:37:14.677593', NULL, NULL),
(25, 'GWZ0h0qth4pzufBoS0RnjVulNNHzD3', '2022-03-18 19:17:16.431362', 'read write', 1, 11, '2022-03-18 09:17:16.432359', '2022-03-18 09:17:16.432359', NULL, NULL),
(26, 'cCah73z0nSJMhVvWLmfpCV2agpfiJd', '2022-03-18 19:17:16.798316', 'read write', 1, 12, '2022-03-18 09:17:16.798316', '2022-03-18 09:17:16.798316', NULL, NULL),
(27, 'Mp5zZb0XmUcxMK0rHMVFC2mcXlfI8r', '2022-03-18 19:58:57.851413', 'read write', 1, 5, '2022-03-18 09:58:57.851413', '2022-03-18 09:58:57.851413', NULL, NULL),
(28, 'BSFMbIZmMNckCEEBHdLdFFIR7UXpjv', '2022-03-19 00:13:39.941068', 'read write', 1, 13, '2022-03-18 14:13:39.941068', '2022-03-18 14:13:39.941068', NULL, NULL),
(29, 'vcEWOwVJtyOYrgQaxvVag80BUm7gkk', '2022-03-19 00:28:43.284626', 'read write', 1, 14, '2022-03-18 14:28:43.285624', '2022-03-18 14:28:43.285624', NULL, NULL),
(30, 'PK3CrD1gsXtDbH09PcX0VawdYe92mH', '2022-03-19 01:02:24.263448', 'read write', 1, 15, '2022-03-18 15:02:24.264447', '2022-03-18 15:02:24.264447', NULL, NULL),
(31, 'mlvEuPzgtfUaknRcv9wpiDj4MeHxMh', '2022-03-19 01:03:44.068696', 'read write', 1, 16, '2022-03-18 15:03:44.068696', '2022-03-18 15:03:44.068696', NULL, NULL),
(32, 'BLJxu06CpVnHkz0KcyKCtOAnZ0v452', '2022-03-19 04:44:40.090224', 'read write', 1, 6, '2022-03-18 18:44:40.090224', '2022-03-18 18:44:40.090224', NULL, NULL),
(33, 'CD9F1FpBD6MAIO4S6TAuNTzXoAtctO', '2022-03-19 18:45:22.715316', 'read write', 1, 2, '2022-03-19 08:45:22.716314', '2022-03-19 08:45:22.716314', NULL, NULL),
(34, 'do1cymSqKfQcXHLua2atApvahjNOUr', '2022-03-19 18:51:49.743979', 'read write', 1, 12, '2022-03-19 08:51:49.743979', '2022-03-19 08:51:49.743979', NULL, NULL),
(35, 'Ubr5BjjA20vrVXontOAlK1CQESZ4iT', '2022-03-19 19:16:32.198434', 'read write', 1, 6, '2022-03-19 09:16:32.199432', '2022-03-19 09:16:32.199432', NULL, NULL),
(36, 'og35q8aqiuKmpxdRv2OkMBsirPr4aX', '2022-03-19 19:38:07.346021', 'read write', 1, 11, '2022-03-19 09:38:07.346021', '2022-03-19 09:38:07.346021', NULL, NULL),
(37, 'NDN1cwH7mO2w8E1mHx1h8wb0bpb2c9', '2022-03-19 19:40:38.813539', 'read write', 1, 5, '2022-03-19 09:40:38.814536', '2022-03-19 09:40:38.814536', NULL, NULL),
(38, 'EhzGpK9lNiNIV623Ta61RacXcKvh2t', '2022-03-19 21:03:55.112599', 'read write', 1, 3, '2022-03-19 11:03:55.112599', '2022-03-19 11:03:55.113597', NULL, NULL),
(39, 'Pccf83sjBU9RmCeGxMN5IkoE64f03M', '2022-03-24 19:20:31.404436', 'read write', 1, 4, '2022-03-24 09:20:31.404436', '2022-03-24 09:20:31.404436', NULL, NULL),
(40, 'cfZsCoXAtV6V8bBpJs9fzLS4pXuK5J', '2022-03-24 19:21:59.016878', 'read write', 1, 2, '2022-03-24 09:21:59.016878', '2022-03-24 09:21:59.016878', NULL, NULL),
(41, 'SnDYl6BEZzwRyH4maXWprTFJ4qhWcN', '2022-03-24 19:49:50.407751', 'read write', 1, 3, '2022-03-24 09:49:50.408748', '2022-03-24 09:49:50.408748', NULL, NULL),
(42, 'jdPe9QmAoLEd2JUOC6XR3qyA0gVSuf', '2022-03-24 19:50:52.923638', 'read write', 1, 5, '2022-03-24 09:50:52.924636', '2022-03-24 09:50:52.924636', NULL, NULL),
(43, 'tYKJr856vfljVPQn837Sps2nFq76zA', '2022-03-25 00:40:36.958116', 'read write', 1, 6, '2022-03-24 14:40:36.958116', '2022-03-24 14:40:36.958116', NULL, NULL),
(44, 'wU6tLU1IWCBU53ZjnPpaaciNEFHhBI', '2022-03-25 18:14:27.893146', 'read write', 1, 2, '2022-03-25 08:14:27.894145', '2022-03-25 08:14:27.894145', NULL, NULL),
(45, 'D0Bi5d2IGmrkKxm2LmR38gMGPRtNv3', '2022-03-25 19:24:04.477372', 'read write', 1, 12, '2022-03-25 09:24:04.477372', '2022-03-25 09:24:04.477372', NULL, NULL),
(46, 'QlYyYdD5vf9A2DD7KEgpab0U2jjnON', '2022-03-25 19:25:46.801368', 'read write', 1, 5, '2022-03-25 09:25:46.802365', '2022-03-25 09:25:46.802365', NULL, NULL),
(47, 'TKwebAc0ihs9QLKFIZTBmRVpvN1Q5f', '2022-03-26 00:08:25.172012', 'read write', 1, 13, '2022-03-25 14:08:25.172012', '2022-03-25 14:08:25.172012', NULL, NULL),
(48, 'tdzvlSVyDokifsY151xpCHTrLisQFX', '2022-03-26 00:10:48.314131', 'read write', 1, 14, '2022-03-25 14:10:48.315128', '2022-03-25 14:10:48.315128', NULL, NULL),
(49, 'KGtb50eEuuoLXTNhqzQYlKjc64jL8i', '2022-03-26 00:23:07.632768', 'read write', 1, 16, '2022-03-25 14:23:07.632768', '2022-03-25 14:23:07.632768', NULL, NULL),
(50, 'cS2jEUjyAxvtORIBHs9EVsYT3Yb1Gk', '2022-03-26 02:07:10.483198', 'read write', 1, 9, '2022-03-25 16:07:10.483198', '2022-03-25 16:07:10.483198', NULL, NULL),
(51, 'B9HfLvfCslI9C0BuEprz1AObIs3Bvy', '2022-03-26 02:07:31.457088', 'read write', 1, 6, '2022-03-25 16:07:31.458086', '2022-03-25 16:07:31.458086', NULL, NULL),
(52, 'VrVoGCLnrJtVYvP6UrgejEe8CrCkI4', '2022-03-26 02:50:54.853329', 'read write', 1, 4, '2022-03-25 16:50:54.853329', '2022-03-25 16:50:54.853329', NULL, NULL),
(53, 'Aj0RHLvm2n7fJHnthq5gNYq1x69LjT', '2022-03-26 04:46:25.176821', 'read write', 1, 2, '2022-03-25 18:46:25.176821', '2022-03-25 18:46:25.176821', NULL, NULL),
(54, 'cXobIF6TtwNLC2c0jCM9xUJSHXnmYg', '2022-03-27 00:21:59.273545', 'read write', 1, 17, '2022-03-26 14:21:59.274542', '2022-03-26 14:21:59.274542', NULL, NULL),
(55, '2oUDOTLlJP32ajwQyuYfRvwHPqSJBb', '2022-03-27 00:22:19.028619', 'read write', 1, 5, '2022-03-26 14:22:19.029617', '2022-03-26 14:22:19.029617', NULL, NULL),
(56, 'TwAH4VG5vy6YPzAYP3AMoXQx6s0Gq8', '2022-03-27 01:08:40.705208', 'read write', 1, 3, '2022-03-26 15:08:40.705208', '2022-03-26 15:08:40.705208', NULL, NULL),
(57, 'GGqh552TFi0buJyHbu2UJqObrttllR', '2022-03-27 01:37:34.649825', 'read write', 1, 2, '2022-03-26 15:37:34.650823', '2022-03-26 15:37:34.650823', NULL, NULL),
(58, 'avbF66bgnI8XpKunvDpMxiWLDRt5VX', '2022-03-27 01:39:56.732334', 'read write', 1, 6, '2022-03-26 15:39:56.733331', '2022-03-26 15:39:56.733331', NULL, NULL),
(59, 'vKRIWDwBjXhQFMvAJXSEwufmZhmSBb', '2022-03-29 18:20:06.801001', 'read write', 1, 3, '2022-03-29 08:20:06.801998', '2022-03-29 08:20:06.801998', NULL, NULL),
(60, 'uV6FP5QwD8bXt0SF9nKKCutcMbBlar', '2022-03-29 19:59:21.657656', 'read write', 1, 2, '2022-03-29 09:59:21.658654', '2022-03-29 09:59:21.658654', NULL, NULL),
(61, 'Ds8j1Ks69gZvUk7zY0orMMLOfq41MQ', '2022-03-29 21:06:50.178750', 'read write', 1, 6, '2022-03-29 11:06:50.178750', '2022-03-29 11:06:50.178750', NULL, NULL),
(62, 'ZofYvFtzx3oA68GwJddfcSG8NgP6ur', '2022-03-29 23:51:22.788779', 'read write', 1, 5, '2022-03-29 13:51:22.788779', '2022-03-29 13:51:22.788779', NULL, NULL),
(63, 'FXfRjR9L6lRI5FUkzUy1tlKG5MVRG1', '2022-03-31 00:01:39.599424', 'read write', 1, 10, '2022-03-30 14:01:39.599424', '2022-03-30 14:01:39.599424', NULL, NULL),
(64, 'fsz18qVqqhFta8y4EpHklwUhxTVcR1', '2022-03-31 00:01:45.209008', 'read write', 1, 2, '2022-03-30 14:01:45.210000', '2022-03-30 14:01:45.210000', NULL, NULL),
(65, 'vPsoXoCPy7yyQ0OnY8fk1ClSx2q8Z0', '2022-03-31 00:20:31.752619', 'read write', 1, 5, '2022-03-30 14:20:31.752619', '2022-03-30 14:20:31.752619', NULL, NULL),
(66, 'DipH5H4a43h9Ds9JQdi46fGrBFBJ3N', '2022-03-31 15:57:39.663814', 'read write', 1, 6, '2022-03-31 05:57:39.663814', '2022-03-31 05:57:39.663814', NULL, NULL),
(67, 'NhrwiGMXSvAIn2uI1fhgdSDL53IJ5O', '2022-03-31 15:58:41.432441', 'read write', 1, 4, '2022-03-31 05:58:41.432441', '2022-03-31 05:58:41.432441', NULL, NULL),
(68, 'KUl9FX5UraSNXblnBgFQYCa4kGIPDU', '2022-03-31 15:59:25.053336', 'read write', 1, 2, '2022-03-31 05:59:25.053336', '2022-03-31 05:59:25.053336', NULL, NULL),
(69, 'frbfLOHRn3HCkh9JS6OekMnj4sKWIa', '2022-03-31 16:47:24.081191', 'read write', 1, 5, '2022-03-31 06:47:24.081191', '2022-03-31 06:47:24.081191', NULL, NULL),
(70, 'rmPHptcEDOdvJ8wxcdZXupgxAqMmIu', '2022-03-31 18:47:46.069877', 'read write', 1, 7, '2022-03-31 08:47:46.070875', '2022-03-31 08:47:46.070875', NULL, NULL),
(71, 'sgZ4WvQMMPxWeb8RHoiCj7iv2ZQqi3', '2022-03-31 20:37:54.644620', 'read write', 1, 8, '2022-03-31 10:37:54.644620', '2022-03-31 10:37:54.644620', NULL, NULL),
(72, 'yc8K6dnSBfYTCnkk9QZ4AgcIRXHqTm', '2022-03-31 20:38:55.427425', 'read write', 1, 3, '2022-03-31 10:38:55.428446', '2022-03-31 10:38:55.428446', NULL, NULL),
(73, '0r8HSQennCn2GeQfvD8tR56OkxqwtO', '2022-04-01 01:54:57.307709', 'read write', 1, 13, '2022-03-31 15:54:57.308706', '2022-03-31 15:54:57.308706', NULL, NULL),
(74, 'do6JmiyF9qDMs5mWdzfKpOcDj5hsII', '2022-04-01 02:02:46.120368', 'read write', 1, 11, '2022-03-31 16:02:46.120368', '2022-03-31 16:02:46.120368', NULL, NULL),
(75, 'UmN0A1Rx7DAg3B9A86mdfY3zIWiEbZ', '2022-04-01 02:07:20.946659', 'read write', 1, 2, '2022-03-31 16:07:20.947656', '2022-03-31 16:07:20.947656', NULL, NULL),
(76, 'HKTei9yLf9ZP2MmQI9dcMGgRBN1Tdl', '2022-04-01 02:14:49.940597', 'read write', 1, 14, '2022-03-31 16:14:49.940597', '2022-03-31 16:14:49.940597', NULL, NULL),
(77, 'xUrPO8hU7ydpYaaVf7zqxCJpjbNuxc', '2022-04-01 02:16:07.835646', 'read write', 1, 12, '2022-03-31 16:16:07.836627', '2022-03-31 16:16:07.836627', NULL, NULL),
(78, 'DVd460o7PlDtBCdTW6yJsz4DMldwva', '2022-04-01 18:05:16.065701', 'read write', 1, 2, '2022-04-01 08:05:16.066698', '2022-04-01 08:05:16.066698', NULL, NULL),
(79, 'ZdyexeKg4zFyMTsJWUUoBfFZPsU0hI', '2022-04-01 18:06:19.323966', 'read write', 1, 3, '2022-04-01 08:06:19.323966', '2022-04-01 08:06:19.323966', NULL, NULL),
(80, 'anRyg6KewAEyiSIlIQTHbWk6TM3nr4', '2022-04-01 18:12:58.964066', 'read write', 1, 6, '2022-04-01 08:12:58.964066', '2022-04-01 08:12:58.964066', NULL, NULL),
(81, 'y2X0BD96Xiv8vZfJAMWHXWGWGYNiOg', '2022-04-01 18:58:00.313142', 'read write', 1, 5, '2022-04-01 08:58:00.314140', '2022-04-01 08:58:00.314140', NULL, NULL),
(82, 'k54bV7GAvj47zbohWUoTF2xuZa8RoO', '2022-04-01 19:46:21.554769', 'read write', 1, 11, '2022-04-01 09:46:21.555766', '2022-04-01 09:46:21.555766', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `oauth2_provider_application`
--

CREATE TABLE `oauth2_provider_application` (
  `id` bigint(20) NOT NULL,
  `client_id` varchar(100) NOT NULL,
  `redirect_uris` longtext NOT NULL,
  `client_type` varchar(32) NOT NULL,
  `authorization_grant_type` varchar(32) NOT NULL,
  `client_secret` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `skip_authorization` tinyint(1) NOT NULL,
  `created` datetime(6) NOT NULL,
  `updated` datetime(6) NOT NULL,
  `algorithm` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `oauth2_provider_application`
--

INSERT INTO `oauth2_provider_application` (`id`, `client_id`, `redirect_uris`, `client_type`, `authorization_grant_type`, `client_secret`, `name`, `user_id`, `skip_authorization`, `created`, `updated`, `algorithm`) VALUES
(1, 'xGM9uIAX7C3aNCu6poiGQY9VxmD2qnGCyyYeoAHv', '', 'confidential', 'password', 'tSuWnBVQY8qk787Mjf2vgbioPLBOrqJ0tgl9SE2u3j1lsbqmiSYGG7Pb24hZaNgHKTbaq8nMPI7IbvbOyLsyGRnqwLgvpdjCjhr4rwgOoVlmlY279NFi309XB9EutPpE', '', 1, 0, '2022-03-04 13:28:26.849200', '2022-03-04 13:28:26.849200', '');

-- --------------------------------------------------------

--
-- Table structure for table `oauth2_provider_grant`
--

CREATE TABLE `oauth2_provider_grant` (
  `id` bigint(20) NOT NULL,
  `code` varchar(255) NOT NULL,
  `expires` datetime(6) NOT NULL,
  `redirect_uri` longtext NOT NULL,
  `scope` longtext NOT NULL,
  `application_id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created` datetime(6) NOT NULL,
  `updated` datetime(6) NOT NULL,
  `code_challenge` varchar(128) NOT NULL,
  `code_challenge_method` varchar(10) NOT NULL,
  `nonce` varchar(255) NOT NULL,
  `claims` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `oauth2_provider_idtoken`
--

CREATE TABLE `oauth2_provider_idtoken` (
  `id` bigint(20) NOT NULL,
  `jti` char(32) NOT NULL,
  `expires` datetime(6) NOT NULL,
  `scope` longtext NOT NULL,
  `created` datetime(6) NOT NULL,
  `updated` datetime(6) NOT NULL,
  `application_id` bigint(20) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `oauth2_provider_refreshtoken`
--

CREATE TABLE `oauth2_provider_refreshtoken` (
  `id` bigint(20) NOT NULL,
  `token` varchar(255) NOT NULL,
  `access_token_id` bigint(20) DEFAULT NULL,
  `application_id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created` datetime(6) NOT NULL,
  `updated` datetime(6) NOT NULL,
  `revoked` datetime(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `oauth2_provider_refreshtoken`
--

INSERT INTO `oauth2_provider_refreshtoken` (`id`, `token`, `access_token_id`, `application_id`, `user_id`, `created`, `updated`, `revoked`) VALUES
(1, '2EmDxdIgKIfjhDWECOYKY8hTygizxK', 1, 1, 2, '2022-03-04 13:32:39.035977', '2022-03-04 13:32:39.035977', NULL),
(2, 'ywkCyrAYfOegPSANFJQ80DYehxvOBA', 2, 1, 3, '2022-03-05 14:42:42.540271', '2022-03-05 14:42:42.540271', NULL),
(3, '4qrRRLKWUd6G8dcY8KPEuguWRDllRp', 3, 1, 4, '2022-03-05 14:56:06.457491', '2022-03-05 14:56:06.457491', NULL),
(4, '74Pxj6WBpUEbftIKQvx56uTyWPxVKJ', 4, 1, 2, '2022-03-05 14:56:31.024419', '2022-03-05 14:56:31.024419', NULL),
(5, 'XjmkGHeX48Cvi8MbE5ZqJE2xDb9sZP', 5, 1, 3, '2022-03-07 10:38:05.677268', '2022-03-07 10:38:05.677268', NULL),
(6, 'O6E0kFd2z8LSwnj0cKrjjQLp7axgPQ', 6, 1, 5, '2022-03-07 10:58:22.067328', '2022-03-07 10:58:22.067328', NULL),
(7, 'LMO1QR6aUuxCpfmiUBWHlAQr1DhoK1', 7, 1, 2, '2022-03-07 11:01:09.489385', '2022-03-07 11:01:09.489385', NULL),
(8, 'sk2wuvsGPghGl79CETNMboQMb7TGyk', 8, 1, 6, '2022-03-07 11:16:04.824908', '2022-03-07 11:16:04.824908', NULL),
(9, 't3fkGkoYKsl2LSbEwcX9aYN8qVlHIv', 9, 1, 7, '2022-03-07 17:17:42.957168', '2022-03-07 17:17:42.957168', NULL),
(10, '89X5Gf4D32xvGmCE8LNz20V8iIFVMt', 10, 1, 4, '2022-03-08 15:03:59.294087', '2022-03-08 15:03:59.294087', NULL),
(11, 'r2TnQ6HphJbvPSNnjrYgGqCf1IQLqd', 11, 1, 2, '2022-03-08 15:04:21.930996', '2022-03-08 15:04:21.930996', NULL),
(12, 'oguLV2oqbZwYSrLs66ryFIfHFBzIxa', 12, 1, 6, '2022-03-08 15:07:26.733398', '2022-03-08 15:07:26.733398', NULL),
(13, 'fTd2xei6R9aplW2LIfTl0GucwXBmhg', 13, 1, 2, '2022-03-09 09:51:13.053999', '2022-03-09 09:51:13.053999', NULL),
(14, 'ZmtCQApg56GistRy1OjZehnV2n1OUG', 14, 1, 3, '2022-03-09 16:10:03.287536', '2022-03-09 16:10:03.287536', NULL),
(15, 'bfdlBMdBNvgXkOJHqujpjPKxICZpqE', 15, 1, 3, '2022-03-10 08:05:43.125800', '2022-03-10 08:05:43.125800', NULL),
(16, '9yJSQidBuliMi9pgrX2yNLabg1o10W', 16, 1, 8, '2022-03-10 10:23:46.254870', '2022-03-10 10:23:46.254870', NULL),
(17, 'OnYPF73lkTcN4Qsw1g2BH9l9ialNeN', 17, 1, 2, '2022-03-10 14:06:45.876253', '2022-03-10 14:06:45.876253', NULL),
(18, 'eMNy8R7IxMEXzLJI76NzH25Iq5Q3BP', 18, 1, 4, '2022-03-11 07:57:48.500475', '2022-03-11 07:57:48.500475', NULL),
(19, 'GOUpEhIbhxvDe5ilV2bVto3CAOJUuq', 19, 1, 4, '2022-03-18 07:25:02.467904', '2022-03-18 07:25:02.467904', NULL),
(20, 'wyXudsHHtI8GTg94hpoS84jolXqkw4', 20, 1, 2, '2022-03-18 07:25:16.813861', '2022-03-18 07:25:16.814856', NULL),
(21, '5GS950DeFzKFN4EXiyAFw3F4ggw36E', 21, 1, 3, '2022-03-18 07:42:04.448821', '2022-03-18 07:42:04.448821', NULL),
(22, 'ZumLiLHPm3nPwJnqLrhzvQNWpa1BX8', 22, 1, 9, '2022-03-18 07:49:59.548277', '2022-03-18 07:49:59.548277', NULL),
(23, 'UBcXROhzkdxsxn2wzmlVpdrlG82Nkt', 23, 1, 6, '2022-03-18 07:50:02.306375', '2022-03-18 07:50:02.306375', NULL),
(24, 'dKlWmPCZxvw9Vie68eWTzu8UOj69SH', 24, 1, 10, '2022-03-18 08:37:14.680584', '2022-03-18 08:37:14.680584', NULL),
(25, 'EI9SdlU7SyTtx30laAc26RXuiM8BaK', 25, 1, 11, '2022-03-18 09:17:16.434359', '2022-03-18 09:17:16.434359', NULL),
(26, 'BtEKAnrjblHCjwtBTcKPJU1SUGUeYl', 26, 1, 12, '2022-03-18 09:17:16.800310', '2022-03-18 09:17:16.800310', NULL),
(27, 'Dx4rDq0k30z9HtFQTLUpMeW71ikrL9', 27, 1, 5, '2022-03-18 09:58:57.852411', '2022-03-18 09:58:57.852411', NULL),
(28, 'rbkLCBI8KEO2XnTWhRqZ1LlSc8HhvP', 28, 1, 13, '2022-03-18 14:13:39.945071', '2022-03-18 14:13:39.945071', NULL),
(29, 'xzcozYZ6eh2lXMaIZfgfHUf6zmWdTI', 29, 1, 14, '2022-03-18 14:28:43.287686', '2022-03-18 14:28:43.287686', NULL),
(30, 'Fjs70E32EcpeD7b1o6gHsHyzuuhS5S', 30, 1, 15, '2022-03-18 15:02:24.267438', '2022-03-18 15:02:24.267438', NULL),
(31, 'hMV5cJNh47a47nbilI2iGiGLG9YLOx', 31, 1, 16, '2022-03-18 15:03:44.069693', '2022-03-18 15:03:44.069693', NULL),
(32, '1DV0KDbYhM4SxJiuSS8El45uop9vJy', 32, 1, 6, '2022-03-18 18:44:40.093215', '2022-03-18 18:44:40.093215', NULL),
(33, 'ZwWolk7586K53ZtxueSYaRy2SFYOgQ', 33, 1, 2, '2022-03-19 08:45:22.719306', '2022-03-19 08:45:22.719306', NULL),
(34, 'qYi0vpTbX9oJlJmFtsqZA26XowPRzQ', 34, 1, 12, '2022-03-19 08:51:49.747082', '2022-03-19 08:51:49.747082', NULL),
(35, '1uXTnhgmCZE7Tjt2gPZRRhI4mCym4t', 35, 1, 6, '2022-03-19 09:16:32.202423', '2022-03-19 09:16:32.202423', NULL),
(36, 'E7EmHSfan9Rehjte5wwSUxQ7B1dYiW', 36, 1, 11, '2022-03-19 09:38:07.350011', '2022-03-19 09:38:07.350011', NULL),
(37, 'LeZOp9W68w1voK7gKVbjad3s6TmMic', 37, 1, 5, '2022-03-19 09:40:38.814536', '2022-03-19 09:40:38.814536', NULL),
(38, 'BJt7CfDYRa6o4Qhp3KKXmv2FciWQYn', 38, 1, 3, '2022-03-19 11:03:55.115590', '2022-03-19 11:03:55.115590', NULL),
(39, '6F0X8W9VOqLFOP4lARoq1BTGzmXcBA', 39, 1, 4, '2022-03-24 09:20:31.408424', '2022-03-24 09:20:31.408424', NULL),
(40, 'tYtdT58KgueMAsKFwCVG77huHuUQ2N', 40, 1, 2, '2022-03-24 09:21:59.017876', '2022-03-24 09:21:59.017876', NULL),
(41, 'VCGtvXcTr5pdIqTAX4dDj1IMxxurov', 41, 1, 3, '2022-03-24 09:49:50.409747', '2022-03-24 09:49:50.409747', NULL),
(42, 'ctbk4Httl2NjiRPtnzPWqAnmjl3Vos', 42, 1, 5, '2022-03-24 09:50:52.927526', '2022-03-24 09:50:52.927526', NULL),
(43, '8D9ofqif9s6Mzb5TRSu0Y3aOvkKiFE', 43, 1, 6, '2022-03-24 14:40:36.960128', '2022-03-24 14:40:36.960128', NULL),
(44, 'nmMh9ef5904FED7Ga64YWTOhPRWPJV', 44, 1, 2, '2022-03-25 08:14:27.897137', '2022-03-25 08:14:27.897137', NULL),
(45, 'NxIJaeIM6dnzLpVEJ7WlupGKLSIe5m', 45, 1, 12, '2022-03-25 09:24:04.482359', '2022-03-25 09:24:04.482359', NULL),
(46, '9ON3URGZIk0gvC0FrETnhNZhvTOgKb', 46, 1, 5, '2022-03-25 09:25:46.805357', '2022-03-25 09:25:46.805357', NULL),
(47, 'TiyKOoigAY2Ah6SbW8yNZYl5aDC9qu', 47, 1, 13, '2022-03-25 14:08:25.175004', '2022-03-25 14:08:25.175004', NULL),
(48, 'H664kP9ltSG3tOZoKV9B85hOuHfO65', 48, 1, 14, '2022-03-25 14:10:48.315128', '2022-03-25 14:10:48.315128', NULL),
(49, '8ABelq3K1hzeULLO2V4Vxw06BxUEny', 49, 1, 16, '2022-03-25 14:23:07.635760', '2022-03-25 14:23:07.635760', NULL),
(50, 'pAQHgzKaHQhgYm69ZWpCeO45uY5hSZ', 50, 1, 9, '2022-03-25 16:07:10.485193', '2022-03-25 16:07:10.485193', NULL),
(51, 'uMmjTopdZds0Jw1AOXWePUTWxGWx6d', 51, 1, 6, '2022-03-25 16:07:31.460081', '2022-03-25 16:07:31.460081', NULL),
(52, 'nSoyKLr9Mmfi99k1x5p6ZPjr8j8PJn', 52, 1, 4, '2022-03-25 16:50:54.879407', '2022-03-25 16:50:54.879407', NULL),
(53, 'LZLnPQ8KlGMnA79B3U5nMW7OU2QTMA', 53, 1, 2, '2022-03-25 18:46:25.180809', '2022-03-25 18:46:25.180809', NULL),
(54, 'sNIJgDCsvY2wAAWge9vAhjxre9fM2t', 54, 1, 17, '2022-03-26 14:21:59.275539', '2022-03-26 14:21:59.275539', NULL),
(55, 'phbDZIj2bYmauVMeksbpyK6PXYq8Eu', 55, 1, 5, '2022-03-26 14:22:19.032609', '2022-03-26 14:22:19.032609', NULL),
(56, '4khI90qpuP3GNCRO171bZVAO1pwTxA', 56, 1, 3, '2022-03-26 15:08:40.715180', '2022-03-26 15:08:40.715180', NULL),
(57, '9iscFsUqgW5eFqLpXqA7ASRgaoUaN2', 57, 1, 2, '2022-03-26 15:37:34.652820', '2022-03-26 15:37:34.652820', NULL),
(58, 'qSOiMbGGodHVEH1AxOEeG3BEmIQ692', 58, 1, 6, '2022-03-26 15:39:56.733331', '2022-03-26 15:39:56.733331', NULL),
(59, 'H56olOjIIxB5IC31GdT8JRE6uoXhoW', 59, 1, 3, '2022-03-29 08:20:06.807982', '2022-03-29 08:20:06.807982', NULL),
(60, 'MeloYVTiiHCuXpvvsRbt6gWsX36cYY', 60, 1, 2, '2022-03-29 09:59:21.661759', '2022-03-29 09:59:21.661759', NULL),
(61, '40iEQ8sydMhtnWXIV7Hy9F1y7PPR0U', 61, 1, 6, '2022-03-29 11:06:50.181765', '2022-03-29 11:06:50.181765', NULL),
(62, 'fgbOiQV0lQmvm9ZmUABTGrz14GKgre', 62, 1, 5, '2022-03-29 13:51:22.792902', '2022-03-29 13:51:22.792902', NULL),
(63, 'OuTx59IHQA1hDYXK1qVnZYVdUaEPZP', 63, 1, 10, '2022-03-30 14:01:39.602416', '2022-03-30 14:01:39.602416', NULL),
(64, 'KOaFFinW8iWV7X7LND0gXvwUoGyiqM', 64, 1, 2, '2022-03-30 14:01:45.211994', '2022-03-30 14:01:45.211994', NULL),
(65, 'CokWTOh9T4A9H2ln3qleIRi3z8sSRn', 65, 1, 5, '2022-03-30 14:20:31.755611', '2022-03-30 14:20:31.755611', NULL),
(66, 'uLwVjqiqNwwtcaPkaW7RuFbhQoYReB', 66, 1, 6, '2022-03-31 05:57:39.667804', '2022-03-31 05:57:39.667804', NULL),
(67, 'pYotzBzKxLzoalKPPu9y9vVLfr18vm', 67, 1, 4, '2022-03-31 05:58:41.435432', '2022-03-31 05:58:41.435432', NULL),
(68, '1L0tMXYkKOHOMWC7ak0mVYL0Ew4oeU', 68, 1, 2, '2022-03-31 05:59:25.054336', '2022-03-31 05:59:25.054336', NULL),
(69, 'RoeVWBFtJK28IKn5K12h0cPPemRrMs', 69, 1, 5, '2022-03-31 06:47:24.083186', '2022-03-31 06:47:24.083186', NULL),
(70, 'qnw4JqWS7qCmH3EEiaoNovzYqZERCo', 70, 1, 7, '2022-03-31 08:47:46.073868', '2022-03-31 08:47:46.073868', NULL),
(71, 'njqwW3f8JHNdYincWtMDFMZGZO3Zcn', 71, 1, 8, '2022-03-31 10:37:54.649619', '2022-03-31 10:37:54.649619', NULL),
(72, 'QdRsY5DKdRc1mAO6EeRs5hiKcdbDF7', 72, 1, 3, '2022-03-31 10:38:55.429987', '2022-03-31 10:38:55.429987', NULL),
(73, 'RugEtUL4iPukDMi5NMh1Q8dMbga8o2', 73, 1, 13, '2022-03-31 15:54:57.315832', '2022-03-31 15:54:57.315832', NULL),
(74, 'YFotxJfAhC9Di355usgFSXKDwBwodQ', 74, 1, 11, '2022-03-31 16:02:46.121366', '2022-03-31 16:02:46.121366', NULL),
(75, 'GhZj2XsC3TK1e21e7k6hqZKyG6u8w7', 75, 1, 2, '2022-03-31 16:07:20.949651', '2022-03-31 16:07:20.949651', NULL),
(76, 'pZIltnKikAGHHUWQnT52IHoc043tat', 76, 1, 14, '2022-03-31 16:14:49.942591', '2022-03-31 16:14:49.942591', NULL),
(77, 'Tv6CYqsnTqKE2OyZNLldtn4yw03UIe', 77, 1, 12, '2022-03-31 16:16:07.838620', '2022-03-31 16:16:07.838620', NULL),
(78, 'uUCq1cAMOuii42xSQTJYxYKjZiJrk7', 78, 1, 2, '2022-04-01 08:05:16.069690', '2022-04-01 08:05:16.070687', NULL),
(79, 'XppjvnmZntAGXmEPF6MPy7sGAUosCL', 79, 1, 3, '2022-04-01 08:06:19.324964', '2022-04-01 08:06:19.324964', NULL),
(80, '6dihTnssHV9CKdRbiLV2Mfeu9W9ywl', 80, 1, 6, '2022-04-01 08:12:58.967068', '2022-04-01 08:12:58.967068', NULL),
(81, 'i6VhRBGKstcDOJTrM99xQkZJGXbHcW', 81, 1, 5, '2022-04-01 08:58:00.315137', '2022-04-01 08:58:00.315137', NULL),
(82, 'tjKQ885LwmwNAgEMYJ2DaEmupwgVEu', 82, 1, 11, '2022-04-01 09:46:21.559766', '2022-04-01 09:46:21.559766', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `social_auth_association`
--

CREATE TABLE `social_auth_association` (
  `id` int(11) NOT NULL,
  `server_url` varchar(255) NOT NULL,
  `handle` varchar(255) NOT NULL,
  `secret` varchar(255) NOT NULL,
  `issued` int(11) NOT NULL,
  `lifetime` int(11) NOT NULL,
  `assoc_type` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `social_auth_code`
--

CREATE TABLE `social_auth_code` (
  `id` int(11) NOT NULL,
  `email` varchar(254) NOT NULL,
  `code` varchar(32) NOT NULL,
  `verified` tinyint(1) NOT NULL,
  `timestamp` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `social_auth_nonce`
--

CREATE TABLE `social_auth_nonce` (
  `id` int(11) NOT NULL,
  `server_url` varchar(255) NOT NULL,
  `timestamp` int(11) NOT NULL,
  `salt` varchar(65) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `social_auth_partial`
--

CREATE TABLE `social_auth_partial` (
  `id` int(11) NOT NULL,
  `token` varchar(32) NOT NULL,
  `next_step` smallint(5) UNSIGNED NOT NULL CHECK (`next_step` >= 0),
  `backend` varchar(32) NOT NULL,
  `data` longtext NOT NULL,
  `timestamp` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `social_auth_usersocialauth`
--

CREATE TABLE `social_auth_usersocialauth` (
  `id` int(11) NOT NULL,
  `provider` varchar(32) NOT NULL,
  `uid` varchar(255) NOT NULL,
  `extra_data` longtext NOT NULL,
  `user_id` int(11) NOT NULL,
  `created` datetime(6) NOT NULL,
  `modified` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `social_auth_usersocialauth`
--

INSERT INTO `social_auth_usersocialauth` (`id`, `provider`, `uid`, `extra_data`, `user_id`, `created`, `modified`) VALUES
(1, 'google-oauth2', 'sapol.m@ku.th', '{\"auth_time\": 1648800316, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM8URfRP4NaAVYvzhawX0SXKttQHP59AvbIRV-ewYjuAriSCB9cKrUCz1NZ5rW5uzfLNAzrtpRxcXc4m-p0-0Crcn-ZHF2f_oDS-vvOc11m0Dco9gy4OHKgZJR4oTEtoMkk5xZ3hNZzC20s2Yb9dalVSzA0\", \"token_type\": null}', 2, '2022-03-04 13:32:38.876533', '2022-04-01 08:05:16.063705'),
(2, 'google-oauth2', 'suphapong.b@ku.th', '{\"auth_time\": 1648800379, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM-ZZCkj9R-6YmRbkof7YxSOWYpOgJNut_2qiZumm0FpfffHhpv9dyNacc-8li19r6WKpzGsK3njbHyRTyYVHRi6OJWk2dqwSDxm4kez38xTHfWSQyX3LpaUuFAZfRSgGRIXqxOE7ltPNwTQngDqA7-RMT4\", \"token_type\": null}', 3, '2022-03-05 14:42:42.371172', '2022-04-01 08:06:19.163316'),
(3, 'google-oauth2', 'ppmahawong@gmail.com', '{\"auth_time\": 1648706321, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM-Gxwn896Tn_JJk9yV1vTUx0OJuCIr0MNDVZtGNLQb4MdCS_vTsKCj7wJNe9OYkZq6zAGPk_sOxOsN2hiZRmBkbYHah_ezyapPmzX0ij8B8fwbGfhk0NMdId5tvefcoYnRvf9vRg7aB0K019sB-MkBecGM\", \"token_type\": null}', 4, '2022-03-05 14:56:06.286923', '2022-03-31 05:58:41.266883'),
(4, 'google-oauth2', 'phunyawee.s@ku.th', '{\"auth_time\": 1648832075, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM9nmGt-ke3zokSS5SQfktEFJ8Zre7KMIVrGH_zd1dy_6pcRhqWIsFNFt4H6v9lMS654kNoqmVTcCMT83u77CMgvrT0qER_yhPP4yNzB9lauBF9twtOoQBRRbVhF2BN9Q7ul5PV7HiIUgznfLV1N-0HSimA\", \"token_type\": null}', 5, '2022-03-07 10:58:21.908811', '2022-04-01 16:54:35.136661'),
(5, 'google-oauth2', 'prapavit.p@ku.th', '{\"auth_time\": 1648800778, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM8yokICmHK4B3GFXsIcv1dya-pbA6i0Ojak4gmc70chzzFLT2b-DLdXP7GZZdCYF1H9-yQRX4TJA7ZREyKPZjtl7qni5ddaD_zdk1o3N_Abrb3dMprY84Xhj1feYchApnjAN-7U5G9hofP9zFISGVF_yXU\", \"token_type\": null}', 6, '2022-03-07 11:16:04.663807', '2022-04-01 08:12:58.796638'),
(6, 'google-oauth2', 'khunnaphat.m@ku.th', '{\"auth_time\": 1648744921, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM8mvOgRcSNLTDQR1_3QQhrI8oVAwsqtWid4OQVFsRm_LQbsGltz3m6U-KvQfrfvXUc0BAIMRBIiPUn0O9C0jlNXDQnFJ8weXOBDlMQ_fDyiqjLwzQz38Py3eGXdSi22wplj6QLGp4ZEX-ZVQja78avAtg\", \"token_type\": null}', 7, '2022-03-07 17:17:42.795709', '2022-03-31 16:42:01.289442'),
(7, 'google-oauth2', 'zxohm2543@gmail.com', '{\"auth_time\": 1648723074, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM8UMhCQEKkKHsyxysjmvap9zpeHK4tP5EnvXs4MKzQTj7Ze1hZy1Hgfo99ZMuENi6BZsPWotCTgqWvwRfTlY9sJybGXwCX87LLYP0fe2tgs68xNmYH9ve04_WJ-_WM7gMJzRUte0yGWd5Jd9IRjfz7xhiI\", \"token_type\": null}', 8, '2022-03-10 10:23:46.093558', '2022-03-31 10:37:54.477436'),
(8, 'google-oauth2', 'goodnessboy79@gmail.com', '{\"auth_time\": 1648224430, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM_8BvyeHv6YBoMLvpw4kpzxogvXoV6E9FDgjMwN6CJ1WyVqILy4dXkx0yKp_yj-DgnJEmX1Z3V0GSH1beddTUouqZxPz9fT84ewQc3OnkKNYozEWBhq-XbCtZulXeFnXrLF7uD5LRVIW9eRPDnbym-d5Q\", \"token_type\": null}', 9, '2022-03-18 07:49:59.232900', '2022-03-25 16:07:10.319297'),
(9, 'google-oauth2', 'smtpnetpro@gmail.com', '{\"auth_time\": 1648648899, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM-YDbUv3pSeiQbwzoPP7Dpd0L-8QnxA08H7hEtgNwVZY8-czn1mp7HlPlWY9zvY1Vzf2p7gbS-_nb635jcouyoMPxDU3VLPNzwgajirXM8lUk2g1ckQNsrpCdelGUzcz34e4C4QWKsiqk4LgV8PuTHvFA\", \"token_type\": null}', 10, '2022-03-18 08:37:14.501069', '2022-03-30 14:01:39.436505'),
(10, 'google-oauth2', 'chonlatad.c@ku.th', '{\"auth_time\": 1648806416, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM_LZjY2dgramU0fNqjPSerRdmKvQo4-p_ebPvzx0jpyrh_IvUS7qmOYUU3eoHDvHtBg3_NmTlhE8IPgCj_dILnlDwaruZhyxSiZQ0vTQE2Ba7xYMw688XUhmZ4sWusxtWIK2eH2XDhdx5dsONDiUG2gpn4\", \"token_type\": null}', 11, '2022-03-18 09:17:16.188656', '2022-04-01 09:46:56.642745'),
(11, 'google-oauth2', 'pongsatorn.saw@ku.th', '{\"auth_time\": 1648747002, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM8RMZBb1V1HERREMzvzGlR6Q1uo_zQ0uqnxg36nYthqiCzPe-_lxpUILxsWmEHk_sJF5X2IG1eNpXZz7ZDWRPvXe57tn2ds1wqhYi1567_CymYyIaxT920-DBKjPGBTQIxPSHWJOJPhvrm7GRn6ovEE5s4\", \"token_type\": null}', 12, '2022-03-18 09:17:16.628334', '2022-03-31 17:16:42.098868'),
(12, 'google-oauth2', 'chollasit.su@ku.th', '{\"auth_time\": 1648744114, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM8BzKQHHD2pru-jvsF6AX8YkNwKGaglpLvHlKswKuQAGNJctEws3QV5ivtkZnLbFbbwYcesqwGzf2wkd5XsYbZeyqh2wKdKCf0p81BRSxvhs6Fl-whqXRvkk5VfqRBLfHt8FLnXOyzPftuM2JEKm_FKccU\", \"token_type\": null}', 13, '2022-03-18 14:13:39.648204', '2022-03-31 16:28:34.586989'),
(13, 'google-oauth2', 'thiwat.su@ku.th', '{\"auth_time\": 1648745163, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM-Df7Cp1OlW5XOeMgF3Et8K3XCSCzwrPbeS3nIkaDLNN4cY0YBOvjhegrXx16bp3-Of_CsTpqdCUdQV1I7O1xAeT1LDi6ScYbUBvZb1orQmE_Za3rLGhFIPNgr1ZyNI1_FMdBRhAwUqBCR40pXE4Bd3wGg\", \"token_type\": null}', 14, '2022-03-18 14:28:43.133172', '2022-03-31 16:46:03.092946'),
(14, 'google-oauth2', 'onezeromay@gmail.com', '{\"auth_time\": 1647615744, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM9E-_gLyD01CsJxPs_2LN5pPl3LHDLUH2ZbBJ1_NNv54h_tOZ6pmdUc5txPveM7W1wB2eZbdhVyAm3Fy6FNQPfUIdviykIwkUU93w-qBjRsMkwyjoIZ8wFhngEfk6rTBxCK165ljmoXOkYobv52R4CR\", \"token_type\": null}', 15, '2022-03-18 15:02:23.998645', '2022-03-18 15:02:24.001637'),
(15, 'google-oauth2', 'kitsanaphon.j@ku.th', '{\"auth_time\": 1648218187, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM-xyamOVeV0FxgTPamIgAME9RQea88JbUxKP6XkotL6R4AUzf-Kfd5N1gzsAim6y1AmT9ssl8RqtEFVqKl2goKQJ-acib9tSeliI8F74GzGcYpD4VeHGwWKBdpH0mc_QlCcMWBf07dQGedgr80T3jsZ7Q\", \"token_type\": null}', 16, '2022-03-18 15:03:43.655536', '2022-03-25 14:23:07.460081'),
(16, 'google-oauth2', 'phunyaweesomabutra2544@gmail.com', '{\"auth_time\": 1648304519, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM-ydImvvGTj6sAY5emNyo5NKcWguOAjx9uUFAegalqkRGkJbW9bN9Uv4LyVponEaFh6ShRt7Bs8o47W_wxCvNbnTxJ9gacgU6h-hPw2yP4rVd2-j84UVIjWI9Y84qdhpnfWBVAglt1FIcXfbhy-XPu3\", \"token_type\": null}', 17, '2022-03-26 14:21:59.075077', '2022-03-26 14:21:59.079066');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `app_academicyear`
--
ALTER TABLE `app_academicyear`
  ADD PRIMARY KEY (`acayear_id`);

--
-- Indexes for table `app_adminuser`
--
ALTER TABLE `app_adminuser`
  ADD PRIMARY KEY (`Admin_id_id`);

--
-- Indexes for table `app_commiteevote`
--
ALTER TABLE `app_commiteevote`
  ADD PRIMARY KEY (`commitee_id`),
  ADD KEY `app_commiteevote_managescholarship_id_9c109085_fk_app_manag` (`managescholarship_id_id`),
  ADD KEY `app_commiteevote_registerscholarship__496ce647_fk_app_regis` (`registerscholarship_id_id`),
  ADD KEY `app_commiteevote_user_id_id_8497b831_fk_app_user_login_user_id` (`user_id_id`),
  ADD KEY `app_commiteevote_weightcriteriapoint__0b205b2a_fk_app_weigh` (`weightcriteriapoint_id_id`);

--
-- Indexes for table `app_hero`
--
ALTER TABLE `app_hero`
  ADD PRIMARY KEY (`id`),
  ADD KEY `app_hero_TestFKey_id_92bee8a4_fk_app_testforeignkey_id` (`TestFKey_id`);

--
-- Indexes for table `app_managescholarship`
--
ALTER TABLE `app_managescholarship`
  ADD PRIMARY KEY (`managescho_id`),
  ADD KEY `app_managescholarshi_srcScholar_id_9e5ac111_fk_app_sourc` (`srcScholar_id`),
  ADD KEY `app_managescholarshi_srcYear_id_25eac9f0_fk_app_acade` (`srcYear_id`);

--
-- Indexes for table `app_place`
--
ALTER TABLE `app_place`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `app_registerscholarship`
--
ALTER TABLE `app_registerscholarship`
  ADD PRIMARY KEY (`register_id`),
  ADD KEY `app_registerscholars_namescholarregister__37552791_fk_app_manag` (`namescholarregister_id`),
  ADD KEY `app_registerscholars_usermatch_id_id_1c3f0276_fk_app_user_` (`usermatch_id_id`),
  ADD KEY `app_registerscholars_studentinform_profil_d1bfff76_fk_app_stude` (`studentinform_profile_id`);

--
-- Indexes for table `app_restaurant`
--
ALTER TABLE `app_restaurant`
  ADD PRIMARY KEY (`place_id`);

--
-- Indexes for table `app_schedule`
--
ALTER TABLE `app_schedule`
  ADD PRIMARY KEY (`sche_id`);

--
-- Indexes for table `app_sourceofscholarship`
--
ALTER TABLE `app_sourceofscholarship`
  ADD PRIMARY KEY (`sourceofscho_id`);

--
-- Indexes for table `app_studentfile`
--
ALTER TABLE `app_studentfile`
  ADD PRIMARY KEY (`studentinform_profile_stdfile`),
  ADD KEY `app_studentfile_usermatch_id_stdfile_b6d51510_fk_app_user_` (`usermatch_id_stdfile_id`),
  ADD KEY `app_studentfile_stdinform_id_id_e777d940` (`stdinform_id_id`);

--
-- Indexes for table `app_studentfilefile`
--
ALTER TABLE `app_studentfilefile`
  ADD PRIMARY KEY (`id`),
  ADD KEY `app_studentfilefile_file_id_id_a2de5118_fk_app_stude` (`file_id_id`);

--
-- Indexes for table `app_studentinform`
--
ALTER TABLE `app_studentinform`
  ADD PRIMARY KEY (`stdInform_id_id`);

--
-- Indexes for table `app_studentuser`
--
ALTER TABLE `app_studentuser`
  ADD PRIMARY KEY (`std_id_id`);

--
-- Indexes for table `app_testforeignkey`
--
ALTER TABLE `app_testforeignkey`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `app_topic`
--
ALTER TABLE `app_topic`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `app_user_login`
--
ALTER TABLE `app_user_login`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `app_weightcriteriapoint`
--
ALTER TABLE `app_weightcriteriapoint`
  ADD PRIMARY KEY (`weight_id`),
  ADD KEY `app_weightcriteriapo_managescho_id_id_72f7e81f_fk_app_manag` (`managescho_id_id`);

--
-- Indexes for table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indexes for table `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indexes for table `oauth2_provider_accesstoken`
--
ALTER TABLE `oauth2_provider_accesstoken`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `token` (`token`),
  ADD UNIQUE KEY `source_refresh_token_id` (`source_refresh_token_id`),
  ADD UNIQUE KEY `id_token_id` (`id_token_id`),
  ADD KEY `oauth2_provider_acce_application_id_b22886e1_fk_oauth2_pr` (`application_id`),
  ADD KEY `oauth2_provider_accesstoken_user_id_6e4c9a65_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `oauth2_provider_application`
--
ALTER TABLE `oauth2_provider_application`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `client_id` (`client_id`),
  ADD KEY `oauth2_provider_application_user_id_79829054_fk_auth_user_id` (`user_id`),
  ADD KEY `oauth2_provider_application_client_secret_53133678` (`client_secret`);

--
-- Indexes for table `oauth2_provider_grant`
--
ALTER TABLE `oauth2_provider_grant`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`),
  ADD KEY `oauth2_provider_gran_application_id_81923564_fk_oauth2_pr` (`application_id`),
  ADD KEY `oauth2_provider_grant_user_id_e8f62af8_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `oauth2_provider_idtoken`
--
ALTER TABLE `oauth2_provider_idtoken`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `jti` (`jti`),
  ADD KEY `oauth2_provider_idto_application_id_08c5ff4f_fk_oauth2_pr` (`application_id`),
  ADD KEY `oauth2_provider_idtoken_user_id_dd512b59_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `oauth2_provider_refreshtoken`
--
ALTER TABLE `oauth2_provider_refreshtoken`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `access_token_id` (`access_token_id`),
  ADD UNIQUE KEY `oauth2_provider_refreshtoken_token_revoked_af8a5134_uniq` (`token`,`revoked`),
  ADD KEY `oauth2_provider_refr_application_id_2d1c311b_fk_oauth2_pr` (`application_id`),
  ADD KEY `oauth2_provider_refreshtoken_user_id_da837fce_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `social_auth_association`
--
ALTER TABLE `social_auth_association`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `social_auth_association_server_url_handle_078befa2_uniq` (`server_url`,`handle`);

--
-- Indexes for table `social_auth_code`
--
ALTER TABLE `social_auth_code`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `social_auth_code_email_code_801b2d02_uniq` (`email`,`code`),
  ADD KEY `social_auth_code_code_a2393167` (`code`),
  ADD KEY `social_auth_code_timestamp_176b341f` (`timestamp`);

--
-- Indexes for table `social_auth_nonce`
--
ALTER TABLE `social_auth_nonce`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `social_auth_nonce_server_url_timestamp_salt_f6284463_uniq` (`server_url`,`timestamp`,`salt`);

--
-- Indexes for table `social_auth_partial`
--
ALTER TABLE `social_auth_partial`
  ADD PRIMARY KEY (`id`),
  ADD KEY `social_auth_partial_token_3017fea3` (`token`),
  ADD KEY `social_auth_partial_timestamp_50f2119f` (`timestamp`);

--
-- Indexes for table `social_auth_usersocialauth`
--
ALTER TABLE `social_auth_usersocialauth`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `social_auth_usersocialauth_provider_uid_e6b5e668_uniq` (`provider`,`uid`),
  ADD KEY `social_auth_usersocialauth_user_id_17d28448_fk_auth_user_id` (`user_id`),
  ADD KEY `social_auth_usersocialauth_uid_796e51dc` (`uid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `app_academicyear`
--
ALTER TABLE `app_academicyear`
  MODIFY `acayear_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `app_commiteevote`
--
ALTER TABLE `app_commiteevote`
  MODIFY `commitee_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `app_hero`
--
ALTER TABLE `app_hero`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `app_managescholarship`
--
ALTER TABLE `app_managescholarship`
  MODIFY `managescho_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `app_place`
--
ALTER TABLE `app_place`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `app_registerscholarship`
--
ALTER TABLE `app_registerscholarship`
  MODIFY `register_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2043;

--
-- AUTO_INCREMENT for table `app_schedule`
--
ALTER TABLE `app_schedule`
  MODIFY `sche_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `app_sourceofscholarship`
--
ALTER TABLE `app_sourceofscholarship`
  MODIFY `sourceofscho_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `app_studentfile`
--
ALTER TABLE `app_studentfile`
  MODIFY `studentinform_profile_stdfile` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `app_studentfilefile`
--
ALTER TABLE `app_studentfilefile`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=138;

--
-- AUTO_INCREMENT for table `app_testforeignkey`
--
ALTER TABLE `app_testforeignkey`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `app_topic`
--
ALTER TABLE `app_topic`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `app_user_login`
--
ALTER TABLE `app_user_login`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `app_weightcriteriapoint`
--
ALTER TABLE `app_weightcriteriapoint`
  MODIFY `weight_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;

--
-- AUTO_INCREMENT for table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=137;

--
-- AUTO_INCREMENT for table `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `oauth2_provider_accesstoken`
--
ALTER TABLE `oauth2_provider_accesstoken`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT for table `oauth2_provider_application`
--
ALTER TABLE `oauth2_provider_application`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `oauth2_provider_grant`
--
ALTER TABLE `oauth2_provider_grant`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `oauth2_provider_idtoken`
--
ALTER TABLE `oauth2_provider_idtoken`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `oauth2_provider_refreshtoken`
--
ALTER TABLE `oauth2_provider_refreshtoken`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT for table `social_auth_association`
--
ALTER TABLE `social_auth_association`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `social_auth_code`
--
ALTER TABLE `social_auth_code`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `social_auth_nonce`
--
ALTER TABLE `social_auth_nonce`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `social_auth_partial`
--
ALTER TABLE `social_auth_partial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `social_auth_usersocialauth`
--
ALTER TABLE `social_auth_usersocialauth`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `app_adminuser`
--
ALTER TABLE `app_adminuser`
  ADD CONSTRAINT `app_adminuser_Admin_id_id_d6f5653d_fk_app_user_login_user_id` FOREIGN KEY (`Admin_id_id`) REFERENCES `app_user_login` (`user_id`);

--
-- Constraints for table `app_commiteevote`
--
ALTER TABLE `app_commiteevote`
  ADD CONSTRAINT `app_commiteevote_managescholarship_id_9c109085_fk_app_manag` FOREIGN KEY (`managescholarship_id_id`) REFERENCES `app_managescholarship` (`managescho_id`),
  ADD CONSTRAINT `app_commiteevote_registerscholarship__496ce647_fk_app_regis` FOREIGN KEY (`registerscholarship_id_id`) REFERENCES `app_registerscholarship` (`register_id`),
  ADD CONSTRAINT `app_commiteevote_user_id_id_8497b831_fk_app_user_login_user_id` FOREIGN KEY (`user_id_id`) REFERENCES `app_user_login` (`user_id`),
  ADD CONSTRAINT `app_commiteevote_weightcriteriapoint__0b205b2a_fk_app_weigh` FOREIGN KEY (`weightcriteriapoint_id_id`) REFERENCES `app_weightcriteriapoint` (`weight_id`);

--
-- Constraints for table `app_hero`
--
ALTER TABLE `app_hero`
  ADD CONSTRAINT `app_hero_TestFKey_id_92bee8a4_fk_app_testforeignkey_id` FOREIGN KEY (`TestFKey_id`) REFERENCES `app_testforeignkey` (`id`);

--
-- Constraints for table `app_managescholarship`
--
ALTER TABLE `app_managescholarship`
  ADD CONSTRAINT `app_managescholarshi_srcScholar_id_9e5ac111_fk_app_sourc` FOREIGN KEY (`srcScholar_id`) REFERENCES `app_sourceofscholarship` (`sourceofscho_id`),
  ADD CONSTRAINT `app_managescholarshi_srcYear_id_25eac9f0_fk_app_acade` FOREIGN KEY (`srcYear_id`) REFERENCES `app_academicyear` (`acayear_id`);

--
-- Constraints for table `app_registerscholarship`
--
ALTER TABLE `app_registerscholarship`
  ADD CONSTRAINT `app_registerscholars_namescholarregister__37552791_fk_app_manag` FOREIGN KEY (`namescholarregister_id`) REFERENCES `app_managescholarship` (`managescho_id`),
  ADD CONSTRAINT `app_registerscholars_studentinform_profil_d1bfff76_fk_app_stude` FOREIGN KEY (`studentinform_profile_id`) REFERENCES `app_studentfile` (`studentinform_profile_stdfile`),
  ADD CONSTRAINT `app_registerscholars_usermatch_id_id_1c3f0276_fk_app_user_` FOREIGN KEY (`usermatch_id_id`) REFERENCES `app_user_login` (`user_id`);

--
-- Constraints for table `app_restaurant`
--
ALTER TABLE `app_restaurant`
  ADD CONSTRAINT `app_restaurant_place_id_20a407a6_fk_app_place_id` FOREIGN KEY (`place_id`) REFERENCES `app_place` (`id`);

--
-- Constraints for table `app_studentfile`
--
ALTER TABLE `app_studentfile`
  ADD CONSTRAINT `app_studentfile_stdinform_id_id_e777d940_fk_app_stude` FOREIGN KEY (`stdinform_id_id`) REFERENCES `app_studentinform` (`stdInform_id_id`),
  ADD CONSTRAINT `app_studentfile_usermatch_id_stdfile_b6d51510_fk_app_user_` FOREIGN KEY (`usermatch_id_stdfile_id`) REFERENCES `app_user_login` (`user_id`);

--
-- Constraints for table `app_studentfilefile`
--
ALTER TABLE `app_studentfilefile`
  ADD CONSTRAINT `app_studentfilefile_file_id_id_a2de5118_fk_app_stude` FOREIGN KEY (`file_id_id`) REFERENCES `app_studentfile` (`studentinform_profile_stdfile`);

--
-- Constraints for table `app_studentinform`
--
ALTER TABLE `app_studentinform`
  ADD CONSTRAINT `app_studentinform_stdInform_id_id_0c4164bb_fk_app_user_` FOREIGN KEY (`stdInform_id_id`) REFERENCES `app_user_login` (`user_id`);

--
-- Constraints for table `app_studentuser`
--
ALTER TABLE `app_studentuser`
  ADD CONSTRAINT `app_studentuser_std_id_id_91576b1f_fk_app_user_login_user_id` FOREIGN KEY (`std_id_id`) REFERENCES `app_user_login` (`user_id`);

--
-- Constraints for table `app_weightcriteriapoint`
--
ALTER TABLE `app_weightcriteriapoint`
  ADD CONSTRAINT `app_weightcriteriapo_managescho_id_id_72f7e81f_fk_app_manag` FOREIGN KEY (`managescho_id_id`) REFERENCES `app_managescholarship` (`managescho_id`);

--
-- Constraints for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Constraints for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `oauth2_provider_accesstoken`
--
ALTER TABLE `oauth2_provider_accesstoken`
  ADD CONSTRAINT `oauth2_provider_acce_application_id_b22886e1_fk_oauth2_pr` FOREIGN KEY (`application_id`) REFERENCES `oauth2_provider_application` (`id`),
  ADD CONSTRAINT `oauth2_provider_acce_id_token_id_85db651b_fk_oauth2_pr` FOREIGN KEY (`id_token_id`) REFERENCES `oauth2_provider_idtoken` (`id`),
  ADD CONSTRAINT `oauth2_provider_acce_source_refresh_token_e66fbc72_fk_oauth2_pr` FOREIGN KEY (`source_refresh_token_id`) REFERENCES `oauth2_provider_refreshtoken` (`id`),
  ADD CONSTRAINT `oauth2_provider_accesstoken_user_id_6e4c9a65_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `oauth2_provider_application`
--
ALTER TABLE `oauth2_provider_application`
  ADD CONSTRAINT `oauth2_provider_application_user_id_79829054_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `oauth2_provider_grant`
--
ALTER TABLE `oauth2_provider_grant`
  ADD CONSTRAINT `oauth2_provider_gran_application_id_81923564_fk_oauth2_pr` FOREIGN KEY (`application_id`) REFERENCES `oauth2_provider_application` (`id`),
  ADD CONSTRAINT `oauth2_provider_grant_user_id_e8f62af8_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `oauth2_provider_idtoken`
--
ALTER TABLE `oauth2_provider_idtoken`
  ADD CONSTRAINT `oauth2_provider_idto_application_id_08c5ff4f_fk_oauth2_pr` FOREIGN KEY (`application_id`) REFERENCES `oauth2_provider_application` (`id`),
  ADD CONSTRAINT `oauth2_provider_idtoken_user_id_dd512b59_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `oauth2_provider_refreshtoken`
--
ALTER TABLE `oauth2_provider_refreshtoken`
  ADD CONSTRAINT `oauth2_provider_refr_access_token_id_775e84e8_fk_oauth2_pr` FOREIGN KEY (`access_token_id`) REFERENCES `oauth2_provider_accesstoken` (`id`),
  ADD CONSTRAINT `oauth2_provider_refr_application_id_2d1c311b_fk_oauth2_pr` FOREIGN KEY (`application_id`) REFERENCES `oauth2_provider_application` (`id`),
  ADD CONSTRAINT `oauth2_provider_refreshtoken_user_id_da837fce_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `social_auth_usersocialauth`
--
ALTER TABLE `social_auth_usersocialauth`
  ADD CONSTRAINT `social_auth_usersocialauth_user_id_17d28448_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);
--
-- Database: `mydb`
--
CREATE DATABASE IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `mydb`;

-- --------------------------------------------------------

--
-- Table structure for table `table1`
--

CREATE TABLE `table1` (
  `idtable1` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `table2`
--

CREATE TABLE `table2` (
  `idtable2` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `table1`
--
ALTER TABLE `table1`
  ADD PRIMARY KEY (`idtable1`);

--
-- Indexes for table `table2`
--
ALTER TABLE `table2`
  ADD PRIMARY KEY (`idtable2`);
--
-- Database: `phpmyadmin`
--
CREATE DATABASE IF NOT EXISTS `phpmyadmin` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `phpmyadmin`;

-- --------------------------------------------------------

--
-- Table structure for table `pma__bookmark`
--

CREATE TABLE `pma__bookmark` (
  `id` int(10) UNSIGNED NOT NULL,
  `dbase` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `user` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `label` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `query` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Bookmarks';

-- --------------------------------------------------------

--
-- Table structure for table `pma__central_columns`
--

CREATE TABLE `pma__central_columns` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_length` text COLLATE utf8_bin DEFAULT NULL,
  `col_collation` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_isNull` tinyint(1) NOT NULL,
  `col_extra` varchar(255) COLLATE utf8_bin DEFAULT '',
  `col_default` text COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Central list of columns';

-- --------------------------------------------------------

--
-- Table structure for table `pma__column_info`
--

CREATE TABLE `pma__column_info` (
  `id` int(5) UNSIGNED NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `column_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `comment` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `mimetype` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `input_transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `input_transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Column information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__designer_settings`
--

CREATE TABLE `pma__designer_settings` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `settings_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Settings related to Designer';

--
-- Dumping data for table `pma__designer_settings`
--

INSERT INTO `pma__designer_settings` (`username`, `settings_data`) VALUES
('root', '{\"angular_direct\":\"direct\",\"snap_to_grid\":\"off\",\"relation_lines\":\"true\"}');

-- --------------------------------------------------------

--
-- Table structure for table `pma__export_templates`
--

CREATE TABLE `pma__export_templates` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `export_type` varchar(10) COLLATE utf8_bin NOT NULL,
  `template_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `template_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved export templates';

-- --------------------------------------------------------

--
-- Table structure for table `pma__favorite`
--

CREATE TABLE `pma__favorite` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Favorite tables';

-- --------------------------------------------------------

--
-- Table structure for table `pma__history`
--

CREATE TABLE `pma__history` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp(),
  `sqlquery` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='SQL history for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__navigationhiding`
--

CREATE TABLE `pma__navigationhiding` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Hidden items of navigation tree';

-- --------------------------------------------------------

--
-- Table structure for table `pma__pdf_pages`
--

CREATE TABLE `pma__pdf_pages` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `page_nr` int(10) UNSIGNED NOT NULL,
  `page_descr` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='PDF relation pages for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__recent`
--

CREATE TABLE `pma__recent` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Recently accessed tables';

--
-- Dumping data for table `pma__recent`
--

INSERT INTO `pma__recent` (`username`, `tables`) VALUES
('root', '[{\"db\":\"djangodatabase\",\"table\":\"app_registerscholarship\"},{\"db\":\"djangodatabase\",\"table\":\"app_managescholarship\"},{\"db\":\"djangodatabase\",\"table\":\"app_weightcriteriapoint\"},{\"db\":\"djangodatabase\",\"table\":\"app_user_login\"},{\"db\":\"djangodatabase\",\"table\":\"app_studentfilefile\"},{\"db\":\"djangodatabase\",\"table\":\"app_studentfile\"},{\"db\":\"djangodatabase\",\"table\":\"auth_group_permissions\"},{\"db\":\"djangodatabase\",\"table\":\"app_studentinform\"},{\"db\":\"djangodatabase\",\"table\":\"app_sourceofscholarship\"},{\"db\":\"djangodatabase\",\"table\":\"app_restaurant\"}]');

-- --------------------------------------------------------

--
-- Table structure for table `pma__relation`
--

CREATE TABLE `pma__relation` (
  `master_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Relation table';

-- --------------------------------------------------------

--
-- Table structure for table `pma__savedsearches`
--

CREATE TABLE `pma__savedsearches` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved searches';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_coords`
--

CREATE TABLE `pma__table_coords` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `pdf_page_number` int(11) NOT NULL DEFAULT 0,
  `x` float UNSIGNED NOT NULL DEFAULT 0,
  `y` float UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table coordinates for phpMyAdmin PDF output';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_info`
--

CREATE TABLE `pma__table_info` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `display_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_uiprefs`
--

CREATE TABLE `pma__table_uiprefs` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `prefs` text COLLATE utf8_bin NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Tables'' UI preferences';

--
-- Dumping data for table `pma__table_uiprefs`
--

INSERT INTO `pma__table_uiprefs` (`username`, `db_name`, `table_name`, `prefs`, `last_update`) VALUES
('root', 'djangodatabase', 'app_managescholarship', '{\"CREATE_TIME\":\"2022-03-04 18:36:24\",\"col_visib\":[1,1,1,1,1,1,1,1,1,1,1,1,1],\"sorted_col\":\"`app_managescholarship`.`managescho_id` ASC\"}', '2022-03-29 17:08:21'),
('root', 'djangodatabase', 'app_registerscholarship', '{\"sorted_col\":\"`app_registerscholarship`.`statusInterview` ASC\"}', '2022-04-01 18:05:53'),
('root', 'djangodatabase', 'app_sourceofscholarship', '{\"sorted_col\":\"`app_sourceofscholarship`.`selectedDate` DESC\"}', '2022-03-30 16:16:43'),
('root', 'djangodatabase', 'app_studentfile', '{\"sorted_col\":\"`studentinform_profile_stdfile` ASC\"}', '2022-03-29 09:46:05'),
('root', 'djangodatabase', 'app_weightcriteriapoint', '{\"CREATE_TIME\":\"2022-03-24 22:41:00\",\"sorted_col\":\"`app_weightcriteriapoint`.`weight_id` ASC\"}', '2022-04-01 17:14:32');

-- --------------------------------------------------------

--
-- Table structure for table `pma__tracking`
--

CREATE TABLE `pma__tracking` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `version` int(10) UNSIGNED NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  `schema_snapshot` text COLLATE utf8_bin NOT NULL,
  `schema_sql` text COLLATE utf8_bin DEFAULT NULL,
  `data_sql` longtext COLLATE utf8_bin DEFAULT NULL,
  `tracking` set('UPDATE','REPLACE','INSERT','DELETE','TRUNCATE','CREATE DATABASE','ALTER DATABASE','DROP DATABASE','CREATE TABLE','ALTER TABLE','RENAME TABLE','DROP TABLE','CREATE INDEX','DROP INDEX','CREATE VIEW','ALTER VIEW','DROP VIEW') COLLATE utf8_bin DEFAULT NULL,
  `tracking_active` int(1) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Database changes tracking for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__userconfig`
--

CREATE TABLE `pma__userconfig` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `config_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User preferences storage for phpMyAdmin';

--
-- Dumping data for table `pma__userconfig`
--

INSERT INTO `pma__userconfig` (`username`, `timevalue`, `config_data`) VALUES
('root', '2022-04-01 18:05:55', '{\"Console\\/Mode\":\"collapse\",\"NavigationWidth\":230}');

-- --------------------------------------------------------

--
-- Table structure for table `pma__usergroups`
--

CREATE TABLE `pma__usergroups` (
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL,
  `tab` varchar(64) COLLATE utf8_bin NOT NULL,
  `allowed` enum('Y','N') COLLATE utf8_bin NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User groups with configured menu items';

-- --------------------------------------------------------

--
-- Table structure for table `pma__users`
--

CREATE TABLE `pma__users` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Users and their assignments to user groups';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pma__central_columns`
--
ALTER TABLE `pma__central_columns`
  ADD PRIMARY KEY (`db_name`,`col_name`);

--
-- Indexes for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `db_name` (`db_name`,`table_name`,`column_name`);

--
-- Indexes for table `pma__designer_settings`
--
ALTER TABLE `pma__designer_settings`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_user_type_template` (`username`,`export_type`,`template_name`);

--
-- Indexes for table `pma__favorite`
--
ALTER TABLE `pma__favorite`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__history`
--
ALTER TABLE `pma__history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`,`db`,`table`,`timevalue`);

--
-- Indexes for table `pma__navigationhiding`
--
ALTER TABLE `pma__navigationhiding`
  ADD PRIMARY KEY (`username`,`item_name`,`item_type`,`db_name`,`table_name`);

--
-- Indexes for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  ADD PRIMARY KEY (`page_nr`),
  ADD KEY `db_name` (`db_name`);

--
-- Indexes for table `pma__recent`
--
ALTER TABLE `pma__recent`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__relation`
--
ALTER TABLE `pma__relation`
  ADD PRIMARY KEY (`master_db`,`master_table`,`master_field`),
  ADD KEY `foreign_field` (`foreign_db`,`foreign_table`);

--
-- Indexes for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_savedsearches_username_dbname` (`username`,`db_name`,`search_name`);

--
-- Indexes for table `pma__table_coords`
--
ALTER TABLE `pma__table_coords`
  ADD PRIMARY KEY (`db_name`,`table_name`,`pdf_page_number`);

--
-- Indexes for table `pma__table_info`
--
ALTER TABLE `pma__table_info`
  ADD PRIMARY KEY (`db_name`,`table_name`);

--
-- Indexes for table `pma__table_uiprefs`
--
ALTER TABLE `pma__table_uiprefs`
  ADD PRIMARY KEY (`username`,`db_name`,`table_name`);

--
-- Indexes for table `pma__tracking`
--
ALTER TABLE `pma__tracking`
  ADD PRIMARY KEY (`db_name`,`table_name`,`version`);

--
-- Indexes for table `pma__userconfig`
--
ALTER TABLE `pma__userconfig`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__usergroups`
--
ALTER TABLE `pma__usergroups`
  ADD PRIMARY KEY (`usergroup`,`tab`,`allowed`);

--
-- Indexes for table `pma__users`
--
ALTER TABLE `pma__users`
  ADD PRIMARY KEY (`username`,`usergroup`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__history`
--
ALTER TABLE `pma__history`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  MODIFY `page_nr` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Database: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;
--
-- Database: `test2`
--
CREATE DATABASE IF NOT EXISTS `test2` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `test2`;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
