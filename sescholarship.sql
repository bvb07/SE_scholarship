-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 15, 2022 at 06:00 PM
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
-- Database: `sescholarship`
--

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
(4, '2568');

-- --------------------------------------------------------

--
-- Table structure for table `app_commiteevote`
--

CREATE TABLE `app_commiteevote` (
  `commitee_id` int(11) NOT NULL,
  `managescholarship_id_id` int(11) NOT NULL,
  `registerscholarship_id_id` int(11) NOT NULL,
  `user_id_id` int(11) NOT NULL,
  `pointbycommitee` int(11) DEFAULT NULL,
  `sumpoint` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `app_commiteevote`
--

INSERT INTO `app_commiteevote` (`commitee_id`, `managescholarship_id_id`, `registerscholarship_id_id`, `user_id_id`, `pointbycommitee`, `sumpoint`) VALUES
(1, 3, 1, 4, 100, '5.00'),
(2, 3, 4, 4, 100, '5.00'),
(3, 3, 1, 10, 100, '5.00'),
(4, 3, 2, 10, 100, '5.00'),
(5, 3, 2, 4, 100, '5.00'),
(6, 3, 4, 10, 100, '5.00'),
(7, 3, 7, 4, 100, '5.00'),
(8, 3, 7, 10, 80, '4.00'),
(9, 11, 25, 10, 71, '3.57'),
(10, 11, 26, 10, 100, '5.00');

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
  `srcYear_id` int(11) NOT NULL,
  `statusScholar` varchar(255) DEFAULT NULL,
  `processStatus` varchar(255) DEFAULT NULL,
  `normalOrcontinue` varchar(255) DEFAULT NULL,
  `Round` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `app_managescholarship`
--

INSERT INTO `app_managescholarship` (`managescho_id`, `srcUpload`, `srcStartDate`, `srcEndDate`, `majorSelect`, `nameScholar`, `costScholar`, `amountScholar`, `detailScholar`, `qualificationScholar`, `addOnScholar`, `srcScholar_id`, `srcYear_id`, `statusScholar`, `processStatus`, `normalOrcontinue`, `Round`) VALUES
(3, 'image/563000006182401_PCveqXk.jpg', '2022-04-03', '2022-04-30', '{\"วิศวกรรมโยธา\":\"\",\"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและการออกแบบ\":\"ถูกเลือก\",\"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์\":\"\",\"วิศวกรรมอุตสาหการและระบบ\":\"\",\"วิศวกรรมเครื่องกลและระบบการผลิต\":\"\",\"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ\":\"\"}', 'ทุนการศึกษาระดับปริญญาตรี', '1', '1', 'เป็นทุนการศึกษาที่ผู้มีจิตศรัทธา เช่น บริษัทมูลนิธิห้างร้านสมาคมบุคคลทั่วไปมอบเงินจำนวนหนึ่งให้กับมหาวิทยาลัยเพื่อนำดอกผลที่ได้รับมาไว้สำหรับจัดสรรเป็นทุนปฎิบัติงานตอบแทนของนิสิตเป็นรายเดือน ๆ ละ 1,000 บาทต่อเดือน', 'เป็นนิสิตระดับปริญญาตรี\r\nเป็นผู้ที่ขาดแคลนทุนทรัพย์เพื่อใช้จ่ายทางการศึกษา\r\nมีผลการเรียนอยู่ในระดับที่สามารถสำเร็จการศึกษาได้หรือตามเกณฑ์ที่ทุนการศึกษาระบุไว้\r\nมีความประพฤติดี ไม่เป็นผู้อยู่ระหว่างการลงโทษทางวินัยนิสิต\r\nมีคุณสมบัติเฉพาะ ตามที่ทุนการศึกษานั้น ๆ ระบุไว้', '{\"addFile\":[{\"id\":1,\"fileName\":\"คลิปบอร์ด\",\"fileType\":\"วีดีโอ(MP4)\"}]}', 2, 1, 'ปิดทุน', '5', 'ทุนปกติ', 1),
(4, 'image/Screenshot_2022-04-11_001633.jpg', '2022-03-27', '2022-05-07', '{\"วิศวกรรมโยธา\":\"\",\"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและการออกแบบ\":\"\",\"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์\":\"\",\"วิศวกรรมอุตสาหการและระบบ\":\"\",\"วิศวกรรมเครื่องกลและระบบการผลิต\":\"\",\"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ\":\"\"}', 'ทุนนางบุญลือ - น.พ.อนันต์ ธาระเวช', '12000', '11', 'ติดต่อสอบถาม\r\n\r\n:\r\n\r\nหน่วยทุนการศึกษา กองกิจการนิสิต ชั้น 3 อาคารระพีสาคริก เพจทุนการศึกษามหาวิทยาลัยเกษตรศาสตร์\r\nเบอร์โทรศัพท์ 02-1180181', 'เป็นนิสิตระดับปริญญาตรีของมหาวิทยาลัยเกษตรศาสตร์\r\n\r\nเป็นผู้ที่ขาดแคลนทุนทรัพย์\r\n\r\nเป็นผู้มีความประพฤติดี', '{\"addFile\":[{\"id\":1,\"fileName\":\"คลิปเต้น\",\"fileType\":\"วีดีโอ(MP4)\"}]}', 2, 1, NULL, '1', 'ทุนปกติ', 1),
(5, 'image/118844289_3376458205748085_4101330413851341789_n.jpg', '2022-04-11', '2022-04-29', '{\"วิศวกรรมโยธา\":\"\",\"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์\":\"\",\"วิศวกรรมเครื่องกลและการออกแบบ\":\"ถูกเลือก\",\"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์\":\"\",\"วิศวกรรมอุตสาหการและระบบ\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและระบบการผลิต\":\"ถูกเลือก\",\"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ\":\"\"}', 'ทุนการศึกษาขาดแคลนทุนทรัพย์นการศึกษาเล่าเรียน (ทุนต่อเนื่อง)', '55000', '1', 'ประกาศรับสมัคร ทุนการศึกษา (ทุนต่อเนื่อง)\r\n\r\nสำหรับสาขา ME / MME / EE ชั้นปีที่2ขึ้นไป ที่ขาดแคลนทุนทรัพย์นการศึกษาเล่าเรียน\r\n\r\nมูลค่าทุน 55,000 บาท ต่อปี จนจบการศึกษา\r\n\r\nจำนวน 1 ทุน เท่านั้น\r\n\r\nรีบมาสมัครกันเยอะๆนะคะ', '- เป็นผู้มีจิตสาธารณะ\r\n- ไม่เคยต้องโทษทางวินัย\r\n- ชั้นปีที่ 2 ขึ้นไป', '{\"addFile\":[{\"id\":1,\"fileName\":\"รูปถ่ายบ้านนิสิต\",\"fileType\":\"ภาพ(JPG,PNG)\"},{\"id\":2,\"fileName\":\"หนังสือรับรองรายได้ครอบครัว\",\"fileType\":\"เอกสาร(PDF)\"}]}', 3, 2, NULL, '0', 'ทุนต่อเนื่อง', 1),
(6, 'image/Logo_ku_th.svg.png', '2022-04-11', '2022-04-18', '{\"วิศวกรรมโยธา\":\"ถูกเลือก\",\"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและการออกแบบ\":\"ถูกเลือก\",\"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์\":\"ถูกเลือก\",\"วิศวกรรมอุตสาหการและระบบ\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและระบบการผลิต\":\"ถูกเลือก\",\"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ\":\"ถูกเลือก\"}', 'ทุนชมรมนิสิตเก่าเกษตร รุ่นที่ 19', '120000', '5', 'ทุนชมรมนิสิตเก่าเกษตร รุ่นที่ 19', '1. เป็นนิสิตระดับปริญญาตรีของมหาวิทยาลัยเกษตรศาสตร์\r\n2. เป็นผู้ที่ขาดแคลนทุนทรัพย์\r\n3. เป็นผู้มีความประพฤติดี', '{\"addFile\":[{\"id\":1,\"fileName\":\"หลักฐานการขาดแคลนทุนทรัพย์\",\"fileType\":\"เอกสาร(PDF)\"}]}', 4, 1, NULL, '1', 'ทุนปกติ', 1),
(7, 'image/S__121765893.jpg', '2022-04-11', '2022-04-20', '{\"วิศวกรรมโยธา\":\"ถูกเลือก\",\"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและการออกแบบ\":\"ถูกเลือก\",\"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์\":\"ถูกเลือก\",\"วิศวกรรมอุตสาหการและระบบ\":\"\",\"วิศวกรรมเครื่องกลและระบบการผลิต\":\"\",\"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ\":\"\"}', 'รับสมัครทุนการศึกษา ประจำปีการศึกษา 2565', '20000', '10', 'd', 'd', '{\"addFile\":[]}', 3, 1, NULL, '3', 'ทุนต่อเนื่อง', 3),
(8, 'image/oooo.jpg', '2022-04-10', '2022-05-07', '{\"วิศวกรรมโยธา\":\"ถูกเลือก\",\"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและการออกแบบ\":\"ถูกเลือก\",\"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์\":\"ถูกเลือก\",\"วิศวกรรมอุตสาหการและระบบ\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและระบบการผลิต\":\"ถูกเลือก\",\"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ\":\"ถูกเลือก\"}', 'ทุนภูมิพล', '15000', '5', 'ต้องเป็นผู้มีความประพฤติดี เหมาะสมแก่การเป็นนิสิตตัวอย่าง ไม่อยู่ระหว่างถูกสอบสวนและไม่เคยต้องโทษทางวินัยนิสิตใดๆ', 'เป็นนิสิตที่มีระดับคะแนนเฉลี่ยสะสมสูงสุดในชั้นปีที่ 2 ของคณะที่มีหลักสูตรการศึกษา 4 ปี และชั้นปีที่ 3 ของคณะที่มีหลักสูตรการศึกษา 5 ปีขึ้นไป\r\n\r\nต้องเป็นผู้มีความประพฤติดี เหมาะสมแก่การเป็นนิสิตตัวอย่าง ไม่อยู่ระหว่างถูกสอบสวนและไม่เคยต้องโทษทางวินัยนิสิตใดๆ', '{\"addFile\":[{\"id\":1,\"fileName\":\"เรียงความ\",\"fileType\":\"เอกสาร(PDF)\"},{\"id\":2,\"fileName\":\"สำเนาบัตรประชาชน\",\"fileType\":\"ภาพ(JPG,PNG)\"},{\"id\":3,\"fileName\":\"สำเนาทะเบียนบ้าน\",\"fileType\":\"ภาพ(JPG,PNG)\"},{\"id\":4,\"fileName\":\"คะเเนน GPA\",\"fileType\":\"เอกสาร(PDF)\"}]}', 2, 1, 'ปิดทุน', '5', 'ทุนต่อเนื่อง', 1),
(9, 'image/Logo_ku_th.svg_z6dN6Fa.png', '2022-04-11', '2022-04-25', '{\"วิศวกรรมโยธา\":\"ถูกเลือก\",\"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและการออกแบบ\":\"ถูกเลือก\",\"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์\":\"ถูกเลือก\",\"วิศวกรรมอุตสาหการและระบบ\":\"\",\"วิศวกรรมเครื่องกลและระบบการผลิต\":\"\",\"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ\":\"\"}', 'ทุนศาสตราจารย์ ม.ร.ว.ชวนิศนดากร วรวรรณ', '10000', '3', 'ทุนศาสตราจารย์ ม.ร.ว.ชวนิศนดากร วรวรรณ\r\nรับนักศึกษา ป.ตรี', '1. เป็นนิสิตระดับปริญญาตรีของมหาวิทยาลัยเกษตรศาสตร์\r\n2. เป็นผู้ที่ขาดแคลนทุนทรัพย์\r\n3. เป็นผู้มีความประพฤติดี', '{\"addFile\":[{\"id\":1,\"fileName\":\"เอกสารแสดงขาดแคลนทุนทรัพย์\",\"fileType\":\"เอกสาร(PDF)\"}]}', 2, 1, NULL, '4', 'ทุนปกติ', 1),
(10, 'image/Screenshot_2022-04-11_001633_wBSdjy1.jpg', '2022-03-30', '2022-05-07', '{\"วิศวกรรมโยธา\":\"\",\"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและการออกแบบ\":\"\",\"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์\":\"\",\"วิศวกรรมอุตสาหการและระบบ\":\"\",\"วิศวกรรมเครื่องกลและระบบการผลิต\":\"\",\"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ\":\"\"}', 'ทุน มก', '12000', '12', 'ทุนสำหรับ นิสิต มก', 'ขาดแคลน\r\nขยัน', '{\"addFile\":[{\"id\":1,\"fileName\":\"บ้าน\",\"fileType\":\"ภาพ(JPG,PNG)\"}]}', 3, 2, NULL, '1', 'ทุนปกติ', 1),
(11, 'image/01-HD-video-conferencing.jpg', '2022-04-09', '2022-04-12', '{\"วิศวกรรมโยธา\":\"\",\"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและการออกแบบ\":\"\",\"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์\":\"ถูกเลือก\",\"วิศวกรรมอุตสาหการและระบบ\":\"\",\"วิศวกรรมเครื่องกลและระบบการผลิต\":\"\",\"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ\":\"\"}', 'ทุนเอสอี1 ต่อเนื่อง', '2000', '10', 'ทุนต่อเนื่อง เอสอี1', 'นิสิต', '{\"addFile\":[{\"id\":1,\"fileName\":\"สำเนาทะเบียนบ้าน\",\"fileType\":\"เอกสาร(PDF)\"}]}', 10, 1, NULL, '0', 'ทุนต่อเนื่อง', 2),
(16, 'image/gettyimages-1291658118-612x612.jpg', '2022-04-01', '2022-04-21', '{\"วิศวกรรมโยธา\":\"ถูกเลือก\",\"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและการออกแบบ\":\"\",\"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์\":\"ถูกเลือก\",\"วิศวกรรมอุตสาหการและระบบ\":\"\",\"วิศวกรรมเครื่องกลและระบบการผลิต\":\"\",\"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ\":\"ถูกเลือก\"}', 'Speed run man', '2000', '10', 'ทุนตัวอย่าง', '-ทดสอบ', '{\"addFile\":[]}', 10, 1, NULL, '2', 'ทุนปกติ', 1),
(18, '', '2022-04-10', '2022-04-30', '{\"วิศวกรรมโยธา\":\"\",\"วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์\":\"ถูกเลือก\",\"วิศวกรรมเครื่องกลและการออกแบบ\":\"\",\"วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์\":\"\",\"วิศวกรรมอุตสาหการและระบบ\":\"\",\"วิศวกรรมเครื่องกลและระบบการผลิต\":\"\",\"วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ\":\"\"}', 'ทุนยากไร้', '10', '12', 'หดหก', 'หดหกด', '{\"addFile\":[]}', 1, 1, 'ปิดทุน', '5', 'ทุนปกติ', 1);

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
  `totalScore` int(11) NOT NULL,
  `statusRound` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `app_registerscholarship`
--

INSERT INTO `app_registerscholarship` (`register_id`, `namescholarregister_id`, `message`, `statusCheck`, `usermatch_id_id`, `studentinform_profile_id`, `statusInterview`, `statusReceipt`, `statusTransfer`, `totalScore`, `statusRound`) VALUES
(1, 3, '', '1', 8, 1, '1', '3', '3', 100, 0),
(2, 3, 'เเก้ไขไฟล์ทั้งหมด', '3', 6, 2, '3', '3', '3', 100, 0),
(3, 4, '', '1', 2, 3, '0', '0', '0', 0, 0),
(4, 3, '', '1', 7, 4, '1', '1', '1', 100, 0),
(5, 4, '', '1', 7, 5, '0', '0', '0', 0, 0),
(6, 5, '', '0', 7, 6, '0', '0', '0', 0, 0),
(7, 3, '', '1', 2, 7, '1', '3', '3', 90, 0),
(8, 5, '', '0', 1, 8, '0', '0', '0', 0, 0),
(9, 5, '', '0', 4, 9, '0', '0', '0', 0, 0),
(10, 5, '', '0', 2, 10, '0', '0', '0', 0, 0),
(11, 4, '', '3', 5, 11, '3', '3', '3', 0, 0),
(12, 4, 'ตรวจสอบเอกสาร', '2', 10, 12, '0', '0', '0', 0, 0),
(13, 5, '', '0', 10, 13, '0', '0', '0', 0, 0),
(14, 5, '', '0', 6, 14, '0', '0', '0', 0, 0),
(15, 6, '', '0', 6, 15, '0', '0', '0', 0, 0),
(16, 4, '', '0', 9, 16, '0', '0', '0', 0, 0),
(17, 5, '', '0', 5, 17, '0', '0', '0', 0, 0),
(18, 7, '', '1', 1, 18, '1', '0', '1', 0, 3),
(20, 6, '', '0', 1, 20, '0', '0', '0', 0, 0),
(21, 9, '', '1', 1, 21, '1', '1', '1', 0, 0),
(22, 9, '', '3', 9, 22, '3', '3', '3', 0, 0),
(23, 6, '', '0', 5, 23, '0', '0', '0', 0, 0),
(24, 8, '', '1', 8, 24, '1', '1', '1', 0, 0),
(25, 11, 'ตรวจรอบสองแล้วผ่าน ใส่รายละเอียดการสัมภาษณ์', '0', 8, 25, '0', '0', '0', 71, 2),
(26, 11, '', '0', 1, 26, '0', '0', '0', 100, 2),
(27, 16, '', '1', 1, 27, '0', '0', '0', 0, 0),
(28, 16, 'เอกสารไม่ครบ', '3', 10, 28, '3', '3', '3', 0, 0),
(29, 18, '', '1', 4, 29, '1', '1', '1', 0, 0);

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
(1, 'ส่งงาน 11.40 น.', '2022-04-11'),
(2, 'เปิดสมัครทุนการศึกษาระดับปริญญาตรี', '2022-04-12'),
(3, 'ปิดสมัครทุนการศึกษาระดับปริญญาตรี', '2022-05-12'),
(5, 'เปิดรับสมัครทุนนางบุญลือ - น.พ.อนันต์ ธาระเวช', '2022-04-20'),
(7, 'ปิดรับสมัครทุนนางบุญลือ - น.พ.อนันต์ ธาระเวช', '2022-05-26'),
(8, 'ปิดรับสมัครทุนชมรมนิสิตเก่าเกษตร รุ่นที่ 19', '2022-04-19'),
(9, 'เปิดรับสมัครทุนชมรมนิสิตเก่าเกษตร รุ่นที่ 19', '2022-03-19'),
(11, 'สัมภาษณ์ทุนเอสอี', '2022-04-16');

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
(1, 'unicef', '0855555510', '2022-03-27', 'เพราะเรารู้ว่าเรื่องของทุนการศึกษา เป็นอีกเรื่องที่อยู่ในความสนใจของเยาวชนอย่างที่สุด โดยเฉพาะในช่วงเวลานี้ที่สถานการณ์ COVID-19 ได้ส่งผลกระทบต่อเศรษฐกิจทั่วโลก ทั้งต่อภาคธุรกิจและประชาชนทั่วไป'),
(2, 'มก.', '0123456789', '2022-04-03', 'มอ'),
(3, 'สมาคมนิสิตเก่าวิศวกรรมศาสตร์', '0956662354', '2022-04-07', 'สมาคมนิสิตเก่า มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา'),
(4, 'ชมรมนิสิตเก่าเกษตร รุ่นที่ 19', '021180186', '2022-04-11', '123/456 Sriracha'),
(5, 'เครือเจริญโภคภัณฑ์', '085123456', '2022-04-11', 'บริษัท เครือเจริญโภคภัณฑ์ จำกัด'),
(9, 'asd', '0954342235', '2022-04-05', ''),
(10, 'Eng SRC 555', '0643321432', '2022-04-01', 'Laemchabung');

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
(1, 8, 8, 'Profile_Essay/test.pdf', 'ID_card/test.pdf', 'Transcript/test.pdf', 'house_registration/test.pdf', 0, '{\"fullname_Father\":\"อเนก สู้เสงี่ยม\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ค้าขาย\",\"workplace_Father\":\"ตลาดนัดสนามบิน\",\"salary_Father\":\"15000\",\"phone_Father\":\"0819459456\",\"address_Father\":\"152/16\"}', '3.00', '{\"fullname_Mother\":\"ปลา สู้เสงี่ยม\",\"state_Mother\":\"\",\"job_Mother\":\"\",\"workplace_Mother\":\"\",\"salary_Mother\":\"\",\"phone_Mother\":\"\",\"address_Mother\":\"\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"-\",\"scholarship\":\"-\",\"cost\":\"-\"}],\"parttime_Other\":\"เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"ลูกจ้าง\",\"salary_Other\":\"2100\"}', '{\"contacts1\":[{\"id\":2,\"fullName\":\"นาย\",\"education\":\"ปริญญาตรี\",\"job\":\"ข้าราชการ\",\"workplace\":\"สำนักงานชลประธาน\"}],\"money_Donator\":\"2000\",\"who_Donators\":\"มารดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'อาจารย์กุลวดี', '152/16', 1, '2001-04-24', 'thiwat.su@ku.th', 'ทิวัตถ์ สู้เสงี่ยม', '6230300397', '', 'T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์', '0870712272', 'ภาคปกติ', '3'),
(2, 6, 6, 'Profile_Essay/GPA.pdf', 'ID_card/Se_JFQoY3c.pdf', 'Transcript/Se.pdf', 'house_registration/Se_5XFWId7.pdf', 0, '{\"fullname_Father\":\"พ่อ\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"รับราชการ\",\"workplace_Father\":\"รร.นร.\",\"salary_Father\":\"500000\",\"phone_Father\":\"0812345678\",\"address_Father\":\"บ้าน\"}', '3.21', '{\"fullname_Mother\":\"แม่\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"ไม่มี\",\"workplace_Mother\":\"บ้าน\",\"salary_Mother\":\"10000000\",\"phone_Mother\":\"0912345678\",\"address_Mother\":\"บ้าน\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"id\":2,\"fullName\":\"พี่\",\"education\":\"ป.จัตวา\",\"job\":\"สถาปนิก\",\"workplace\":\"BKK\"},{\"id\":3,\"fullName\":\"เรา\",\"education\":\"ป.ตรี\",\"job\":\"นิสิต\",\"workplace\":\"KUSRC\"}],\"money_Donator\":\"1000000\",\"who_Donators\":\"มารดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'กรวิทย์ ออกผล', 'บ.63 ซ.โค้งจรเข้ ถ.สุขุมวิท ต.ปากน้ำ อ.เมือง', 1, '2000-05-08', 'kitsanaphon.j@ku.th', 'กฤษณพล จุ้ยประเสริฐ', '6230300028', '', 'T13 วิศวกรรมเครื่องกลและการออกแบบ', '0951658290', 'ภาคปกติ', '3'),
(3, 2, 2, 'Profile_Essay/weighted_intervals.pdf', 'ID_card/123.pdf', 'Transcript/การบานครงท_4_Doubly_Linked_list.pdf', 'house_registration/Math3_รอบจด.pdf', 0, '{\"fullname_Father\":\"นายพิษณุ โลก\",\"state_Father\":\"ถึงเเก่กรรม\",\"job_Father\":\"\",\"workplace_Father\":\"\",\"salary_Father\":\"\",\"phone_Father\":\"\",\"address_Father\":\"\"}', '2.00', '{\"fullname_Mother\":\"นางสาวไทย ใจร่ม\",\"state_Mother\":\"ถึงเเก่กรรม\",\"job_Mother\":\"\",\"workplace_Mother\":\"\",\"salary_Mother\":\"\",\"phone_Mother\":\"\",\"address_Mother\":\"\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[],\"money_Donator\":\"400\",\"who_Donators\":\"ผู้อุปการคุณ\",\"whoare_Donator\":\"พี่สาว\",\"sibling_Donator\":\"1\",\"job_Donator\":\"รับจ้าง\",\"workplace_Donator\":\"Infinity of Hosward Highschool\",\"tel_Donator\":\"0945432345\"}', 'อาจารย์บอล', '65 ม.706 ต.หินซ้อน อ.แก่งคอย จ.สระบุรี', 1, '2000-09-02', 'sapol.m@ku.th', 'สพล มหาวงศ์', '6230300940', '', 'T17 วิศวกรรมอุตสาหการและระบบ', '0945432345', 'ภาคปกติ', '3'),
(4, 7, 7, 'Profile_Essay/คมอการสมครทน.pdf', 'ID_card/คมอการสมครทน.pdf', 'Transcript/คมอการสมครทน.pdf', 'house_registration/คมอการสมครทน.pdf', 0, '{\"fullname_Father\":\"พ่อพ่อ\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ธุรกิจส่วนตัว\",\"workplace_Father\":\"ธุรกิจส่วนตัว\",\"salary_Father\":\"3000\",\"phone_Father\":\"03164612\",\"address_Father\":\"11020\"}', '2.56', '{\"fullname_Mother\":\"แม่แม่\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"ธุรกิจส่วนตัว\",\"workplace_Mother\":\"ธุรกิจส่วนตัว\",\"salary_Mother\":\"20315659\",\"phone_Mother\":\"102546259\",\"address_Mother\":\"110255\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"-\",\"scholarship\":\"-\",\"cost\":\"-\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"}],\"money_Donator\":\"3000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'จารย์', '150/14 หมู่ที่ 2 ต.ตะเคียนเตี้ย', 1, '2000-01-06', 'chollasit.su@ku.th', 'ชลสิทธิ์ สุธรรมา', '6230300249', '', 'T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์', '0070070007', 'ภาคปกติ', '3'),
(5, 7, 7, 'Profile_Essay/lect14.pdf', 'ID_card/lect14.pdf', 'Transcript/lect14.pdf', 'house_registration/lect14.pdf', 0, '{\"fullname_Father\":\"พ่อพ่อ\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ธุรกิจส่วนตัว\",\"workplace_Father\":\"ธุรกิจส่วนตัว\",\"salary_Father\":\"3000\",\"phone_Father\":\"03164612\",\"address_Father\":\"11020\"}', '2.56', '{\"fullname_Mother\":\"แม่แม่\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"ธุรกิจส่วนตัว\",\"workplace_Mother\":\"ธุรกิจส่วนตัว\",\"salary_Mother\":\"20315659\",\"phone_Mother\":\"102546259\",\"address_Mother\":\"110255\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"-\",\"scholarship\":\"-\",\"cost\":\"-\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"}],\"money_Donator\":\"3000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'จารย์', '150/14 หมู่ที่ 2 ต.ตะเคียนเตี้ย', 1, '2000-01-06', 'chollasit.su@ku.th', 'ชลสิทธิ์ สุธรรมา', '6230300249', '', 'T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์', '0070070007', 'ภาคปกติ', '3'),
(6, 7, 7, 'Profile_Essay/lect08.pdf', 'ID_card/lect09.pdf', 'Transcript/lect11.pdf', 'house_registration/lect10.pdf', 0, '{\"fullname_Father\":\"พ่อพ่อ\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ธุรกิจส่วนตัว\",\"workplace_Father\":\"ธุรกิจส่วนตัว\",\"salary_Father\":\"3000\",\"phone_Father\":\"03164612\",\"address_Father\":\"11020\"}', '2.56', '{\"fullname_Mother\":\"แม่แม่\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"ธุรกิจส่วนตัว\",\"workplace_Mother\":\"ธุรกิจส่วนตัว\",\"salary_Mother\":\"20315659\",\"phone_Mother\":\"102546259\",\"address_Mother\":\"110255\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"-\",\"scholarship\":\"-\",\"cost\":\"-\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"}],\"money_Donator\":\"3000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'จารย์', '150/14 หมู่ที่ 2 ต.ตะเคียนเตี้ย', 1, '2000-01-06', 'chollasit.su@ku.th', 'ชลสิทธิ์ สุธรรมา', '6230300249', '', 'T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์', '0070070007', 'ภาคปกติ', '3'),
(7, 2, 2, 'Profile_Essay/สตรอนพนธแลปรพนธ_1.pdf', 'ID_card/แบบฟอรมลงทะเบยน_ความตองการวคซนทางเลอก.pdf', 'Transcript/123.pdf', 'house_registration/STD_GRADE_REPORT_6230300940_2.pdf', 0, '{\"fullname_Father\":\"นายพิษณุ โลก\",\"state_Father\":\"ถึงเเก่กรรม\",\"job_Father\":\"\",\"workplace_Father\":\"\",\"salary_Father\":\"\",\"phone_Father\":\"\",\"address_Father\":\"\"}', '2.00', '{\"fullname_Mother\":\"นางสาวไทย ใจร่ม\",\"state_Mother\":\"ถึงเเก่กรรม\",\"job_Mother\":\"\",\"workplace_Mother\":\"\",\"salary_Mother\":\"\",\"phone_Mother\":\"\",\"address_Mother\":\"\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[],\"money_Donator\":\"400\",\"who_Donators\":\"ผู้อุปการคุณ\",\"whoare_Donator\":\"พี่สาว\",\"sibling_Donator\":\"1\",\"job_Donator\":\"รับจ้าง\",\"workplace_Donator\":\"Infinity of Hosward Highschool\",\"tel_Donator\":\"0945432345\"}', 'อาจารย์บอล', '65 ม.706 ต.หินซ้อน อ.แก่งคอย จ.สระบุรี', 1, '2000-09-02', 'sapol.m@ku.th', 'สพล มหาวงศ์', '6230300940', '', 'T17 วิศวกรรมอุตสาหการและระบบ', '0945432345', 'ภาคปกติ', '3'),
(8, 1, 1, 'Profile_Essay/ประกาศ_ทนการศกษาตอเนอง_สมาคมนสตเกาคณะวศวกรรมศาสตร.pdf', 'ID_card/idcard_example-converted.pdf', 'Transcript/mq6_6230300923.pdf', 'house_registration/home-converted.pdf', 0, '{\"fullname_Father\":\"สพล มหาวงษ์\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ทหาร\",\"workplace_Father\":\"กรม\",\"salary_Father\":\"900000\",\"phone_Father\":\"0956321355\",\"address_Father\":\"กรม\"}', '4.00', '{\"fullname_Mother\":\"โจเซฟิน มหาวงษ์\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"เเม่บ้าน\",\"workplace_Mother\":\"บ้าน\",\"salary_Mother\":\"100000\",\"phone_Mother\":\"0956321377\",\"address_Mother\":\"100/901 หมู่10 บ้าน\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"id\":\"-\",\"fullName\":\"ศุภพงษ์ บุญปัญญา\",\"education\":\"กำลังศึกษา\",\"job\":\"นักศึกษา\",\"workplace\":\"มก.ศรช.\"}],\"money_Donator\":\"1000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'อ.กาญจนา', '100/901 ม10', 1, '2000-09-19', 'zxohm2543@gmail.com', 'ศุภพงษ์ บุญปัญญา', '6230300923', '', 'T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์', '0956321391', 'ภาคปกติ', '4'),
(9, 4, 4, 'Profile_Essay/thai02.pdf', 'ID_card/SS02.pdf', 'Transcript/mindmapบท5_4.pdf', 'house_registration/ตวอยางการถายสำเนาบตรประชาชน__และสำเนาทะเบยนบาน.pdf', 0, '{\"fullname_Father\":\"ปุณยวีร1 โสมาบุตร\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ไม่บอก\",\"workplace_Father\":\"ไม่บอก\",\"salary_Father\":\"1\",\"phone_Father\":\"0853669252\",\"address_Father\":\"3 waterfoot\"}', '3.33', '{\"fullname_Mother\":\"ไม่บอก\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"ไม่บอก\",\"workplace_Mother\":\"ไม่บอก\",\"salary_Mother\":\"1\",\"phone_Mother\":\"0853669252\",\"address_Mother\":\"ไม่บอก\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"-\",\"scholarship\":\"-\",\"cost\":\"-\"}],\"parttime_Other\":\"เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"ไม่บอก\",\"salary_Other\":\"1\"}', '{\"contacts1\":[{\"id\":1,\"fullName\":\"ไม่บอก\",\"education\":\"ไม่บอก\",\"job\":\"ไม่บอก\",\"workplace\":\"ไม่บอก\"}],\"money_Donator\":\"30000000000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'Phunyawee Somabutra', 'chon', 1, '1990-01-01', 'phunyawee.s@ku.th', 'ปุณยวีร โสมาบุตร', '6230300613', '', 'T14 วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์', '0853669252', 'ภาคปกติ', '3'),
(10, 2, 2, 'Profile_Essay/123.pdf', 'ID_card/Friday-Django-Inventory.pdf', 'Transcript/05_wind_energy.pdf', 'house_registration/Certificate_for_สพล_มหาวงศ_for__รบประกาศนยบตรออนไลน__.pdf', 0, '{\"fullname_Father\":\"นายพิษณุ โลก\",\"state_Father\":\"ถึงเเก่กรรม\",\"job_Father\":\"\",\"workplace_Father\":\"\",\"salary_Father\":\"\",\"phone_Father\":\"\",\"address_Father\":\"\"}', '2.00', '{\"fullname_Mother\":\"นางสาวไทย ใจร่ม\",\"state_Mother\":\"ถึงเเก่กรรม\",\"job_Mother\":\"\",\"workplace_Mother\":\"\",\"salary_Mother\":\"\",\"phone_Mother\":\"\",\"address_Mother\":\"\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[],\"money_Donator\":\"400\",\"who_Donators\":\"ผู้อุปการคุณ\",\"whoare_Donator\":\"พี่สาว\",\"sibling_Donator\":\"1\",\"job_Donator\":\"รับจ้าง\",\"workplace_Donator\":\"Infinity of Hosward Highschool\",\"tel_Donator\":\"0945432345\"}', 'อาจารย์บอล', '65 ม.706 ต.หินซ้อน อ.แก่งคอย จ.สระบุรี', 1, '2000-09-02', 'sapol.m@ku.th', 'สพล มหาวงศ์', '6230300940', '', 'T17 วิศวกรรมอุตสาหการและระบบ', '0945432345', 'ภาคปกติ', '3'),
(11, 5, 5, 'Profile_Essay/เกยรตบตร1.pdf', 'ID_card/เกยรตบตร2.pdf', 'Transcript/Set_eLearning.pdf', 'house_registration/เกยรตบตร3.pdf', 0, '{\"fullname_Father\":\"RONALDO\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"นักบอล\",\"workplace_Father\":\"สนามบอล\",\"salary_Father\":\"10000000\",\"phone_Father\":\"0879005636\",\"address_Father\":\"164 ม.2\"}', '3.42', '{\"fullname_Mother\":\"Maria\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"model\",\"workplace_Mother\":\"model show\",\"salary_Mother\":\"20000000\",\"phone_Mother\":\"0871465184\",\"address_Mother\":\"164 ม.2\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"-\",\"scholarship\":\"-\",\"cost\":\"-\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"กรอ.\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"}],\"money_Donator\":\"10000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'Hwan hee chan', '164 ม.2', 1, '2000-11-06', 'pongsatorn.saw@ku.th', 'พงศธร สว่างเกล้า', '6230300621', '', 'T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์', '0871465184', 'ภาคปกติ', '3'),
(12, 10, 10, 'Profile_Essay/เรยงความtestse.pdf', 'ID_card/บตรประชาชนtestse.pdf', 'Transcript/ใบรายงานผลการศกษาtestse.pdf', 'house_registration/สำเนาทะเบยนบานtestse.pdf', 0, '{\"fullname_Father\":\"พ่อ เจริญยิ่ง\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ทหาร\",\"workplace_Father\":\"กองทัพ\",\"salary_Father\":\"100000\",\"phone_Father\":\"0925359488\",\"address_Father\":\"44 ซอยศาลเจ้า\"}', '2.9', '{\"fullname_Mother\":\"แม่ เจริญยิ่ง\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"เเม่บ้าน\",\"workplace_Mother\":\"บ้าน\",\"salary_Mother\":\"10000\",\"phone_Mother\":\"0925359411\",\"address_Mother\":\"44 ซอยศาลเจ้า\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"-\",\"scholarship\":\"-\",\"cost\":\"-\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"}],\"money_Donator\":\"10000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'กรวิทย์ ออกผล', '44 ซอยศาลเจ้า', 1, '2001-08-03', 'chonlatad.c@ku.th', 'ชลทัศน์ เจริญยิ่ง', '6230300222', '', 'T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์', '0925359497', 'ภาคปกติ', '3'),
(13, 10, 10, 'Profile_Essay/เรยงความtestse_iBLjHmw.pdf', 'ID_card/บตรประชาชนtestse_jO8cMRu.pdf', 'Transcript/ใบรายงานผลการศกษาtestse_FqNCXDA.pdf', 'house_registration/สำเนาทะเบยนบานtestse_rbZg84z.pdf', 0, '{\"fullname_Father\":\"พ่อ เจริญยิ่ง\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ทหาร\",\"workplace_Father\":\"กองทัพ\",\"salary_Father\":\"100000\",\"phone_Father\":\"0925359488\",\"address_Father\":\"44 ซอยศาลเจ้า\"}', '2.9', '{\"fullname_Mother\":\"แม่ เจริญยิ่ง\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"เเม่บ้าน\",\"workplace_Mother\":\"บ้าน\",\"salary_Mother\":\"10000\",\"phone_Mother\":\"0925359411\",\"address_Mother\":\"44 ซอยศาลเจ้า\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"-\",\"scholarship\":\"-\",\"cost\":\"-\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"}],\"money_Donator\":\"10000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'กรวิทย์ ออกผล', '44 ซอยศาลเจ้า', 1, '2001-08-03', 'chonlatad.c@ku.th', 'ชลทัศน์ เจริญยิ่ง', '6230300222', '', 'T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์', '0925359497', 'ภาคปกติ', '3'),
(14, 6, 6, 'Profile_Essay/Se_oP9FCWX.pdf', 'ID_card/Se_DbXvHWW.pdf', 'Transcript/Se_Y3AMF9w.pdf', 'house_registration/Se_IVrOiMq.pdf', 0, '{\"fullname_Father\":\"พ่อ\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"รับราชการ\",\"workplace_Father\":\"รร.นร.\",\"salary_Father\":\"500000\",\"phone_Father\":\"0812345678\",\"address_Father\":\"บ้าน\"}', '3.21', '{\"fullname_Mother\":\"แม่\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"ไม่มี\",\"workplace_Mother\":\"บ้าน\",\"salary_Mother\":\"10000000\",\"phone_Mother\":\"0912345678\",\"address_Mother\":\"บ้าน\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"id\":2,\"fullName\":\"พี่\",\"education\":\"ป.จัตวา\",\"job\":\"สถาปนิก\",\"workplace\":\"BKK\"},{\"id\":3,\"fullName\":\"เรา\",\"education\":\"ป.ตรี\",\"job\":\"นิสิต\",\"workplace\":\"KUSRC\"}],\"money_Donator\":\"1000000\",\"who_Donators\":\"มารดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'กรวิทย์ ออกผล', 'บ.63 ซ.โค้งจรเข้ ถ.สุขุมวิท ต.ปากน้ำ อ.เมือง', 1, '2000-05-08', 'kitsanaphon.j@ku.th', 'กฤษณพล จุ้ยประเสริฐ', '6230300028', '', 'T13 วิศวกรรมเครื่องกลและการออกแบบ', '0951658290', 'ภาคปกติ', '3'),
(15, 6, 6, 'Profile_Essay/Se_hJRyBDi.pdf', 'ID_card/Se_YmMyV1Y.pdf', 'Transcript/Se_nXDt4hM.pdf', 'house_registration/Se_GY4C9ys.pdf', 0, '{\"fullname_Father\":\"พ่อ\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"รับราชการ\",\"workplace_Father\":\"รร.นร.\",\"salary_Father\":\"500000\",\"phone_Father\":\"0812345678\",\"address_Father\":\"บ้าน\"}', '3.21', '{\"fullname_Mother\":\"แม่\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"ไม่มี\",\"workplace_Mother\":\"บ้าน\",\"salary_Mother\":\"10000000\",\"phone_Mother\":\"0912345678\",\"address_Mother\":\"บ้าน\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"id\":2,\"fullName\":\"พี่\",\"education\":\"ป.จัตวา\",\"job\":\"สถาปนิก\",\"workplace\":\"BKK\"},{\"id\":3,\"fullName\":\"เรา\",\"education\":\"ป.ตรี\",\"job\":\"นิสิต\",\"workplace\":\"KUSRC\"}],\"money_Donator\":\"1000000\",\"who_Donators\":\"มารดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'กรวิทย์ ออกผล', 'บ.63 ซ.โค้งจรเข้ ถ.สุขุมวิท ต.ปากน้ำ อ.เมือง', 1, '2000-05-08', 'kitsanaphon.j@ku.th', 'กฤษณพล จุ้ยประเสริฐ', '6230300028', '', 'T13 วิศวกรรมเครื่องกลและการออกแบบ', '0951658290', 'ภาคปกติ', '3'),
(16, 9, 9, 'Profile_Essay/ใบชำระคาธรรมเนยมหอพก.pdf', 'ID_card/ใบชำระคาธรรมเนยมหอพก.pdf', 'Transcript/ใบชำระคาธรรมเนยมหอพก.pdf', 'house_registration/ใบชำระคาธรรมเนยมหอพก.pdf', 0, '{\"fullname_Father\":\"พ่อจ๋าาาาาา\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"เลี้ยงลูก\",\"workplace_Father\":\"บ้าน\",\"salary_Father\":\"25000\",\"phone_Father\":\"0535694554\",\"address_Father\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\"}', '2.69', '{\"fullname_Mother\":\"แม่จ๋าาาา\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"ช่วบพ่อเลี้ยงลูก\",\"workplace_Mother\":\"บ้าน\",\"salary_Mother\":\"45000\",\"phone_Mother\":\"0258963145\",\"address_Mother\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"-\",\"scholarship\":\"-\",\"cost\":\"-\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"},{\"id\":2,\"fullName\":\"ตัวเอง เป็นตัวเรา\",\"education\":\"ปริญญา\",\"job\":\"นักศึกษา\",\"workplace\":\"มหาลัย\"}],\"money_Donator\":\"50\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'อ.กุลวดี', 'ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง', 1, '2001-04-10', 'prapavit.p@ku.th', 'ประภวิษณุ์ ปัทมาสวิน', '6230300583', '', 'T17 วิศวกรรมอุตสาหการและระบบ', '0811393358', 'ภาคปกติ', '3'),
(17, 5, 5, 'Profile_Essay/เกยรตบตร1_RWRhLKb.pdf', 'ID_card/เกยรตบตร2_gUrg9aM.pdf', 'Transcript/Set_eLearning_1UP8a1X.pdf', 'house_registration/เกยรตบตร3_35DG6Zp.pdf', 0, '{\"fullname_Father\":\"RONALDO\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"นักบอล\",\"workplace_Father\":\"สนามบอล\",\"salary_Father\":\"10000000\",\"phone_Father\":\"0879005636\",\"address_Father\":\"164 ม.2\"}', '3.42', '{\"fullname_Mother\":\"Maria\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"model\",\"workplace_Mother\":\"model show\",\"salary_Mother\":\"20000000\",\"phone_Mother\":\"0871465184\",\"address_Mother\":\"164 ม.2\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"-\",\"scholarship\":\"-\",\"cost\":\"-\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"กรอ.\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"}],\"money_Donator\":\"10000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'Hwan hee chan', '164 ม.2', 1, '2000-11-06', 'pongsatorn.saw@ku.th', 'พงศธร สว่างเกล้า', '6230300621', '', 'T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์', '0871465184', 'ภาคปกติ', '3'),
(18, 1, 1, 'Profile_Essay/idcard_example-converted.pdf', 'ID_card/idcard_example-converted_oG1Tcs4.pdf', 'Transcript/ประกาศ_ทนการศกษาตอเนอง_สมาคมนสตเกาคณะวศวกรรมศาสตร.pdf', 'house_registration/home-converted_MkG67lo.pdf', 0, '{\"fullname_Father\":\"สพล มหาวงษ์\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ทหาร\",\"workplace_Father\":\"กรม\",\"salary_Father\":\"900000\",\"phone_Father\":\"0956321355\",\"address_Father\":\"กรม\"}', '4.00', '{\"fullname_Mother\":\"โจเซฟิน มหาวงษ์\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"เเม่บ้าน\",\"workplace_Mother\":\"บ้าน\",\"salary_Mother\":\"100000\",\"phone_Mother\":\"0956321377\",\"address_Mother\":\"100/901 หมู่10 บ้าน\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"id\":\"-\",\"fullName\":\"ศุภพงษ์ บุญปัญญา\",\"education\":\"กำลังศึกษา\",\"job\":\"นักศึกษา\",\"workplace\":\"มก.ศรช.\"}],\"money_Donator\":\"1000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'อ.กาญจนา', '100/901 ม10', 1, '2000-09-19', 'zxohm2543@gmail.com', 'ศุภพงษ์ บุญปัญญา', '6230300923', '', 'T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์', '0956321391', 'ภาคปกติ', '4'),
(20, 1, 1, 'Profile_Essay/ประกาศ_ทนการศกษาตอเนอง_สมาคมนสตเกาคณะวศวกรรมศาสตร_mMocuSk.pdf', 'ID_card/idcard_example-converted_YYMk8gd.pdf', 'Transcript/mq6_6230300923_aM62I6j.pdf', 'house_registration/home-converted_9kKqNQJ.pdf', 0, '{\"fullname_Father\":\"สพล มหาวงษ์\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ทหาร\",\"workplace_Father\":\"กรม\",\"salary_Father\":\"900000\",\"phone_Father\":\"0956321355\",\"address_Father\":\"กรม\"}', '4.00', '{\"fullname_Mother\":\"โจเซฟิน มหาวงษ์\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"เเม่บ้าน\",\"workplace_Mother\":\"บ้าน\",\"salary_Mother\":\"100000\",\"phone_Mother\":\"0956321377\",\"address_Mother\":\"100/901 หมู่10 บ้าน\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"id\":\"-\",\"fullName\":\"ศุภพงษ์ บุญปัญญา\",\"education\":\"กำลังศึกษา\",\"job\":\"นักศึกษา\",\"workplace\":\"มก.ศรช.\"}],\"money_Donator\":\"1000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'อ.กาญจนา', '100/901 ม10', 1, '2000-09-19', 'zxohm2543@gmail.com', 'ศุภพงษ์ บุญปัญญา', '6230300923', '', 'T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์', '0956321391', 'ภาคปกติ', '4'),
(21, 1, 1, 'Profile_Essay/home-converted.pdf', 'ID_card/idcard_example-converted_v7IlXK5.pdf', 'Transcript/mq6_6230300923_MLKoPXP.pdf', 'house_registration/home-converted_DVkblfr.pdf', 0, '{\"fullname_Father\":\"สพล มหาวงษ์\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ทหาร\",\"workplace_Father\":\"กรม\",\"salary_Father\":\"900000\",\"phone_Father\":\"0956321355\",\"address_Father\":\"กรม\"}', '4.00', '{\"fullname_Mother\":\"โจเซฟิน มหาวงษ์\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"เเม่บ้าน\",\"workplace_Mother\":\"บ้าน\",\"salary_Mother\":\"100000\",\"phone_Mother\":\"0956321377\",\"address_Mother\":\"100/901 หมู่10 บ้าน\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"id\":\"-\",\"fullName\":\"ศุภพงษ์ บุญปัญญา\",\"education\":\"กำลังศึกษา\",\"job\":\"นักศึกษา\",\"workplace\":\"มก.ศรช.\"}],\"money_Donator\":\"1000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'อ.กาญจนา', '100/901 ม10', 1, '2000-09-19', 'zxohm2543@gmail.com', 'ศุภพงษ์ บุญปัญญา', '6230300923', '', 'T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์', '0956321391', 'ภาคปกติ', '4'),
(22, 9, 9, 'Profile_Essay/ใบชำระคาธรรมเนยมหอพก_hZRW9Aq.pdf', 'ID_card/ใบชำระคาธรรมเนยมหอพก_yOfoNJr.pdf', 'Transcript/ใบชำระคาธรรมเนยมหอพก_9HRkkTK.pdf', 'house_registration/ใบชำระคาธรรมเนยมหอพก_zaKo7ap.pdf', 0, '{\"fullname_Father\":\"พ่อจ๋าาาาาา\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"เลี้ยงลูก\",\"workplace_Father\":\"บ้าน\",\"salary_Father\":\"25000\",\"phone_Father\":\"0535694554\",\"address_Father\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\"}', '2.69', '{\"fullname_Mother\":\"แม่จ๋าาาา\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"ช่วบพ่อเลี้ยงลูก\",\"workplace_Mother\":\"บ้าน\",\"salary_Mother\":\"45000\",\"phone_Mother\":\"0258963145\",\"address_Mother\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"-\",\"scholarship\":\"-\",\"cost\":\"-\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"},{\"id\":2,\"fullName\":\"ตัวเอง เป็นตัวเรา\",\"education\":\"ปริญญา\",\"job\":\"นักศึกษา\",\"workplace\":\"มหาลัย\"}],\"money_Donator\":\"50\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'อ.กุลวดี', 'ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง', 1, '2001-04-10', 'prapavit.p@ku.th', 'ประภวิษณุ์ ปัทมาสวิน', '6230300583', '', 'T17 วิศวกรรมอุตสาหการและระบบ', '0811393358', 'ภาคปกติ', '3'),
(23, 5, 5, 'Profile_Essay/เกยรตบตร1_MmukRrI.pdf', 'ID_card/เกยรตบตร2_nzLVy3Z.pdf', 'Transcript/Set_eLearning_pczfgZp.pdf', 'house_registration/เกยรตบตร3_Qxxgz4Q.pdf', 0, '{\"fullname_Father\":\"RONALDO\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"นักบอล\",\"workplace_Father\":\"สนามบอล\",\"salary_Father\":\"10000000\",\"phone_Father\":\"0879005636\",\"address_Father\":\"164 ม.2\"}', '3.42', '{\"fullname_Mother\":\"Maria\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"model\",\"workplace_Mother\":\"model show\",\"salary_Mother\":\"20000000\",\"phone_Mother\":\"0871465184\",\"address_Mother\":\"164 ม.2\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"-\",\"scholarship\":\"-\",\"cost\":\"-\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"กรอ.\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"}],\"money_Donator\":\"10000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'Hwan hee chan', '164 ม.2', 1, '2000-11-06', 'pongsatorn.saw@ku.th', 'พงศธร สว่างเกล้า', '6230300621', '', 'T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์', '0871465184', 'ภาคปกติ', '3'),
(24, 8, 8, 'Profile_Essay/test_QG4H2U1.pdf', 'ID_card/test_Z8UBMP3.pdf', 'Transcript/test_G4zVe5p.pdf', 'house_registration/test_1sqXIVD.pdf', 0, '{\"fullname_Father\":\"อเนก สู้เสงี่ยม\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ค้าขาย\",\"workplace_Father\":\"ตลาดนัดสนามบิน\",\"salary_Father\":\"15000\",\"phone_Father\":\"0819459456\",\"address_Father\":\"152/16\"}', '3.00', '{\"fullname_Mother\":\"ปลา สู้เสงี่ยม\",\"state_Mother\":\"\",\"job_Mother\":\"\",\"workplace_Mother\":\"\",\"salary_Mother\":\"\",\"phone_Mother\":\"\",\"address_Mother\":\"\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"-\",\"scholarship\":\"-\",\"cost\":\"-\"}],\"parttime_Other\":\"เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"ลูกจ้าง\",\"salary_Other\":\"2100\"}', '{\"contacts1\":[{\"id\":2,\"fullName\":\"นาย\",\"education\":\"ปริญญาตรี\",\"job\":\"ข้าราชการ\",\"workplace\":\"สำนักงานชลประธาน\"}],\"money_Donator\":\"2000\",\"who_Donators\":\"มารดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'อาจารย์กุลวดี', '152/16', 1, '2001-04-24', 'thiwat.su@ku.th', 'ทิวัตถ์ สู้เสงี่ยม', '6230300397', '', 'T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์', '0870712272', 'ภาคปกติ', '3'),
(25, 8, 8, 'Profile_Essay/6230300249_เรยงความ.pdf', 'ID_card/6230300249_สำเนาบตรประจำตวประชาชน.pdf', 'Transcript/ขอสอบปลายภาค_2_2564.pdf', 'house_registration/6230300940_สำเนาทะเบยนบาน.pdf', 0, '{\"fullname_Father\":\"อเนก สู้เสงี่ยม\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ค้าขาย\",\"workplace_Father\":\"ตลาดนัดสนามบิน\",\"salary_Father\":\"15000\",\"phone_Father\":\"0819459456\",\"address_Father\":\"152/16\"}', '3.00', '{\"fullname_Mother\":\"ปลา สู้เสงี่ยม\",\"state_Mother\":\"\",\"job_Mother\":\"\",\"workplace_Mother\":\"\",\"salary_Mother\":\"\",\"phone_Mother\":\"\",\"address_Mother\":\"\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"2563.2\",\"scholarship\":\")))\",\"cost\":\"ฟหกด\"}],\"parttime_Other\":\"เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"ลูกจ้าง\",\"salary_Other\":\"250\"}', '{\"contacts1\":[{\"id\":2,\"fullName\":\"นาย\",\"education\":\"ปริญญาตรี\",\"job\":\"ข้าราชการ\",\"workplace\":\"สำนักงานชลประธาน\"},{\"id\":2,\"fullName\":\"นางสาว Tanoshi Shizuoni\",\"education\":\"High School Academic\",\"job\":\"รับจ้าง\",\"workplace\":\"Infinity of Hosward Highschool\"}],\"money_Donator\":\"2010\",\"who_Donators\":\"ผู้อุปการคุณ\",\"whoare_Donator\":\"พี่สาว\",\"sibling_Donator\":\"2\",\"job_Donator\":\"รับจ้าง\",\"workplace_Donator\":\"workpoint\",\"tel_Donator\":\"0917799877\"}', 'อาจารย์กุลวดี', '152/16', 1, '2001-04-24', 'thiwat.su@ku.th', 'ทิวัตถ์ สู้เสงี่ยม', '6230300397', '', 'T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์', '0870712272', 'ภาคปกติ', '3'),
(26, 1, 1, 'Profile_Essay/6230300249_เรยงความ_N1zG4DO.pdf', 'ID_card/6230300249_สำเนาบตรประจำตวประชาชน_7NyG7z5.pdf', 'Transcript/123_9SihCtC.pdf', 'house_registration/Use-Case-UC1.pdf', 0, '{\"fullname_Father\":\"สพล มหาวงษ์\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ทหาร\",\"workplace_Father\":\"กรม\",\"salary_Father\":\"900000\",\"phone_Father\":\"0956321355\",\"address_Father\":\"กรม\"}', '4.00', '{\"fullname_Mother\":\"โจเซฟิน มหาวงษ์\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"เเม่บ้าน\",\"workplace_Mother\":\"บ้าน\",\"salary_Mother\":\"100000\",\"phone_Mother\":\"0956321377\",\"address_Mother\":\"100/901 หมู่10 บ้าน\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"id\":\"-\",\"fullName\":\"ศุภพงษ์ บุญปัญญา\",\"education\":\"กำลังศึกษา\",\"job\":\"นักศึกษา\",\"workplace\":\"มก.ศรช.\"}],\"money_Donator\":\"1000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'อ.กาญจนา', '100/901 ม10', 1, '2000-09-19', 'zxohm2543@gmail.com', 'ศุภพงษ์ บุญปัญญา', '6230300923', '', 'T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์', '0956321391', 'ภาคปกติ', '4'),
(27, 1, 1, 'Profile_Essay/mq6_6230300923.pdf', 'ID_card/idcard_example-converted_2YrzPr0.pdf', 'Transcript/mq6_6230300923_df5nYYk.pdf', 'house_registration/home-converted_T1cdJte.pdf', 0, '{\"fullname_Father\":\"สพล มหาวงษ์\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ทหาร\",\"workplace_Father\":\"กรม\",\"salary_Father\":\"900000\",\"phone_Father\":\"0956321355\",\"address_Father\":\"กรม\"}', '4.00', '{\"fullname_Mother\":\"โจเซฟิน มหาวงษ์\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"เเม่บ้าน\",\"workplace_Mother\":\"บ้าน\",\"salary_Mother\":\"100000\",\"phone_Mother\":\"0956321377\",\"address_Mother\":\"100/901 หมู่10 บ้าน\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"id\":\"-\",\"fullName\":\"ศุภพงษ์ บุญปัญญา\",\"education\":\"กำลังศึกษา\",\"job\":\"นักศึกษา\",\"workplace\":\"มก.ศรช.\"}],\"money_Donator\":\"1000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'อ.กาญจนา', '100/901 ม10', 1, '2000-09-19', 'zxohm2543@gmail.com', 'ศุภพงษ์ บุญปัญญา', '6230300923', '', 'T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์', '0956321391', 'ภาคปกติ', '4'),
(28, 10, 10, 'Profile_Essay/เรยงความtestse_cd8H8jJ.pdf', 'ID_card/บตรประชาชนtestse_FnrxOqp.pdf', 'Transcript/ใบรายงานผลการศกษาtestse_RJqebCy.pdf', 'house_registration/สำเนาทะเบยนบานtestse_GkzXyAw.pdf', 0, '{\"fullname_Father\":\"พ่อ เจริญยิ่ง\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ทหาร\",\"workplace_Father\":\"กองทัพ\",\"salary_Father\":\"100000\",\"phone_Father\":\"0925359488\",\"address_Father\":\"44 ซอยศาลเจ้า\"}', '2.9', '{\"fullname_Mother\":\"แม่ เจริญยิ่ง\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"เเม่บ้าน\",\"workplace_Mother\":\"บ้าน\",\"salary_Mother\":\"10000\",\"phone_Mother\":\"0925359411\",\"address_Mother\":\"44 ซอยศาลเจ้า\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"-\",\"scholarship\":\"-\",\"cost\":\"-\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"}],\"money_Donator\":\"10000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'กรวิทย์ ออกผล', '44 ซอยศาลเจ้า', 1, '2001-08-03', 'chonlatad.c@ku.th', 'ชลทัศน์ เจริญยิ่ง', '6230300222', '', 'T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์', '0925359497', 'ภาคปกติ', '3'),
(29, 4, 4, 'Profile_Essay/คมอการสมครทน_BNQGoxK.pdf', 'ID_card/คมอการสมครทน_njpYh5E.pdf', 'Transcript/คมอการสมครทน_sBCwrpK.pdf', 'house_registration/คมอการสมครทน_dVGYfex.pdf', 0, '{\"fullname_Father\":\"ปุณยวีร1 โสมาบุตร\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ไม่บอก\",\"workplace_Father\":\"ไม่บอก\",\"salary_Father\":\"1\",\"phone_Father\":\"0853669252\",\"address_Father\":\"3 waterfoot\"}', '3.33', '{\"fullname_Mother\":\"ไม่บอก\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"ไม่บอก\",\"workplace_Mother\":\"ไม่บอก\",\"salary_Mother\":\"1\",\"phone_Mother\":\"0853669252\",\"address_Mother\":\"ไม่บอก\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"-\",\"scholarship\":\"-\",\"cost\":\"-\"}],\"parttime_Other\":\"เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"ไม่บอก\",\"salary_Other\":\"1\"}', '{\"contacts1\":[{\"id\":1,\"fullName\":\"ไม่บอก\",\"education\":\"ไม่บอก\",\"job\":\"ไม่บอก\",\"workplace\":\"ไม่บอก\"}],\"money_Donator\":\"30000000000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', 'Phunyawee Somabutra', 'chon', 1, '1990-01-01', 'phunyawee.s@ku.th', 'ปุณยวีร โสมาบุตร', '6230300613', '', 'T14 วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์', '0853669252', 'ภาคปกติ', '3');

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
(1, 'file/164-1641630_bartenders-and-drink-historians-and-cocktail-obsessives-bartending.jpg', 6, 'รูปถ่ายบ้านนิสิต'),
(2, 'file/lect12.pdf', 6, 'หนังสือรับรองรายได้ครอบครัว'),
(3, 'file/T1.png', 8, 'รูปถ่ายบ้านนิสิต'),
(4, 'file/home-converted.pdf', 8, 'หนังสือรับรองรายได้ครอบครัว'),
(5, 'file/ดาวนาเมก.png', 9, 'รูปถ่ายบ้านนิสิต'),
(6, 'file/rplidar-a1m8-360-degree-laser-scanner-development-kit-datasheet-1.pdf', 9, 'หนังสือรับรองรายได้ครอบครัว'),
(7, 'file/global-share-of-electricity-generation-2019.png', 10, 'รูปถ่ายบ้านนิสิต'),
(8, 'file/ใบงานววฒนาการของมนษย.pdf', 10, 'หนังสือรับรองรายได้ครอบครัว'),
(9, 'file/บาน_setest.png', 13, 'รูปถ่ายบ้านนิสิต'),
(10, 'file/หนงสอรบรองรายไtestse.pdf', 13, 'หนังสือรับรองรายได้ครอบครัว'),
(11, 'file/keith-richards-coors-456-102610.jpg', 14, 'รูปถ่ายบ้านนิสิต'),
(12, 'file/Se.pdf', 14, 'หนังสือรับรองรายได้ครอบครัว'),
(13, 'file/Se_CAO9FgL.pdf', 15, 'หลักฐานการขาดแคลนทุนทรัพย์'),
(14, 'file/72733852_2308651319260778_355014759667466240_n.jpg', 17, 'รูปถ่ายบ้านนิสิต'),
(15, 'file/เกยรตบตร1.pdf', 17, 'หนังสือรับรองรายได้ครอบครัว'),
(16, 'file/mq6_6230300923.pdf', 20, 'หลักฐานการขาดแคลนทุนทรัพย์'),
(17, 'file/mq6_6230300923_OcVKPMn.pdf', 21, 'เอกสารแสดงขาดแคลนทุนทรัพย์'),
(18, 'file/ใบชำระคาธรรมเนยมหอพก.pdf', 22, 'เอกสารแสดงขาดแคลนทุนทรัพย์'),
(19, 'file/เกยรตบตร1_wou3Nhp.pdf', 23, 'หลักฐานการขาดแคลนทุนทรัพย์'),
(20, 'file/test.pdf', 24, 'เรียงความ'),
(21, 'file/list-2389219_1280.png', 24, 'สำเนาบัตรประชาชน'),
(22, 'file/list-2389219_1280_TzYjEO0.png', 24, 'สำเนาทะเบียนบ้าน'),
(23, 'file/test_7v0Nhdz.pdf', 24, 'คะเเนน GPA'),
(24, 'file/6230300249_สำเนาบตรประจำตวประชาชน.pdf', 25, 'สำเนาทะเบียนบ้าน'),
(25, 'file/weighted_intervals.pdf', 26, 'สำเนาทะเบียนบ้าน');

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
(1, 'image/โอมเอง.jpg', 'ศุภพงษ์ บุญปัญญา', '2000-09-19', 'T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์', '0956321391', '4.00', '6230300923', '4', 'ภาคปกติ', 'zxohm2543@gmail.com', '100/901 ม10', 'อ.กาญจนา', '{\"fullname_Father\":\"สพล มหาวงษ์\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ทหาร\",\"workplace_Father\":\"กรม\",\"salary_Father\":\"900000\",\"phone_Father\":\"0956321355\",\"address_Father\":\"กรม\"}', '{\"fullname_Mother\":\"โจเซฟิน มหาวงษ์\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"เเม่บ้าน\",\"workplace_Mother\":\"บ้าน\",\"salary_Mother\":\"100000\",\"phone_Mother\":\"0956321377\",\"address_Mother\":\"100/901 หมู่10 บ้าน\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts1\":[{\"id\":\"-\",\"fullName\":\"ศุภพงษ์ บุญปัญญา\",\"education\":\"กำลังศึกษา\",\"job\":\"นักศึกษา\",\"workplace\":\"มก.ศรช.\"}],\"money_Donator\":\"1000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', '{\"contacts2\":[],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', 1),
(2, 'image/20220410_234843.jpg', 'สพล มหาวงศ์', '2000-09-02', 'T17 วิศวกรรมอุตสาหการและระบบ', '0945432345', '2.00', '6230300940', '3', 'ภาคปกติ', 'sapol.m@ku.th', '65 ม.706 ต.หินซ้อน อ.แก่งคอย จ.สระบุรี', 'อาจารย์บอล', '{\"fullname_Father\":\"นายพิษณุ โลก\",\"state_Father\":\"ถึงเเก่กรรม\",\"job_Father\":\"\",\"workplace_Father\":\"\",\"salary_Father\":\"\",\"phone_Father\":\"\",\"address_Father\":\"\"}', '{\"fullname_Mother\":\"นางสาวไทย ใจร่ม\",\"state_Mother\":\"ถึงเเก่กรรม\",\"job_Mother\":\"\",\"workplace_Mother\":\"\",\"salary_Mother\":\"\",\"phone_Mother\":\"\",\"address_Mother\":\"\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts1\":[],\"money_Donator\":\"400\",\"who_Donators\":\"ผู้อุปการคุณ\",\"whoare_Donator\":\"พี่สาว\",\"sibling_Donator\":\"1\",\"job_Donator\":\"รับจ้าง\",\"workplace_Donator\":\"Infinity of Hosward Highschool\",\"tel_Donator\":\"0945432345\"}', '{\"contacts2\":[],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', 1),
(3, 'image/owner.jpg', 'คุณภัทร มีเจริญ', '2022-04-10', 'T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์', '0922483242', '3.5', '6230300141', '3', 'ภาคปกติ', 'khunnaphat.m@ku.th', '160/22 หมู่บ้่าน ชัยพฤกษ์2 ซอย4 ถนน 345', 'กรวิทย์ ออกผล', '{\"fullname_Father\":\"พ่อว\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"พนง.บริษัท\",\"workplace_Father\":\"ไทยแลนด์\",\"salary_Father\":\"1000000\",\"phone_Father\":\"0922483242\",\"address_Father\":\"123/456 Sriracha Chonburi\"}', '{\"fullname_Mother\":\"แมร่\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"พนง.บริษัท\",\"workplace_Mother\":\"ไทยแลนด์\",\"salary_Mother\":\"1000000\",\"phone_Mother\":\"0922483242\",\"address_Mother\":\"123/456 Sriracha Chonburi\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts1\":[{\"id\":2,\"fullName\":\"นาย\",\"education\":\"ป.ตรี\",\"job\":\"นักศึกษา\",\"workplace\":\"มก.ศรช.\"}],\"money_Donator\":\"1000000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"-\",\"scholarship\":\"-\",\"cost\":\"-\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', 1),
(4, 'image/fb_pro.jpg', 'ปุณยวีร โสมาบุตร', '1990-01-01', 'T14 วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์', '0853669252', '3.33', '6230300613', '3', 'ภาคปกติ', 'phunyawee.s@ku.th', 'chon', 'Phunyawee Somabutra', '{\"fullname_Father\":\"ปุณยวีร1 โสมาบุตร\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ไม่บอก\",\"workplace_Father\":\"ไม่บอก\",\"salary_Father\":\"1\",\"phone_Father\":\"0853669252\",\"address_Father\":\"3 waterfoot\"}', '{\"fullname_Mother\":\"ไม่บอก\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"ไม่บอก\",\"workplace_Mother\":\"ไม่บอก\",\"salary_Mother\":\"1\",\"phone_Mother\":\"0853669252\",\"address_Mother\":\"ไม่บอก\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts1\":[{\"id\":1,\"fullName\":\"ไม่บอก\",\"education\":\"ไม่บอก\",\"job\":\"ไม่บอก\",\"workplace\":\"ไม่บอก\"}],\"money_Donator\":\"30000000000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"-\",\"scholarship\":\"-\",\"cost\":\"-\"}],\"parttime_Other\":\"เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"ไม่บอก\",\"salary_Other\":\"1\"}', 1),
(5, 'image/son-1609920802-3053-1609920999.jpg', 'พงศธร สว่างเกล้า', '2000-11-06', 'T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์', '0871465184', '3.42', '6230300621', '3', 'ภาคปกติ', 'pongsatorn.saw@ku.th', '164 ม.2', 'Hwan hee chan', '{\"fullname_Father\":\"RONALDO\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"นักบอล\",\"workplace_Father\":\"สนามบอล\",\"salary_Father\":\"10000000\",\"phone_Father\":\"0879005636\",\"address_Father\":\"164 ม.2\"}', '{\"fullname_Mother\":\"Maria\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"model\",\"workplace_Mother\":\"model show\",\"salary_Mother\":\"20000000\",\"phone_Mother\":\"0871465184\",\"address_Mother\":\"164 ม.2\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"}],\"money_Donator\":\"10000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"-\",\"scholarship\":\"-\",\"cost\":\"-\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"กรอ.\",\"job_Other\":\"\",\"salary_Other\":\"\"}', 1),
(6, 'image/1.jpg', 'กฤษณพล จุ้ยประเสริฐ', '2000-05-08', 'T13 วิศวกรรมเครื่องกลและการออกแบบ', '0951658290', '3.21', '6230300028', '3', 'ภาคปกติ', 'kitsanaphon.j@ku.th', 'บ.63 ซ.โค้งจรเข้ ถ.สุขุมวิท ต.ปากน้ำ อ.เมือง', 'กรวิทย์ ออกผล', '{\"fullname_Father\":\"พ่อ\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"รับราชการ\",\"workplace_Father\":\"รร.นร.\",\"salary_Father\":\"500000\",\"phone_Father\":\"0812345678\",\"address_Father\":\"บ้าน\"}', '{\"fullname_Mother\":\"แม่\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"ไม่มี\",\"workplace_Mother\":\"บ้าน\",\"salary_Mother\":\"10000000\",\"phone_Mother\":\"0912345678\",\"address_Mother\":\"บ้าน\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts1\":[{\"id\":2,\"fullName\":\"พี่\",\"education\":\"ป.จัตวา\",\"job\":\"สถาปนิก\",\"workplace\":\"BKK\"},{\"id\":3,\"fullName\":\"เรา\",\"education\":\"ป.ตรี\",\"job\":\"นิสิต\",\"workplace\":\"KUSRC\"}],\"money_Donator\":\"1000000\",\"who_Donators\":\"มารดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', '{\"contacts2\":[],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', 1),
(7, 'image/01.jpg', 'ชลสิทธิ์ สุธรรมา', '2000-01-06', 'T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์', '0070070007', '2.56', '6230300249', '3', 'ภาคปกติ', 'chollasit.su@ku.th', '150/14 หมู่ที่ 2 ต.ตะเคียนเตี้ย', 'จารย์', '{\"fullname_Father\":\"พ่อพ่อ\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ธุรกิจส่วนตัว\",\"workplace_Father\":\"ธุรกิจส่วนตัว\",\"salary_Father\":\"3000\",\"phone_Father\":\"03164612\",\"address_Father\":\"11020\"}', '{\"fullname_Mother\":\"แม่แม่\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"ธุรกิจส่วนตัว\",\"workplace_Mother\":\"ธุรกิจส่วนตัว\",\"salary_Mother\":\"20315659\",\"phone_Mother\":\"102546259\",\"address_Mother\":\"110255\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"}],\"money_Donator\":\"3000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"-\",\"scholarship\":\"-\",\"cost\":\"-\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', 1),
(8, 'image/1_EI7jwbG.jpg', 'ทิวัตถ์ สู้เสงี่ยม', '2001-04-24', 'T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์', '0870712272', '3.00', '6230300397', '3', 'ภาคปกติ', 'thiwat.su@ku.th', '152/16', 'อาจารย์กุลวดี', '{\"fullname_Father\":\"อเนก สู้เสงี่ยม\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ค้าขาย\",\"workplace_Father\":\"ตลาดนัดสนามบิน\",\"salary_Father\":\"15000\",\"phone_Father\":\"0819459456\",\"address_Father\":\"152/16\"}', '{\"fullname_Mother\":\"ปลา สู้เสงี่ยม\",\"state_Mother\":\"\",\"job_Mother\":\"\",\"workplace_Mother\":\"\",\"salary_Mother\":\"\",\"phone_Mother\":\"\",\"address_Mother\":\"\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts1\":[{\"id\":2,\"fullName\":\"นาย\",\"education\":\"ปริญญาตรี\",\"job\":\"ข้าราชการ\",\"workplace\":\"สำนักงานชลประธาน\"},{\"id\":2,\"fullName\":\"นางสาว Tanoshi Shizuoni\",\"education\":\"High School Academic\",\"job\":\"รับจ้าง\",\"workplace\":\"Infinity of Hosward Highschool\"}],\"money_Donator\":\"2010\",\"who_Donators\":\"ผู้อุปการคุณ\",\"whoare_Donator\":\"พี่สาว\",\"sibling_Donator\":\"2\",\"job_Donator\":\"รับจ้าง\",\"workplace_Donator\":\"workpoint\",\"tel_Donator\":\"0917799877\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"2563.2\",\"scholarship\":\")))\",\"cost\":\"ฟหกด\"}],\"parttime_Other\":\"เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"ลูกจ้าง\",\"salary_Other\":\"250\"}', 1),
(9, 'image/best.jpg', 'ประภวิษณุ์ ปัทมาสวิน', '2001-04-10', 'T17 วิศวกรรมอุตสาหการและระบบ', '0811393358', '2.69', '6230300583', '3', 'ภาคปกติ', 'prapavit.p@ku.th', 'ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง', 'อ.กุลวดี', '{\"fullname_Father\":\"พ่อจ๋าาาาาา\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"เลี้ยงลูก\",\"workplace_Father\":\"บ้าน\",\"salary_Father\":\"25000\",\"phone_Father\":\"0535694554\",\"address_Father\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\"}', '{\"fullname_Mother\":\"แม่จ๋าาาา\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"ช่วบพ่อเลี้ยงลูก\",\"workplace_Mother\":\"บ้าน\",\"salary_Mother\":\"45000\",\"phone_Mother\":\"0258963145\",\"address_Mother\":\"ซอยลาดกระบัง 30/1 ถนน ลาดกระบัง\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"},{\"id\":2,\"fullName\":\"ตัวเอง เป็นตัวเรา\",\"education\":\"ปริญญา\",\"job\":\"นักศึกษา\",\"workplace\":\"มหาลัย\"}],\"money_Donator\":\"50\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"-\",\"scholarship\":\"-\",\"cost\":\"-\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', 1),
(10, 'image/81272950_2581971802044272_3308028831226396672_n.jpg', 'ชลทัศน์ เจริญยิ่ง', '2001-08-03', 'T12 วิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์', '0925359497', '2.9', '6230300222', '3', 'ภาคปกติ', 'chonlatad.c@ku.th', '44 ซอยศาลเจ้า', 'กรวิทย์ ออกผล', '{\"fullname_Father\":\"พ่อ เจริญยิ่ง\",\"state_Father\":\"มีชีวิต\",\"job_Father\":\"ทหาร\",\"workplace_Father\":\"กองทัพ\",\"salary_Father\":\"100000\",\"phone_Father\":\"0925359488\",\"address_Father\":\"44 ซอยศาลเจ้า\"}', '{\"fullname_Mother\":\"แม่ เจริญยิ่ง\",\"state_Mother\":\"มีชีวิต\",\"job_Mother\":\"เเม่บ้าน\",\"workplace_Mother\":\"บ้าน\",\"salary_Mother\":\"10000\",\"phone_Mother\":\"0925359411\",\"address_Mother\":\"44 ซอยศาลเจ้า\",\"mariage_Mother\":\"อยู่ด้วยกัน\",\"mariage_Seperate_Reason\":\"\"}', '{\"contacts1\":[{\"education\":\"-\",\"fullName\":\"-\",\"id\":\"-\",\"job\":\"-\",\"workplace\":\"-\"}],\"money_Donator\":\"10000\",\"who_Donators\":\"บิดา\",\"whoare_Donator\":\"\",\"sibling_Donator\":\"\",\"job_Donator\":\"\",\"workplace_Donator\":\"\",\"tel_Donator\":\"\"}', '{\"contacts2\":[{\"id\":\"-\",\"schoolyear\":\"-\",\"scholarship\":\"-\",\"cost\":\"-\"}],\"parttime_Other\":\"ไม่เคย\",\"takeloan_Other\":\"ไม่ได้กู้ยืม\",\"job_Other\":\"\",\"salary_Other\":\"\"}', 1);

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
(1, 'Suphapong BUNPUNYA', 'Dev', 'suphapong.b@ku.th', 'TL02xsFh5IH4HL24QSf3kEbePUBDBL', 'J1Wo0Egc4v8PE4ZgRQ2gDHQiSJxt6F'),
(2, 'Sapol MAHAWONG', 'Admin', 'sapol.m@ku.th', 'iExj3T2FUAmg0Kq3nv6uL0qbqnznxJ', 'qNHUvh0P6uNfcom0QTEJNEJv3FBGH4'),
(3, 'Khunnapat MEECHAROEN', 'Dev', 'khunnaphat.m@ku.th', 'RceBvvHzPPUhL7qpHCnexDmWJqHS1M', 'B0OdXm8jYSNV8TTFEfavyDKqQVnGWG'),
(4, 'Phunyawee SOMABUTRA', 'Dev', 'phunyawee.s@ku.th', 'kXUCqFFtjBaopENgyAGK859Ml7SSsl', 'EV0UYA1SSe7UF0i8R3EdxVktNK0aTH'),
(5, 'Pongsatorn SAWANGKLAO', 'Dev', 'pongsatorn.saw@ku.th', 'sZyOXi6kKroQUdzNxucpkypBtYZakF', 'wN2QzjHCL9JpHh1P31ynlgSKaLrFat'),
(6, 'Kitsanaphon JUIPRASERT', 'Dev', 'kitsanaphon.j@ku.th', 'lycIP8IgWxyq4euwYtBQH0bLBclY4i', 'maAV1LoUj10yKAP9wOSuH9NHOhsmKy'),
(7, 'Chollasit SUTHANMA', 'Dev', 'chollasit.su@ku.th', '0Re6pyEcotmrIY5BaNb7tFDWvQ54hl', '5J3EGguXwE2fOPcunUi9WlxZIt1j7t'),
(8, 'Thiwat SUSANGIAM', 'User', 'thiwat.su@ku.th', 'gxkN37gSLDWMloB4IWAptEp87ghZ1r', 'KU8ilWyrLvP3JZ5A3MV6gapywbEbqL'),
(9, 'Prapavit PATTAMASAWIN', 'User', 'prapavit.p@ku.th', 'clF882WqKdA3xBtxsOvtq96re6r9lO', 'i7U7QQxOnOnaIhoVMKU6OwVuPLWsMi'),
(10, 'Chonlatad CHAROENYING', 'Dev', 'chonlatad.c@ku.th', 'veAjZcKaHIQpTBlff8KzrgeoNtxqRW', 'CCoBjCklnt6bQRIRxNJnBcXqS6uRvw');

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
(3, 'หน่วยทุนการศึกษา กองกิจการนิสิต สัมภาษณ์และคัดเลือก', 'หน่วยทุนการศึกษา กองกิจการนิสิต สัมภาษณ์และคัดเลือก', 5, 4),
(4, 'ครอบครัวมีปัจจัยฉุกเฉินที่นักเรียนเสี่ยงจะเรียนไม่จบ', 'ครอบครัวมีปัจจัยฉุกเฉินที่นักเรียนเสี่ยงจะเรียนไม่จบ', 5, 3),
(5, 'ลักษณะสภาพบ้าน', 'ลักษณะสภาพบ้านเป็นอย่างไร', 4, 5),
(6, 'ความเหมาะสมของรายได้กับจำนวนสมาชิก', 'ความเหมาะสมของรายได้กับจำนวนสมาชิก', 5, 5),
(7, 'เกรดเฉลี่ยสะสม', 'ความเหมาะสมของรายได้กับจำนวนสมาชิก', 4, 5),
(8, 'จิตอาสาในชุนชน', 'สำหรับการพิจารณาความมีน้ำใจช่วยเลือชุมชนของนิสิต', 5, 8),
(9, 'กิจกรรมยามว่าง', 'กิจกรรมยามว่างที่ตรวจสอบนิสิตในการพิจาณาจากชีวิตประจำวันของนิสิต', 4, 8),
(10, 'ความประพฤติ', 'แก้ไขหนึ่ง', 4, 5),
(12, 'ความประพฤติ', 'เเ', 2, 3),
(13, 'เกรดเฉลี่ย', 'rr', 2, 6),
(14, 'เกณฑ์เอสอี1-1', 'ทดสอบเกณฑ์แบบที่1', 5, 11),
(15, 'เกณฑ์เอสอี1-2', 'น้ำหนัก 2', 2, 11);

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
(136, 'Can view commiteevote', 34, 'view_commiteevote'),
(137, 'Can add tutorial register student', 35, 'add_tutorialregisterstudent'),
(138, 'Can change tutorial register student', 35, 'change_tutorialregisterstudent'),
(139, 'Can delete tutorial register student', 35, 'delete_tutorialregisterstudent'),
(140, 'Can view tutorial register student', 35, 'view_tutorialregisterstudent');

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
(17, '!yhE60jPmdreP17q3YmVPzQcJHyG0ysJzEFFoDRba', NULL, 0, 'phunyaweesomabutra2544', 'Master', 'M', 'phunyaweesomabutra2544@gmail.com', 0, 1, '2022-03-26 14:21:59.058120'),
(18, '!mBaNOhllqHv4qKj2vHSrFd2qHZiuGgvZnYnhfdlC', NULL, 0, '123.boyon2012', 'พงศธร', 'สว่างเกล้า', '123.boyon2012@gmail.com', 0, 1, '2022-04-11 06:26:39.604452');

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
(35, 'app', 'tutorialregisterstudent'),
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
(65, 'app', '0019_rename_point_weightcriteriapoint_weightpoint', '2022-04-01 17:13:57.631710'),
(66, 'app', '0020_managescholarship_statusscholar', '2022-04-02 17:54:08.032520'),
(67, 'app', '0021_managescholarship_processstatus', '2022-04-03 14:01:37.480783'),
(68, 'app', '0022_alter_studentfilefile_file', '2022-04-04 10:53:48.795959'),
(69, 'app', '0023_alter_studentfilefile_file', '2022-04-04 10:56:25.209509'),
(70, 'app', '0024_auto_20220404_1823', '2022-04-04 11:24:15.339629'),
(71, 'app', '0025_auto_20220405_0007', '2022-04-04 17:07:32.514831'),
(72, 'app', '0026_managescholarship_normalorcontinue', '2022-04-06 10:42:56.162308'),
(73, 'app', '0027_kuy2', '2022-04-06 15:20:05.832566'),
(74, 'app', '0028_kuy2', '2022-04-06 16:27:40.358538'),
(75, 'app', '0029_kuy2', '2022-04-09 13:51:17.517059'),
(76, 'app', '0030_kuy2', '2022-04-09 16:05:10.243835'),
(77, 'app', '0031_kuy2', '2022-04-09 18:46:23.168633'),
(78, 'app', '0032_kuy2', '2022-04-09 19:20:54.427327'),
(79, 'app', '0033_kuy2', '2022-04-10 11:39:27.017915'),
(80, 'app', '0034_kuy2', '2022-04-10 20:33:56.710560'),
(81, 'app', '0035_se', '2022-04-15 09:19:45.176200');

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
(82, 'k54bV7GAvj47zbohWUoTF2xuZa8RoO', '2022-04-01 19:46:21.554769', 'read write', 1, 11, '2022-04-01 09:46:21.555766', '2022-04-01 09:46:21.555766', NULL, NULL),
(83, 'XfftstWbcgC5ac7ofPmLPwJNiFjqqx', '2022-04-02 05:34:56.290144', 'read write', 1, 5, '2022-04-01 19:34:56.291141', '2022-04-01 19:34:56.291141', NULL, NULL),
(84, '6VdQNDqjKlfF5BLZC2Dg52BdKa4GNU', '2022-04-02 18:48:36.323088', 'read write', 1, 13, '2022-04-02 08:48:36.324087', '2022-04-02 08:48:36.324087', NULL, NULL),
(85, 'GYwesqo6S5z212Cch9Lbvp5UJCKGDB', '2022-04-02 18:58:02.417988', 'read write', 1, 5, '2022-04-02 08:58:02.418984', '2022-04-02 08:58:02.418984', NULL, NULL),
(86, 'bdVYkKQYo3kBtn2pHLMigDAI4aGnBY', '2022-04-02 23:32:27.098908', 'read write', 1, 11, '2022-04-02 13:32:27.098908', '2022-04-02 13:32:27.098908', NULL, NULL),
(87, 'hKNP7GLgVZJqnJVpHK5X3HMDEAAYQL', '2022-04-02 23:48:26.246922', 'read write', 1, 12, '2022-04-02 13:48:26.246922', '2022-04-02 13:48:26.246922', NULL, NULL),
(88, '8OsJQpDn1yW9diZHL43PDrwURU9hng', '2022-04-03 02:13:39.179761', 'read write', 1, 6, '2022-04-02 16:13:39.179761', '2022-04-02 16:13:39.179761', NULL, NULL),
(89, 'xwCSRspu3H4O917YasHj42SCXpKpX3', '2022-04-03 03:14:59.678783', 'read write', 1, 7, '2022-04-02 17:14:59.679780', '2022-04-02 17:14:59.679780', NULL, NULL),
(90, 'CsC507B2y2OsXVoBuwhUXSdoYE9aS9', '2022-04-03 03:55:43.288001', 'read write', 1, 14, '2022-04-02 17:55:43.288001', '2022-04-02 17:55:43.288001', NULL, NULL),
(91, '0ERAFTfujDZkECEt6n48k3Tb9v1HgT', '2022-04-03 16:46:32.515148', 'read write', 1, 11, '2022-04-03 06:46:32.515148', '2022-04-03 06:46:32.515148', NULL, NULL),
(92, 'VdFqkLGV18g6RgBtHqM05SpIiYv5v1', '2022-04-03 17:40:03.182570', 'read write', 1, 6, '2022-04-03 07:40:03.182570', '2022-04-03 07:40:03.182570', NULL, NULL),
(93, 'gmYylEcXQuNJD0im1tltwFf064TZVr', '2022-04-03 18:27:16.042160', 'read write', 1, 16, '2022-04-03 08:27:16.042160', '2022-04-03 08:27:16.042160', NULL, NULL),
(94, 'ikJDvBoBI3WhmbO3SEUe8o868JdP4i', '2022-04-03 19:16:59.439279', 'read write', 1, 5, '2022-04-03 09:16:59.439279', '2022-04-03 09:16:59.439279', NULL, NULL),
(95, 'hNRm0udgXSR7x2MxAr7BhHbTeyx3aJ', '2022-04-03 19:56:36.888902', 'read write', 1, 12, '2022-04-03 09:56:36.888902', '2022-04-03 09:56:36.888902', NULL, NULL),
(96, 'Rsm1cSAqrfLXNvLmJw0L7gfASlZAVw', '2022-04-03 20:09:08.359760', 'read write', 1, 3, '2022-04-03 10:09:08.359760', '2022-04-03 10:09:08.359760', NULL, NULL),
(97, 'TFz5rmtechiuddxBI8ES1bF0a2ky6g', '2022-04-03 23:32:54.327346', 'read write', 1, 13, '2022-04-03 13:32:54.327346', '2022-04-03 13:32:54.327346', NULL, NULL),
(98, '88rE0vRA6sgDTdpjEpP0hBiobfo7Us', '2022-04-04 00:37:21.653034', 'read write', 1, 14, '2022-04-03 14:37:21.653034', '2022-04-03 14:37:21.653034', NULL, NULL),
(99, 'pp7DfmDoajUErjbBe7ypTml6HCeXgq', '2022-04-04 00:37:25.595088', 'read write', 1, 7, '2022-04-03 14:37:25.595088', '2022-04-03 14:37:25.595088', NULL, NULL),
(100, 'AJaK6dzsfibO2jtrPM446oFGyCeUcj', '2022-04-04 03:19:20.044411', 'read write', 1, 11, '2022-04-03 17:19:20.044411', '2022-04-03 17:19:20.044411', NULL, NULL),
(101, 'cmtZRgXH8ilOh8Wcehpk15Yb8r3VBU', '2022-04-04 17:33:20.077891', 'read write', 1, 2, '2022-04-04 07:33:20.078904', '2022-04-04 07:33:20.078904', NULL, NULL),
(102, 'j76rwIBDCs0van8GcLT7HwX9XJJ52y', '2022-04-04 18:00:44.122317', 'read write', 1, 4, '2022-04-04 08:00:44.122317', '2022-04-04 08:00:44.122317', NULL, NULL),
(103, 'LmLfHXQ9b5XmGMDD7V2CZzQI8P3thl', '2022-04-04 19:18:09.237709', 'read write', 1, 3, '2022-04-04 09:18:09.237709', '2022-04-04 09:18:09.237709', NULL, NULL),
(104, 'Sh5Bq3PAT5LHv4lljx24FHnuhg7cgz', '2022-04-04 19:21:10.760232', 'read write', 1, 6, '2022-04-04 09:21:10.761229', '2022-04-04 09:21:10.761229', NULL, NULL),
(105, 'cKwv1ui9AbagoVtry2CDGSFLDv37By', '2022-04-04 19:26:57.249480', 'read write', 1, 13, '2022-04-04 09:26:57.249480', '2022-04-04 09:26:57.249480', NULL, NULL),
(106, 'QgQu5CUQz4FugHTHVfZsdndfRrBMeD', '2022-04-04 20:03:42.138231', 'read write', 1, 5, '2022-04-04 10:03:42.138231', '2022-04-04 10:03:42.138231', NULL, NULL),
(107, '2DbM2KTcCUFj8OvHh9Bkuo2mSCKnqE', '2022-04-05 00:25:29.120228', 'read write', 1, 14, '2022-04-04 14:25:29.121225', '2022-04-04 14:25:29.121225', NULL, NULL),
(108, '2slW9zAE0J3zaFBgAQmH9zGBdXIZTf', '2022-04-05 00:31:03.440283', 'read write', 1, 11, '2022-04-04 14:31:03.441281', '2022-04-04 14:31:03.441281', NULL, NULL),
(109, '1CSafDtKuXN14YDQOgZgwD4xw9bn6t', '2022-04-05 00:31:17.462961', 'read write', 1, 16, '2022-04-04 14:31:17.463959', '2022-04-04 14:31:17.463959', NULL, NULL),
(110, 'DwPUdR8ABotQl6yLBOiZUVaesJW1BD', '2022-04-05 00:34:16.245677', 'read write', 1, 12, '2022-04-04 14:34:16.246675', '2022-04-04 14:34:16.246675', NULL, NULL),
(111, 'hekmuSyhU78AWn74OKIRSA91XNa04o', '2022-04-06 00:22:13.158283', 'read write', 1, 11, '2022-04-05 14:22:13.158283', '2022-04-05 14:22:13.158283', NULL, NULL),
(112, 'oT8VX2H1L8TAPy68J12Q82YHJoXLCF', '2022-04-06 00:32:17.457407', 'read write', 1, 13, '2022-04-05 14:32:17.457407', '2022-04-05 14:32:17.457407', NULL, NULL),
(113, '7DiSnok0p9OF4srs2UxmXqguDQ1LhM', '2022-04-06 00:45:51.198555', 'read write', 1, 14, '2022-04-05 14:45:51.199552', '2022-04-05 14:45:51.199552', NULL, NULL),
(114, 'ilL5m61APHK43yze01B7tYI0lRlJfB', '2022-04-06 01:09:53.543661', 'read write', 1, 2, '2022-04-05 15:09:53.544658', '2022-04-05 15:09:53.544658', NULL, NULL),
(115, 'Jxqay0tlaked4SttrZ3Y6gKJ0NsfIr', '2022-04-06 01:12:34.701871', 'read write', 1, 5, '2022-04-05 15:12:34.701871', '2022-04-05 15:12:34.701871', NULL, NULL),
(116, 'yXSOpYMQqpeK0T96DOVVCYrONJqXK4', '2022-04-06 01:37:46.895463', 'read write', 1, 16, '2022-04-05 15:37:46.896463', '2022-04-05 15:37:46.896463', NULL, NULL),
(117, 'wpX5zIdlUZ55lrgpYseZw9A4qT5xh6', '2022-04-06 02:21:54.358492', 'read write', 1, 6, '2022-04-05 16:21:54.358492', '2022-04-05 16:21:54.358492', NULL, NULL),
(118, 'VzFC6iw98eMag5a0rpe7ZjsztI72mD', '2022-04-06 20:40:19.869548', 'read write', 1, 2, '2022-04-06 10:40:19.869548', '2022-04-06 10:40:19.869548', NULL, NULL),
(119, 'FKHEcIN43Sax1ePusgwrsoDawDNbUh', '2022-04-06 21:00:18.600987', 'read write', 1, 12, '2022-04-06 11:00:18.601984', '2022-04-06 11:00:18.601984', NULL, NULL),
(120, 'ggA22WFIvD3DWV6817qew0BDDS8VDX', '2022-04-06 22:16:49.459298', 'read write', 1, 13, '2022-04-06 12:16:49.459298', '2022-04-06 12:16:49.459298', NULL, NULL),
(121, 'j8exN3cwKZ9B5NcohDGIqn5JAESPiG', '2022-04-06 22:32:46.715263', 'read write', 1, 5, '2022-04-06 12:32:46.715263', '2022-04-06 12:32:46.715263', NULL, NULL),
(122, 's8N6BDmkvhI6blSXZuGuB3HJxw9Bk2', '2022-04-07 00:07:27.116962', 'read write', 1, 14, '2022-04-06 14:07:27.117965', '2022-04-06 14:07:27.117965', NULL, NULL),
(123, 'zWwuW0EcsQNjV3eKzV9wjr64NcRK9q', '2022-04-07 01:23:39.457258', 'read write', 1, 11, '2022-04-06 15:23:39.457258', '2022-04-06 15:23:39.457258', NULL, NULL),
(124, 'kmo1xKMHfPTZVK9FeKk3xCZ6EvmMBR', '2022-04-07 01:35:51.567373', 'read write', 1, 6, '2022-04-06 15:35:51.568370', '2022-04-06 15:35:51.568370', NULL, NULL),
(125, '8v8cGsepkw2VBZtceedP42cRT8sC7a', '2022-04-07 18:36:51.550918', 'read write', 1, 13, '2022-04-07 08:36:51.551924', '2022-04-07 08:36:51.551924', NULL, NULL),
(126, 'txcfBAD2gE32I2DUw5ImfnzpzfLh07', '2022-04-07 18:46:50.317620', 'read write', 1, 5, '2022-04-07 08:46:50.317620', '2022-04-07 08:46:50.317620', NULL, NULL),
(127, 'if3UTUvLRgCxWSA7PxLXZYsjbBubxS', '2022-04-07 23:44:15.128127', 'read write', 1, 12, '2022-04-07 13:44:15.128127', '2022-04-07 13:44:15.128127', NULL, NULL),
(128, 'IdEejlbD9gBr0slSXgiou7NlOrUHOe', '2022-04-08 00:34:55.635743', 'read write', 1, 14, '2022-04-07 14:34:55.636739', '2022-04-07 14:34:55.636739', NULL, NULL),
(129, 'jSbx9Dhy0UAoEuw94mCPzgG2uoUQnP', '2022-04-08 00:59:20.271620', 'read write', 1, 11, '2022-04-07 14:59:20.271620', '2022-04-07 14:59:20.271620', NULL, NULL),
(130, 'rPyZ2Eca46xPFCmgkh40VC7QzIyPPL', '2022-04-08 01:47:26.473863', 'read write', 1, 6, '2022-04-07 15:47:26.473863', '2022-04-07 15:47:26.473863', NULL, NULL),
(131, 'MgsLajMQ2SZPYSVSfbbeFiTbKd6rb1', '2022-04-08 03:45:29.201288', 'read write', 1, 7, '2022-04-07 17:45:29.201288', '2022-04-07 17:45:29.201288', NULL, NULL),
(132, 'Im4lpeexrxfDkxdhzLOkR86u64tkaj', '2022-04-09 16:36:13.113359', 'read write', 1, 13, '2022-04-09 06:36:13.113359', '2022-04-09 06:36:13.113359', NULL, NULL),
(133, '8OoHyN97tHZBkw6AWZ8mK1FOod3qIN', '2022-04-09 16:46:11.484581', 'read write', 1, 14, '2022-04-09 06:46:11.484581', '2022-04-09 06:46:11.484581', NULL, NULL),
(134, 'mdyExiUcddnGPZhBzXXILDMKd5n2To', '2022-04-09 17:25:06.737917', 'read write', 1, 16, '2022-04-09 07:25:06.737917', '2022-04-09 07:25:06.737917', NULL, NULL),
(135, 'bAnPgxJKankOXRkAP2kHjqPfxyYB5A', '2022-04-09 17:36:15.746840', 'read write', 1, 11, '2022-04-09 07:36:15.747836', '2022-04-09 07:36:15.747836', NULL, NULL),
(136, 'nmJ91FPPQyx9gbwksClFzrlXtSDdvM', '2022-04-09 17:36:29.041983', 'read write', 1, 12, '2022-04-09 07:36:29.041983', '2022-04-09 07:36:29.041983', NULL, NULL),
(137, 'C2FLpR3QJ89ixEzFpl5rNIoiCmWd3t', '2022-04-09 17:41:51.732119', 'read write', 1, 6, '2022-04-09 07:41:51.732119', '2022-04-09 07:41:51.732119', NULL, NULL),
(138, 'WkAd19kfI0uvGqGswxi8nFvsVbssF4', '2022-04-09 18:05:14.681563', 'read write', 1, 5, '2022-04-09 08:05:14.682526', '2022-04-09 08:05:14.682526', NULL, NULL),
(139, 'gXYdSIv8yQVznWq0XQcVx75TTZBFPY', '2022-04-09 18:19:33.012196', 'read write', 1, 3, '2022-04-09 08:19:33.012196', '2022-04-09 08:19:33.012196', NULL, NULL),
(140, 'QzAKrkBBW00f3ObImN5UiB9sEuBM6n', '2022-04-09 19:27:31.784827', 'read write', 1, 7, '2022-04-09 09:27:31.785834', '2022-04-09 09:27:31.785834', NULL, NULL),
(141, 'dGjSHDAO7vUzMxwk1uQIR3lX8necln', '2022-04-10 00:29:30.078444', 'read write', 1, 2, '2022-04-09 14:29:30.078444', '2022-04-09 14:29:30.078444', NULL, NULL),
(142, 'S1sNw7SwqrtXg182WM3MFmYY5k5QgY', '2022-04-10 03:09:02.199509', 'read write', 1, 14, '2022-04-09 17:09:02.202510', '2022-04-09 17:09:02.202510', NULL, NULL),
(143, 'MT9P9Iy0Dv9hOus60EYWQfMu6xZYD8', '2022-04-10 04:29:25.407011', 'read write', 1, 3, '2022-04-09 18:29:25.408008', '2022-04-09 18:29:25.408008', NULL, NULL),
(144, 'z989SwLXpygMRODAA40FxceqSrJD4N', '2022-04-10 16:01:18.681171', 'read write', 1, 13, '2022-04-10 06:01:18.681171', '2022-04-10 06:01:18.681171', NULL, NULL),
(145, 'tw7LB35S98SUfjbX6cmLSTMeBXO7kL', '2022-04-10 16:03:02.844863', 'read write', 1, 11, '2022-04-10 06:03:02.844863', '2022-04-10 06:03:02.844863', NULL, NULL),
(146, 'Z7Xakylzgl5gTtlj9ldSKjIRO5Zwb1', '2022-04-10 16:04:34.796489', 'read write', 1, 3, '2022-04-10 06:04:34.796489', '2022-04-10 06:04:34.797486', NULL, NULL),
(147, 'yGIFfT1GoIwtvn4c4u7JC8yNzcrWbf', '2022-04-10 16:12:38.533939', 'read write', 1, 12, '2022-04-10 06:12:38.533939', '2022-04-10 06:12:38.533939', NULL, NULL),
(148, 'KqoDHBkovEc7T92Rp0bBtKcVE3VbNp', '2022-04-10 16:45:40.172038', 'read write', 1, 14, '2022-04-10 06:45:40.172038', '2022-04-10 06:45:40.172038', NULL, NULL),
(149, 'FegDS8tMGqS5n7zOEGmSz6KaIQGZiE', '2022-04-10 16:48:53.654653', 'read write', 1, 16, '2022-04-10 06:48:53.654653', '2022-04-10 06:48:53.654653', NULL, NULL),
(150, 'MrtunNVdlpqMi7qVddbD75VrffiNqp', '2022-04-10 17:32:30.566612', 'read write', 1, 2, '2022-04-10 07:32:30.567608', '2022-04-10 07:32:30.567608', NULL, NULL),
(151, 'OjRvBdXHRds1EvYA6E4IgRWEJPWRvb', '2022-04-10 17:51:06.842122', 'read write', 1, 5, '2022-04-10 07:51:06.843120', '2022-04-10 07:51:06.843120', NULL, NULL),
(152, 'LKQluKhc0cWL8aYCRxJw7XqGxXa9T6', '2022-04-10 18:55:03.996612', 'read write', 1, 7, '2022-04-10 08:55:03.996612', '2022-04-10 08:55:03.996612', NULL, NULL),
(153, 'GYKhV0u7rEDsRU0B7VVSZ5ucoDDR8p', '2022-04-10 23:12:46.706033', 'read write', 1, 6, '2022-04-10 13:12:46.707030', '2022-04-10 13:12:46.707030', NULL, NULL),
(154, 'k0IuehR6Wa7Fvr0l8XnTDaupvhZUXu', '2022-04-11 02:11:59.933308', 'read write', 1, 13, '2022-04-10 16:11:59.933308', '2022-04-10 16:11:59.933308', NULL, NULL),
(155, 'WmqIPLI0hv0IWj9K4gpAMGCc7WsEFy', '2022-04-11 02:15:42.666734', 'read write', 1, 12, '2022-04-10 16:15:42.666734', '2022-04-10 16:15:42.666734', NULL, NULL),
(156, '7Qk48BkRr92earfgL7rw1To6r39Nwr', '2022-04-11 02:21:03.281350', 'read write', 1, 3, '2022-04-10 16:21:03.283344', '2022-04-10 16:21:03.283344', NULL, NULL),
(157, 'ySPnCd5TU2er8pTJsImcKbyJVxreF2', '2022-04-11 02:21:07.548004', 'read write', 1, 11, '2022-04-10 16:21:07.548004', '2022-04-10 16:21:07.548004', NULL, NULL),
(158, 'ez5gXimNC87BKBEKyvgHnZeoj7gxh3', '2022-04-11 02:47:14.362238', 'read write', 1, 14, '2022-04-10 16:47:14.363235', '2022-04-10 16:47:14.363235', NULL, NULL),
(159, 'lycIP8IgWxyq4euwYtBQH0bLBclY4i', '2022-04-11 03:48:38.279407', 'read write', 1, 16, '2022-04-10 17:48:38.280404', '2022-04-10 17:48:38.280404', NULL, NULL),
(160, 'LHUqC5NH9fOmX0lpgMKzOMs0lHq7SX', '2022-04-11 03:53:52.263724', 'read write', 1, 2, '2022-04-10 17:53:52.263724', '2022-04-10 17:53:52.263724', NULL, NULL),
(161, 'LKobH1cuh34hVIJrckXtEaj8OxEmTh', '2022-04-11 04:33:52.982875', 'read write', 1, 5, '2022-04-10 18:33:52.982875', '2022-04-10 18:33:52.982875', NULL, NULL),
(162, 'XHDpeOxcJ1VLztmZe7sJ0weukFaydT', '2022-04-11 12:28:07.446862', 'read write', 1, 13, '2022-04-11 02:28:07.446862', '2022-04-11 02:28:07.446862', NULL, NULL),
(163, 'gOAU6G85CcgaJyR48HrcC1InnjG8xI', '2022-04-11 12:31:18.043593', 'read write', 1, 12, '2022-04-11 02:31:18.043593', '2022-04-11 02:31:18.043593', NULL, NULL),
(164, 'CuySIZshKkJYmari5elVMNNR7TSw4B', '2022-04-11 12:41:50.106822', 'read write', 1, 11, '2022-04-11 02:41:50.107820', '2022-04-11 02:41:50.107820', NULL, NULL),
(165, 'RceBvvHzPPUhL7qpHCnexDmWJqHS1M', '2022-04-11 12:42:54.131734', 'read write', 1, 7, '2022-04-11 02:42:54.132679', '2022-04-11 02:42:54.132679', NULL, NULL),
(166, 'clF882WqKdA3xBtxsOvtq96re6r9lO', '2022-04-11 13:17:48.661848', 'read write', 1, 6, '2022-04-11 03:17:48.662846', '2022-04-11 03:17:48.662846', NULL, NULL),
(167, 'gxkN37gSLDWMloB4IWAptEp87ghZ1r', '2022-04-11 14:24:13.275171', 'read write', 1, 14, '2022-04-11 04:24:13.275171', '2022-04-11 04:24:13.275171', NULL, NULL),
(168, 'O4Y4IGJeLrEhfE9VsxqyPg9qmYvhCb', '2022-04-11 15:25:06.371043', 'read write', 1, 2, '2022-04-11 05:25:06.371043', '2022-04-11 05:25:06.372040', NULL, NULL),
(169, 'l6Jqx5lkJQVjVe2WlBK5sHmTMTvgHY', '2022-04-11 16:00:31.114042', 'read write', 1, 3, '2022-04-11 06:00:31.115039', '2022-04-11 06:00:31.115039', NULL, NULL),
(170, 'A2pvfWNX3baJFeGp60y7CYdxGyqoIW', '2022-04-11 16:26:39.746009', 'read write', 1, 18, '2022-04-11 06:26:39.746009', '2022-04-11 06:26:39.746009', NULL, NULL),
(171, 'V61cLEb9ws5tiuH03KQmuQTbC2lt1M', '2022-04-14 23:41:17.307745', 'read write', 1, 12, '2022-04-14 13:41:17.308742', '2022-04-14 13:41:17.308742', NULL, NULL),
(172, 'XyJ9BvCSHpGuDkT5UXbfhjYGRkjyk0', '2022-04-14 23:42:00.729346', 'read write', 1, 5, '2022-04-14 13:42:00.729346', '2022-04-14 13:42:00.729346', NULL, NULL),
(173, 'DKYogE9CZYWjcQy8t7OkFwMjc9o8So', '2022-04-15 03:34:07.978058', 'read write', 1, 2, '2022-04-14 17:34:07.979055', '2022-04-14 17:34:07.979055', NULL, NULL),
(174, 'TL02xsFh5IH4HL24QSf3kEbePUBDBL', '2022-04-15 03:48:18.323644', 'read write', 1, 3, '2022-04-14 17:48:18.323644', '2022-04-14 17:48:18.323644', NULL, NULL),
(175, 'veAjZcKaHIQpTBlff8KzrgeoNtxqRW', '2022-04-15 04:35:24.952886', 'read write', 1, 11, '2022-04-14 18:35:24.953882', '2022-04-14 18:35:24.953882', NULL, NULL),
(176, 'iExj3T2FUAmg0Kq3nv6uL0qbqnznxJ', '2022-04-15 17:42:57.703402', 'read write', 1, 2, '2022-04-15 07:42:57.704401', '2022-04-15 07:42:57.704401', NULL, NULL),
(177, 'sZyOXi6kKroQUdzNxucpkypBtYZakF', '2022-04-15 23:57:32.316923', 'read write', 1, 12, '2022-04-15 13:57:32.316923', '2022-04-15 13:57:32.316923', NULL, NULL),
(178, 'kXUCqFFtjBaopENgyAGK859Ml7SSsl', '2022-04-15 23:59:13.343600', 'read write', 1, 5, '2022-04-15 13:59:13.344600', '2022-04-15 13:59:13.344600', NULL, NULL),
(179, '0Re6pyEcotmrIY5BaNb7tFDWvQ54hl', '2022-04-16 00:48:25.249895', 'read write', 1, 13, '2022-04-15 14:48:25.250890', '2022-04-15 14:48:25.250890', NULL, NULL);

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
(82, 'tjKQ885LwmwNAgEMYJ2DaEmupwgVEu', 82, 1, 11, '2022-04-01 09:46:21.559766', '2022-04-01 09:46:21.559766', NULL),
(83, 'rZNqF0Y137ebXnv3qOnWFeVN0gKSXO', 83, 1, 5, '2022-04-01 19:34:56.299126', '2022-04-01 19:34:56.299126', NULL),
(84, 'AJK09rvhheJFFjqHk2Xqcih5af35B1', 84, 1, 13, '2022-04-02 08:48:36.331063', '2022-04-02 08:48:36.331063', NULL),
(85, 'hrpgQUKmpsvi2soYfkhAGCQzc3LZT8', 85, 1, 5, '2022-04-02 08:58:02.420979', '2022-04-02 08:58:02.420979', NULL),
(86, 'I5Utbhckj037CXhmFK0pHpi6ZHfF31', 86, 1, 11, '2022-04-02 13:32:27.099905', '2022-04-02 13:32:27.099905', NULL),
(87, '5reWiQCi0qJyLWENeA9ep4672ZqBIX', 87, 1, 12, '2022-04-02 13:48:26.250027', '2022-04-02 13:48:26.250027', NULL),
(88, 'UmFwWIsxVob4XCmVFrfn2rRJxWJt8B', 88, 1, 6, '2022-04-02 16:13:39.181756', '2022-04-02 16:13:39.181756', NULL),
(89, 'EV9Rnu4cqzWr6OMqzGUpuFCJAX7S5J', 89, 1, 7, '2022-04-02 17:14:59.681775', '2022-04-02 17:14:59.681775', NULL),
(90, 'GJ3wEVgPytUqtfXDkwoAgBFk9fZDTZ', 90, 1, 14, '2022-04-02 17:55:43.290975', '2022-04-02 17:55:43.290975', NULL),
(91, 'ufDzrrqDkqnHNYOpwzyObJu60Ioq5i', 91, 1, 11, '2022-04-03 06:46:32.519151', '2022-04-03 06:46:32.520152', NULL),
(92, 'LMWMkNP8wQITYJB4BxeTTFaWc2lP1G', 92, 1, 6, '2022-04-03 07:40:03.185625', '2022-04-03 07:40:03.185625', NULL),
(93, 'pBv5ByVpAqC3exmwLggFFbcwupVOmb', 93, 1, 16, '2022-04-03 08:27:16.043156', '2022-04-03 08:27:16.043156', NULL),
(94, 'gcxphoeRYyCK4ncx7sgN5Ag4jTH0gD', 94, 1, 5, '2022-04-03 09:16:59.442272', '2022-04-03 09:16:59.442272', NULL),
(95, 'OaXEIM7lIzg28r1Ihpd2n9Fk35CEer', 95, 1, 12, '2022-04-03 09:56:36.891895', '2022-04-03 09:56:36.891895', NULL),
(96, 'iH8sIuzFUwahsI5XUlL9FaKwZdCOSZ', 96, 1, 3, '2022-04-03 10:09:08.362752', '2022-04-03 10:09:08.362752', NULL),
(97, 'Qac2sYFY23LlbVhvDsye29z4h3WFy0', 97, 1, 13, '2022-04-03 13:32:54.330338', '2022-04-03 13:32:54.330338', NULL),
(98, 'iABrn6VcOaq5v61I4mJBmU5df4qUzP', 98, 1, 14, '2022-04-03 14:37:21.657022', '2022-04-03 14:37:21.657022', NULL),
(99, 'dRXz8dWzjzhSe4koHfm1Bp9pmT0ajZ', 99, 1, 7, '2022-04-03 14:37:25.598079', '2022-04-03 14:37:25.598079', NULL),
(100, 'koJIUoAVIaC0QE4s8SDmor3X7i4FBa', 100, 1, 11, '2022-04-03 17:19:20.046406', '2022-04-03 17:19:20.046406', NULL),
(101, 'YtDCfR0Pz1XnpYiSMw1HIXmnmifKEf', 101, 1, 2, '2022-04-04 07:33:20.083874', '2022-04-04 07:33:20.083874', NULL),
(102, 'mioLMQ2HC7vJt0Hwknhf82q0ELRCBh', 102, 1, 4, '2022-04-04 08:00:44.123314', '2022-04-04 08:00:44.123314', NULL),
(103, 'NQS8f5GVNG9bUgLtNyfYZcqvTMOxl6', 103, 1, 3, '2022-04-04 09:18:09.239730', '2022-04-04 09:18:09.239730', NULL),
(104, 'APdV3yIcsIRm3lZ7L2Lhq2iTjKaUG4', 104, 1, 6, '2022-04-04 09:21:10.762231', '2022-04-04 09:21:10.762231', NULL),
(105, 'Jk1YpPnpzfUyNgzwPNvTbb022ZHopF', 105, 1, 13, '2022-04-04 09:26:57.250478', '2022-04-04 09:26:57.250478', NULL),
(106, 'kLynlYnamKhgYP5DW8VOyQJHEmtnew', 106, 1, 5, '2022-04-04 10:03:42.139230', '2022-04-04 10:03:42.139230', NULL),
(107, 'gxIoKgf41buiEjh5YOAA47NpZyDCHt', 107, 1, 14, '2022-04-04 14:25:29.125215', '2022-04-04 14:25:29.125215', NULL),
(108, 'cY6ANBRjZ7wegAcFvH0i3KSi9aBwdA', 108, 1, 11, '2022-04-04 14:31:03.444272', '2022-04-04 14:31:03.444272', NULL),
(109, 'wCsC2BIBKIORNYtgqT4bpvR4O8Csuc', 109, 1, 16, '2022-04-04 14:31:17.465953', '2022-04-04 14:31:17.465953', NULL),
(110, 'Vm6WGfJqZnU2jfOGJCVrBICXgZIayT', 110, 1, 12, '2022-04-04 14:34:16.248805', '2022-04-04 14:34:16.248805', NULL),
(111, 'MvLEMyctwM0bHr5FWhEeOGv16b3NHH', 111, 1, 11, '2022-04-05 14:22:13.163269', '2022-04-05 14:22:13.163269', NULL),
(112, 'P9HJUJj9sBgx1RWBtJ4jCCYUIilevt', 112, 1, 13, '2022-04-05 14:32:17.460566', '2022-04-05 14:32:17.460566', NULL),
(113, 'UPv41hIQqIWWok23FWEGTlYzpghi3e', 113, 1, 14, '2022-04-05 14:45:51.200551', '2022-04-05 14:45:51.200551', NULL),
(114, 'lMHzahOoJ6XABpdavyCkv1IELmOeAQ', 114, 1, 2, '2022-04-05 15:09:53.547678', '2022-04-05 15:09:53.547678', NULL),
(115, 'SzvcG6wEZLUlLRdXMac3484UYuwJGa', 115, 1, 5, '2022-04-05 15:12:34.704864', '2022-04-05 15:12:34.704864', NULL),
(116, 'MJs9KOPGWSQ1W9K7AX9Pj6Qz67Q07R', 116, 1, 16, '2022-04-05 15:37:46.898455', '2022-04-05 15:37:46.898455', NULL),
(117, 'htvbO5krhSI4Sf4ZBMPT6ryFxikx3J', 117, 1, 6, '2022-04-05 16:21:54.359490', '2022-04-05 16:21:54.359490', NULL),
(118, 'k0cgSRBZ5fb1SwDSLhCOGucniYl7Ew', 118, 1, 2, '2022-04-06 10:40:19.872554', '2022-04-06 10:40:19.872554', NULL),
(119, '7teLiggEu93a93xwgkg26HrQlxDKNo', 119, 1, 12, '2022-04-06 11:00:18.607981', '2022-04-06 11:00:18.607981', NULL),
(120, 'LKWu7leC3c7RwdUvH79ytjDgCnYBNf', 120, 1, 13, '2022-04-06 12:16:49.462290', '2022-04-06 12:16:49.462290', NULL),
(121, 'n9AwfP4mknGasjO1me4EOrq4Cv3Lcw', 121, 1, 5, '2022-04-06 12:32:46.717256', '2022-04-06 12:32:46.717256', NULL),
(122, 'rr9YaQwz2GTA08zEtVEk7v71quhmcn', 122, 1, 14, '2022-04-06 14:07:27.122947', '2022-04-06 14:07:27.122947', NULL),
(123, 'A5mkHTdVtuVjGKCE26QtfJn84oM9Qi', 123, 1, 11, '2022-04-06 15:23:39.460251', '2022-04-06 15:23:39.460251', NULL),
(124, 'Ml6Ijyh63ha4uuiMWGplvVmaMHXJOY', 124, 1, 6, '2022-04-06 15:35:51.571363', '2022-04-06 15:35:51.571363', NULL),
(125, 'vAFmMkItmjeAIBP3mNEbkAYVRit2KE', 125, 1, 13, '2022-04-07 08:36:51.559896', '2022-04-07 08:36:51.559896', NULL),
(126, 'WMs1ptg5vXMwH8dNTY7M2XFkOU5E1N', 126, 1, 5, '2022-04-07 08:46:50.320611', '2022-04-07 08:46:50.320611', NULL),
(127, 'ciAN8Swnx9kBAwa6uZTe8NvrORLAe2', 127, 1, 12, '2022-04-07 13:44:15.135107', '2022-04-07 13:44:15.135107', NULL),
(128, 'LBfrTIPifp30qPbjKZ7eissqKFdsDm', 128, 1, 14, '2022-04-07 14:34:55.636739', '2022-04-07 14:34:55.636739', NULL),
(129, 'qQzoJf9XZ5MbyDS5mQTXd8ajisbsvl', 129, 1, 11, '2022-04-07 14:59:20.274611', '2022-04-07 14:59:20.274611', NULL),
(130, '49GI9igzZR7ZJjUXSOp57FHtx0Oh3w', 130, 1, 6, '2022-04-07 15:47:26.475857', '2022-04-07 15:47:26.475857', NULL),
(131, 'PlBrf0zRMvLc1XQeObDzQG1sgRlIIm', 131, 1, 7, '2022-04-07 17:45:29.203282', '2022-04-07 17:45:29.203282', NULL),
(132, 'T1ik9OmXI6GXedGDEZHXNSLVKqeF5j', 132, 1, 13, '2022-04-09 06:36:13.117353', '2022-04-09 06:36:13.117353', NULL),
(133, 'RlqLRGAwSIdooMDCPwJ5be8cho7Kdy', 133, 1, 14, '2022-04-09 06:46:11.487577', '2022-04-09 06:46:11.487577', NULL),
(134, 'w1x9pywOHFyOqxuMONSQxVAjH9WCSE', 134, 1, 16, '2022-04-09 07:25:06.740961', '2022-04-09 07:25:06.740961', NULL),
(135, 'EcpWf0UBoXHUzmMvWJdhS4Tf9ie2YR', 135, 1, 11, '2022-04-09 07:36:15.750934', '2022-04-09 07:36:15.750934', NULL),
(136, 'E8ru8iEEuTZe2z15LiWCHGiD7QDWkB', 136, 1, 12, '2022-04-09 07:36:29.043977', '2022-04-09 07:36:29.043977', NULL),
(137, 'kMo9Qjj81KNxNGZM3opXdWZfoigWhR', 137, 1, 6, '2022-04-09 07:41:51.735160', '2022-04-09 07:41:51.735160', NULL),
(138, 'z4es1Pn5JNEQQNBR6O4seouh3y22wz', 138, 1, 5, '2022-04-09 08:05:14.686515', '2022-04-09 08:05:14.686515', NULL),
(139, 'YG4eMWBwSGcRQ4alqxsRjB5BsgN8uF', 139, 1, 3, '2022-04-09 08:19:33.013193', '2022-04-09 08:19:33.013193', NULL),
(140, '1CGQK9Tm28PwUM3Rohtc4vZPtXTXxf', 140, 1, 7, '2022-04-09 09:27:31.786822', '2022-04-09 09:27:31.786822', NULL),
(141, '6KcTrHBAyZpdSXVkSmyHUFGhvHJ5Xn', 141, 1, 2, '2022-04-09 14:29:30.080436', '2022-04-09 14:29:30.080436', NULL),
(142, 'yBOQr7ID4CEE1ToVT0VCCpClx2nYRS', 142, 1, 14, '2022-04-09 17:09:02.223444', '2022-04-09 17:09:02.223444', NULL),
(143, 'PxM6CjpJJzcvExLJH1LZbNj0fbnSeP', 143, 1, 3, '2022-04-09 18:29:25.423966', '2022-04-09 18:29:25.423966', NULL),
(144, 'pQoMEN7Ee8qVhHHCBCoRSh4HBRohWW', 144, 1, 13, '2022-04-10 06:01:18.687155', '2022-04-10 06:01:18.687155', NULL),
(145, 'X0cv0dWwOWrIJ9ofMX07zcHx1GpwQM', 145, 1, 11, '2022-04-10 06:03:02.848821', '2022-04-10 06:03:02.848821', NULL),
(146, 'oMIZg826yNY03n9eVQVFNpzTkfltTq', 146, 1, 3, '2022-04-10 06:04:34.797486', '2022-04-10 06:04:34.797486', NULL),
(147, 'hEoy6upfuQh3A95zCbNVfcKGM5OnZx', 147, 1, 12, '2022-04-10 06:12:38.536930', '2022-04-10 06:12:38.536930', NULL),
(148, 'PIMBD86llliHm5PuGzpTpUjrKNlMwA', 148, 1, 14, '2022-04-10 06:45:40.173036', '2022-04-10 06:45:40.173036', NULL),
(149, 'jcM1JHDx3fKxSvQQOvkeCByMwVnQob', 149, 1, 16, '2022-04-10 06:48:53.656752', '2022-04-10 06:48:53.656752', NULL),
(150, '84RCeHcFa73Xy1IPXpkaQCGIKYfuNN', 150, 1, 2, '2022-04-10 07:32:30.570603', '2022-04-10 07:32:30.570603', NULL),
(151, 'sI8NKlwTaGbWpQXXheoL4Y1VHZy0rr', 151, 1, 5, '2022-04-10 07:51:06.846112', '2022-04-10 07:51:06.846112', NULL),
(152, 'l4q4BgCuDDtq6OjjeQIqgpx9904bbS', 152, 1, 7, '2022-04-10 08:55:04.001601', '2022-04-10 08:55:04.001601', NULL),
(153, 'iUhtuxWkvOUNhthhJ386f4c2b1ZSE2', 153, 1, 6, '2022-04-10 13:12:46.712017', '2022-04-10 13:12:46.712017', NULL),
(154, 'q2ZZpZXRs53V6shofutllA3Z9KMiW7', 154, 1, 13, '2022-04-10 16:11:59.938293', '2022-04-10 16:11:59.938293', NULL),
(155, '2nd0a2HLNZWgADDXWvIblcIcL3Kxuo', 155, 1, 12, '2022-04-10 16:15:42.669725', '2022-04-10 16:15:42.669725', NULL),
(156, '3fICihsPgQQ1K10sPH0DO5JSQ8cZHR', 156, 1, 3, '2022-04-10 16:21:03.286340', '2022-04-10 16:21:03.286340', NULL),
(157, 'NF4VgWNB64Yb8e7McRp5DyK3Tsh2es', 157, 1, 11, '2022-04-10 16:21:07.549002', '2022-04-10 16:21:07.549002', NULL),
(158, 'PHG8kpNFHWw2hmxXy3ALmnLnnWURTv', 158, 1, 14, '2022-04-10 16:47:14.364254', '2022-04-10 16:47:14.364254', NULL),
(159, 'maAV1LoUj10yKAP9wOSuH9NHOhsmKy', 159, 1, 16, '2022-04-10 17:48:38.281401', '2022-04-10 17:48:38.281401', NULL),
(160, '7uZVHfHn1a01cPVj56rt2qFxRB76jJ', 160, 1, 2, '2022-04-10 17:53:52.265719', '2022-04-10 17:53:52.265719', NULL),
(161, 'KDESGQGqKHk8dQbiQIZeYjxR1k5gmd', 161, 1, 5, '2022-04-10 18:33:52.983873', '2022-04-10 18:33:52.983873', NULL),
(162, 'gXizixWMucM34oX4NuDwzb24vxLxNv', 162, 1, 13, '2022-04-11 02:28:07.460824', '2022-04-11 02:28:07.460824', NULL),
(163, 'FdCOUnspGgCmMxxYbiXWExzBv4jcnq', 163, 1, 12, '2022-04-11 02:31:18.044592', '2022-04-11 02:31:18.044592', NULL),
(164, 'Chgg2Ehvqs7XmpDabKmpLlNg1G24OF', 164, 1, 11, '2022-04-11 02:41:50.122780', '2022-04-11 02:41:50.122780', NULL),
(165, 'B0OdXm8jYSNV8TTFEfavyDKqQVnGWG', 165, 1, 7, '2022-04-11 02:42:54.133678', '2022-04-11 02:42:54.133678', NULL),
(166, 'i7U7QQxOnOnaIhoVMKU6OwVuPLWsMi', 166, 1, 6, '2022-04-11 03:17:48.663843', '2022-04-11 03:17:48.663843', NULL),
(167, 'KU8ilWyrLvP3JZ5A3MV6gapywbEbqL', 167, 1, 14, '2022-04-11 04:24:13.277166', '2022-04-11 04:24:13.277166', NULL),
(168, '5BA2jrAtouew3MrDIymvDcgIGnrPdP', 168, 1, 2, '2022-04-11 05:25:06.374035', '2022-04-11 05:25:06.374035', NULL),
(169, 'juMnZUt400vhR0a1MF94mPo4zzSqJd', 169, 1, 3, '2022-04-11 06:00:31.116037', '2022-04-11 06:00:31.116037', NULL),
(170, 'q3Eg8kA6G99q9LlT5y8DwdqC7V8X9P', 170, 1, 18, '2022-04-11 06:26:39.749002', '2022-04-11 06:26:39.749002', NULL),
(171, 'ZFNMXglypjfXWR6V0tj5TTZOgI6eYT', 171, 1, 12, '2022-04-14 13:41:17.313794', '2022-04-14 13:41:17.313794', NULL),
(172, 'd41cKAcefy97PhFugDakJFXFd5uZOQ', 172, 1, 5, '2022-04-14 13:42:00.730350', '2022-04-14 13:42:00.730350', NULL),
(173, 'piOWCOkM0AuoZn7BdQLSA8QPy2zFHm', 173, 1, 2, '2022-04-14 17:34:07.981053', '2022-04-14 17:34:07.981053', NULL),
(174, 'J1Wo0Egc4v8PE4ZgRQ2gDHQiSJxt6F', 174, 1, 3, '2022-04-14 17:48:18.326623', '2022-04-14 17:48:18.326623', NULL),
(175, 'CCoBjCklnt6bQRIRxNJnBcXqS6uRvw', 175, 1, 11, '2022-04-14 18:35:24.956874', '2022-04-14 18:35:24.956874', NULL),
(176, 'qNHUvh0P6uNfcom0QTEJNEJv3FBGH4', 176, 1, 2, '2022-04-15 07:42:57.706418', '2022-04-15 07:42:57.706418', NULL),
(177, 'wN2QzjHCL9JpHh1P31ynlgSKaLrFat', 177, 1, 12, '2022-04-15 13:57:32.319913', '2022-04-15 13:57:32.319913', NULL),
(178, 'EV0UYA1SSe7UF0i8R3EdxVktNK0aTH', 178, 1, 5, '2022-04-15 13:59:13.348586', '2022-04-15 13:59:13.348586', NULL),
(179, '5J3EGguXwE2fOPcunUi9WlxZIt1j7t', 179, 1, 13, '2022-04-15 14:48:25.257872', '2022-04-15 14:48:25.257872', NULL);

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
(1, 'google-oauth2', 'sapol.m@ku.th', '{\"auth_time\": 1650032421, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM-BKvDyIKJ-McO-RCeo1N05sL56EOjQboQsq5_0XOyNPFxyJpB8j2nfuA3AyB0ERiYX4qmWR183T7kMqo9G26zoYnhb6TADSPvbo8Bw__EP02XIIfXbnEvyatfZFh5wvFeJPAnd2UgJjapOhqjem5BqpAk\", \"token_type\": null}', 2, '2022-03-04 13:32:38.876533', '2022-04-15 14:20:21.826215'),
(2, 'google-oauth2', 'suphapong.b@ku.th', '{\"auth_time\": 1649958498, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM__ItitO6FOKUVMMWt4awArPFVTKWjCJjQc7P_NkqFYztROHrbMJ6dsD5vhEmdUFXrxEf7-NvPL7_-9U684r7YrAU45MEEU3AA9fES7_51PoSreRlfO8NCp_c1bbT9Qin8NG--Dm3HnQ9XUF-CEXcjlsxg\", \"token_type\": null}', 3, '2022-03-05 14:42:42.371172', '2022-04-14 17:48:18.196460'),
(3, 'google-oauth2', 'ppmahawong@gmail.com', '{\"auth_time\": 1649059244, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM8m-mytpZXw9YGCUTtVozh02UAtoxG9NrP-BkRWWVYgd61_O0k-PGbSJIObTg7qbl94ATsO37lJvfJNLysQB8lADzc0lbe22r1TnIYxUXNn7rnJOmnbgclXaCgGOX-8jR4mxMxug0aN7OFbGu7mZDwNmZE\", \"token_type\": null}', 4, '2022-03-05 14:56:06.286923', '2022-04-04 08:00:44.113341'),
(4, 'google-oauth2', 'phunyawee.s@ku.th', '{\"auth_time\": 1650032140, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM_F-fSbvr7-MpDPiLIkIW4YUuQfv4gweqmoXap5xSjpHNKQMfZcYYc5_5NO0OhtpzXW5hEW4u_5euDuCl2R6-Aq7q6Q8evdFOIObKAgdSK-gYjz9QZK-BfqXPVj88pCMlSaWoQE8U9cZ-MLnCney-EhHC8\", \"token_type\": null}', 5, '2022-03-07 10:58:21.908811', '2022-04-15 14:15:40.468521'),
(5, 'google-oauth2', 'prapavit.p@ku.th', '{\"auth_time\": 1649660067, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM8UrLBCGE6QRb3tgmCiHFwrKwW3FZyphTo2YzKo68NcF7nTyrz59_4oSpNngQqlH7BGQyfRCGsVt5UFOcaZkYDQr3q8J-8CSHRqesZ5QumIb9gAroQQl0s4HcJ1SbOrnRzSaaJwxZ7M9GdEnFQ7B82Nyk0\", \"token_type\": null}', 6, '2022-03-07 11:16:04.663807', '2022-04-11 06:54:27.659904'),
(6, 'google-oauth2', 'khunnaphat.m@ku.th', '{\"auth_time\": 1649644974, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM8t58u1xT1s0vEN0UG8BRfwe6cCVh8q-PRe-2kTg510fBxn7Md2conDAVFXpIOLQ8r-EL0RJ9zx_K_UtGeTBLobxSIXxJQ7KpilHh92FBSbm_7cuYh5vTZBbdABVyQCMMY87zZHwXxjm9sUHOQueIhzbb4\", \"token_type\": null}', 7, '2022-03-07 17:17:42.795709', '2022-04-11 02:42:54.129681'),
(7, 'google-oauth2', 'zxohm2543@gmail.com', '{\"auth_time\": 1648723074, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM8UMhCQEKkKHsyxysjmvap9zpeHK4tP5EnvXs4MKzQTj7Ze1hZy1Hgfo99ZMuENi6BZsPWotCTgqWvwRfTlY9sJybGXwCX87LLYP0fe2tgs68xNmYH9ve04_WJ-_WM7gMJzRUte0yGWd5Jd9IRjfz7xhiI\", \"token_type\": null}', 8, '2022-03-10 10:23:46.093558', '2022-03-31 10:37:54.477436'),
(8, 'google-oauth2', 'goodnessboy79@gmail.com', '{\"auth_time\": 1648224430, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM_8BvyeHv6YBoMLvpw4kpzxogvXoV6E9FDgjMwN6CJ1WyVqILy4dXkx0yKp_yj-DgnJEmX1Z3V0GSH1beddTUouqZxPz9fT84ewQc3OnkKNYozEWBhq-XbCtZulXeFnXrLF7uD5LRVIW9eRPDnbym-d5Q\", \"token_type\": null}', 9, '2022-03-18 07:49:59.232900', '2022-03-25 16:07:10.319297'),
(9, 'google-oauth2', 'smtpnetpro@gmail.com', '{\"auth_time\": 1648648899, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM-YDbUv3pSeiQbwzoPP7Dpd0L-8QnxA08H7hEtgNwVZY8-czn1mp7HlPlWY9zvY1Vzf2p7gbS-_nb635jcouyoMPxDU3VLPNzwgajirXM8lUk2g1ckQNsrpCdelGUzcz34e4C4QWKsiqk4LgV8PuTHvFA\", \"token_type\": null}', 10, '2022-03-18 08:37:14.501069', '2022-03-30 14:01:39.436505'),
(10, 'google-oauth2', 'chonlatad.c@ku.th', '{\"auth_time\": 1649961324, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM8DtgY43s6PLCmY9R8f8IREYSJdJ8cPE90veMQ1wtGifHR59ZRln0TpbfnHmBgUX-BJ_dGbWrL5zaU__reZFxSt9vn9GTqykuvDCFFjit_pc4xi-oY5PbyG6bDBA3tO-RubUNsHRVp-vfWp7uGMQdRNEOk\", \"token_type\": null}', 11, '2022-03-18 09:17:16.188656', '2022-04-14 18:35:24.817880'),
(11, 'google-oauth2', 'pongsatorn.saw@ku.th', '{\"auth_time\": 1650031052, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM_Wq-DDWMkkWjuf8OR4aVQp7tr9gmdSHRICOW7YvqHIY6yd4TL1trU3pz5CZzrihAD_kOxwsI-0pi3fmsPa0qhSCupNXBSKyP0WcOEMJ11Auw8FkrT7WybohPEqPCb03HyzhQ9akW32mzQF9192hu96P8Q\", \"token_type\": null}', 12, '2022-03-18 09:17:16.628334', '2022-04-15 13:57:32.107480'),
(12, 'google-oauth2', 'chollasit.su@ku.th', '{\"auth_time\": 1650034105, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM_2Oj9jmrlF3kRAa_AM-f5wpPEFdLsGwaLz7fk8MSjBaJgymeYcC-LE6oRojEjuPohfhOsmHvQMw9LbM9YztfADH87l1NHHYr5oxW3cCoCMrXfJwWSPqaBIg18bQKXAn6R1-CpWoCpaqwowMrSw2ZSSTqQ\", \"token_type\": null}', 13, '2022-03-18 14:13:39.648204', '2022-04-15 14:48:25.231949'),
(13, 'google-oauth2', 'thiwat.su@ku.th', '{\"auth_time\": 1649660377, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM8C7BzsXGQi37LrUDpEh44W0Y6zxafPHWrwpO9d97m3VNgobkgIm0qzartyUvpb5t7oI0PtR1F3ffX-YzwuGkWB5oKkxFcDjBeEA-wNFetFTuIhw7ZFsWLzXM7mmYKBsNbOumrz7SMyC1CQTQru-SFCQl0\", \"token_type\": null}', 14, '2022-03-18 14:28:43.133172', '2022-04-11 06:59:37.476738'),
(14, 'google-oauth2', 'onezeromay@gmail.com', '{\"auth_time\": 1647615744, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM9E-_gLyD01CsJxPs_2LN5pPl3LHDLUH2ZbBJ1_NNv54h_tOZ6pmdUc5txPveM7W1wB2eZbdhVyAm3Fy6FNQPfUIdviykIwkUU93w-qBjRsMkwyjoIZ8wFhngEfk6rTBxCK165ljmoXOkYobv52R4CR\", \"token_type\": null}', 15, '2022-03-18 15:02:23.998645', '2022-03-18 15:02:24.001637'),
(15, 'google-oauth2', 'kitsanaphon.j@ku.th', '{\"auth_time\": 1649615116, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM_UkTnSyLAslDvQBlZr0XLvHsOocmMnZOX6k8P-7241AW0HAHe7yyMwQx2WC-TEQs5cpSDTaG91mso7YeXpIiTdEUBqLBLYYn_Qfzcz2cnkwnx9ktXW8nuODM3JroEAeu2jfPwET4JTvG0AGuhp0S0GIo0\", \"token_type\": null}', 16, '2022-03-18 15:03:43.655536', '2022-04-10 18:25:16.813671'),
(16, 'google-oauth2', 'phunyaweesomabutra2544@gmail.com', '{\"auth_time\": 1648304519, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM-ydImvvGTj6sAY5emNyo5NKcWguOAjx9uUFAegalqkRGkJbW9bN9Uv4LyVponEaFh6ShRt7Bs8o47W_wxCvNbnTxJ9gacgU6h-hPw2yP4rVd2-j84UVIjWI9Y84qdhpnfWBVAglt1FIcXfbhy-XPu3\", \"token_type\": null}', 17, '2022-03-26 14:21:59.075077', '2022-03-26 14:21:59.079066'),
(17, 'google-oauth2', '123.boyon2012@gmail.com', '{\"auth_time\": 1649658399, \"expires\": null, \"access_token\": \"ya29.A0ARrdaM-uE7D5plbW2Y9sySVXWqcnBfWJaZFzymV3gbmk33osQL66Sy923LjvteBOSoPsVDV3w9NhZjIsy5ZAyaFi08nA6Cf6iVNCgrkmqQKfepWGntfmOH0VGzxHyuYb7FRP_A7ywjCfdDyItnOyklTCNdMgqjQ\", \"token_type\": null}', 18, '2022-04-11 06:26:39.607447', '2022-04-11 06:26:39.609443');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `app_academicyear`
--
ALTER TABLE `app_academicyear`
  ADD PRIMARY KEY (`acayear_id`);

--
-- Indexes for table `app_commiteevote`
--
ALTER TABLE `app_commiteevote`
  ADD PRIMARY KEY (`commitee_id`),
  ADD KEY `app_commiteevote_managescholarship_id_9c109085_fk_app_manag` (`managescholarship_id_id`),
  ADD KEY `app_commiteevote_registerscholarship__496ce647_fk_app_regis` (`registerscholarship_id_id`),
  ADD KEY `app_commiteevote_user_id_id_8497b831_fk_app_user_login_user_id` (`user_id_id`);

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
  MODIFY `acayear_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `app_commiteevote`
--
ALTER TABLE `app_commiteevote`
  MODIFY `commitee_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `app_hero`
--
ALTER TABLE `app_hero`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `app_managescholarship`
--
ALTER TABLE `app_managescholarship`
  MODIFY `managescho_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `app_place`
--
ALTER TABLE `app_place`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `app_registerscholarship`
--
ALTER TABLE `app_registerscholarship`
  MODIFY `register_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `app_schedule`
--
ALTER TABLE `app_schedule`
  MODIFY `sche_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `app_sourceofscholarship`
--
ALTER TABLE `app_sourceofscholarship`
  MODIFY `sourceofscho_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `app_studentfile`
--
ALTER TABLE `app_studentfile`
  MODIFY `studentinform_profile_stdfile` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `app_studentfilefile`
--
ALTER TABLE `app_studentfilefile`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

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
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `app_weightcriteriapoint`
--
ALTER TABLE `app_weightcriteriapoint`
  MODIFY `weight_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=141;

--
-- AUTO_INCREMENT for table `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `oauth2_provider_accesstoken`
--
ALTER TABLE `oauth2_provider_accesstoken`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=180;

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
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=180;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `app_commiteevote`
--
ALTER TABLE `app_commiteevote`
  ADD CONSTRAINT `app_commiteevote_managescholarship_id_9c109085_fk_app_manag` FOREIGN KEY (`managescholarship_id_id`) REFERENCES `app_managescholarship` (`managescho_id`),
  ADD CONSTRAINT `app_commiteevote_registerscholarship__496ce647_fk_app_regis` FOREIGN KEY (`registerscholarship_id_id`) REFERENCES `app_registerscholarship` (`register_id`),
  ADD CONSTRAINT `app_commiteevote_user_id_id_8497b831_fk_app_user_login_user_id` FOREIGN KEY (`user_id_id`) REFERENCES `app_user_login` (`user_id`);

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
