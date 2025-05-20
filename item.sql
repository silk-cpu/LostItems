-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Mag 16, 2025 alle 17:02
-- Versione del server: 10.4.32-MariaDB
-- Versione PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `item`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `lost_items`
--

CREATE TABLE `lost_items` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `lost_date` date NOT NULL,
  `location` varchar(255) NOT NULL,
  `found` tinyint(1) NOT NULL,
  `found_date` date DEFAULT NULL,
  `found_location` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `note` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `lost_items`
--

INSERT INTO `lost_items` (`id`, `name`, `description`, `lost_date`, `location`, `found`, `found_date`, `found_location`, `created_at`, `updated_at`, `note`) VALUES
(1, 'Black Wallet', 'Leather wallet ', '2025-04-10', 'Central Library', 0, '2025-04-13', '', '2025-05-14 10:15:57', '2025-05-16 16:58:02', 'sdh'),
(2, 'iPhone 13', 'White iPhone 13 with a cracked screen.', '2025-04-12', 'Cafeteria', 1, '2025-04-13', 'Reception Desk', '2025-05-14 10:15:57', '2025-05-16 16:51:45', 'ghhh'),
(3, 'Keys', 'Set of car and house keys with a red keychain.', '2025-03-25', 'Parking Lot B', 1, '2025-03-27', '', '2025-05-14 10:15:57', '2025-05-14 17:12:06', NULL),
(4, 'Backpack', 'Blue Jansport backpack with notebooks and a laptop.', '2025-04-01', 'Lecture Hall 3', 1, '2025-04-03', 'Lost and Found Office', '2025-05-14 10:15:57', '2025-05-14 10:15:57', NULL),
(5, 'Sunglasses', 'Ray-Ban sunglasses in a black case.', '2025-04-15', 'Gym Locker Room', 1, '2025-04-15', '', '2025-05-14 10:15:57', '2025-05-14 17:11:21', NULL),
(6, 'Water Bottle', 'Green Hydro Flask bottle, 1L.', '2025-04-11', 'Library Study Area', 1, '2025-04-11', 'Front Desk', '2025-05-14 10:15:57', '2025-05-14 10:15:57', NULL),
(7, 'Notebook', 'Red spiral-bound notebook labeled \"BIO 202\".', '2025-04-09', 'Science Building', 1, '2025-04-10', 'Custodian Office', '2025-05-14 10:15:57', '2025-05-14 10:15:57', NULL),
(8, 'Earbuds', 'Black wireless earbuds in a charging case.', '2025-03-28', 'Student Union', 1, '2025-04-15', '', '2025-05-14 10:15:57', '2025-05-15 09:18:34', NULL),
(9, 'Laptop', 'Dell XPS 13 in a grey sleeve.', '2025-04-02', 'Computer Lab', 1, '2025-04-04', 'IT Help Desk', '2025-05-14 10:15:57', '2025-05-14 10:15:57', NULL),
(10, 'Umbrella', 'Compact black umbrella with wooden handle.', '2025-04-05', 'Bus Stop', 1, '2025-04-15', '', '2025-05-14 10:15:57', '2025-05-15 09:22:11', NULL),
(11, 'Watch', 'Apple Watch Series 7, silver.', '2025-03-30', 'Recreation Center', 1, '2025-04-01', 'Security Office', '2025-05-14 10:15:57', '2025-05-14 10:15:57', NULL),
(12, 'Calculator', 'TI-84 Plus with name \"Alex R.\" written on back.', '2025-04-06', 'Math Building', 1, '2025-04-07', 'Professor\'s Office', '2025-05-14 10:15:57', '2025-05-14 10:15:57', NULL),
(13, 'Scarf', 'Wool scarf, navy blue and grey striped.', '2025-04-08', 'Library Entrance', 1, '2025-04-15', '', '2025-05-14 10:15:57', '2025-05-15 09:22:15', NULL),
(14, 'ID Card', 'University ID Card: Jane Doe.', '2025-04-03', 'Cafeteria Tray Return', 1, '2025-04-03', 'Lost and Found Office', '2025-05-14 10:15:57', '2025-05-14 10:15:57', NULL),
(15, 'Textbook', 'Economics textbook, 3rd edition.', '2025-04-10', 'Lecture Hall 1', 1, '2025-04-15', '', '2025-05-14 10:15:57', '2025-05-15 09:43:45', NULL),
(16, 'Gloves', 'Black leather gloves, size M.', '2025-04-14', 'Parking Garage', 1, '2025-04-15', '', '2025-05-14 10:15:57', '2025-05-15 09:56:13', NULL),
(17, 'Headphones', 'Over-ear Sony headphones, black.', '2025-04-07', 'Student Lounge', 1, '2025-04-08', 'Reception', '2025-05-14 10:15:57', '2025-05-14 10:15:57', NULL),
(18, 'Notebook', 'Blue notebook with art sketches.', '2025-03-29', 'Art Room', 1, '2025-04-15', '', '2025-05-14 10:15:57', '2025-05-15 09:22:21', NULL),
(19, 'Pencil Case', 'Zippered pencil case with pens and markers.', '2025-04-13', 'Library 2nd Floor', 1, '2025-04-13', 'Library Front Desk', '2025-05-14 10:15:57', '2025-05-14 10:15:57', NULL),
(20, 'Book', 'Paperback novel: \"The Catcher in the Rye\".', '2025-04-12', 'Reading Lounge', 1, '2025-04-15', '', '2025-05-14 10:15:57', '2025-05-15 09:22:18', NULL),
(35, 'ttat', 'atta', '2025-04-30', 'tat', 1, '2025-05-27', 'tata', '2025-05-15 14:18:08', '2025-05-16 15:26:27', 'tata'),
(37, 't', 't', '2025-05-16', 't', 0, NULL, 't', '2025-05-16 14:36:04', '2025-05-16 14:36:04', 't'),
(38, 'f', 'f', '2025-05-16', 'f', 0, NULL, '', '2025-05-16 14:37:01', '2025-05-16 14:37:01', '');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `lost_items`
--
ALTER TABLE `lost_items`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `lost_items`
--
ALTER TABLE `lost_items`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
