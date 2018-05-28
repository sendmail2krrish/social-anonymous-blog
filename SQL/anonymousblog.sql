-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: May 28, 2018 at 11:07 AM
-- Server version: 5.5.42
-- PHP Version: 5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `anonymousblog`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `cmnt_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `cmnt_content` longtext NOT NULL,
  `ip` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`cmnt_id`, `post_id`, `cmnt_content`, `ip`, `status`, `created_at`) VALUES
(1, 3, 'Hi', '::1', 1, 'Mon May 28 2018 14:26:39 GMT+0530 (IST)'),
(2, 3, 'How are you?', '::1', 1, 'Mon May 28 2018 14:31:27 GMT+0530 (IST)'),
(3, 3, 'I am good.', '::1', 1, 'Mon May 28 2018 14:32:50 GMT+0530 (IST)'),
(4, 3, 'I  am a hacker', '::1', 1, 'Mon May 28 2018 14:33:32 GMT+0530 (IST)'),
(5, 19, 'Comment working...', '::1', 1, 'Mon May 28 2018 14:35:21 GMT+0530 (IST)');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL,
  `post_title` longtext NOT NULL,
  `post_content` longtext NOT NULL,
  `ip` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`post_id`, `post_title`, `post_content`, `ip`, `status`, `created_at`) VALUES
(1, 'This is a test post one', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', '::1', 1, 'Mon May 28 2018 11:41:55 GMT+0530 (IST)'),
(2, 'This is a test post second', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', '::1', 1, 'Mon May 28 2018 11:41:55 GMT+0530 (IST)'),
(3, 'This is a test post third', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ''Content here, content here'', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ''lorem ipsum'' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', '::1', 1, 'Mon May 28 2018 13:03:56 GMT+0530 (IST)'),
(19, 'This is a test post foure', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don''t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn''t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', '::1', 1, 'Mon May 28 2018 14:35:04 GMT+0530 (IST)');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`cmnt_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `cmnt_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=20;