/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50539
Source Host           : 127.0.0.1:3306
Source Database       : japan

Target Server Type    : MYSQL
Target Server Version : 50539
File Encoding         : 65001

Date: 2018-08-27 08:13:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for notes
-- ----------------------------
DROP TABLE IF EXISTS `notes`;
CREATE TABLE `notes` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `title` varchar(15) NOT NULL COMMENT '笔记标题',
  `content` text NOT NULL COMMENT '内容',
  `author` varchar(10) NOT NULL COMMENT '署名',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `password` varchar(15) DEFAULT NULL COMMENT '密码',
  `update_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '修改时间',
  `star` int(4) NOT NULL DEFAULT '0' COMMENT '星星数',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of notes
-- ----------------------------
INSERT INTO `notes` VALUES ('1', '这是标题', '这是内容内容内容内容', 'zty', '2018-08-26 21:38:32', '7723271', '0000-00-00 00:00:00', '0');
INSERT INTO `notes` VALUES ('2', '这是标题2', '这是222', 'zty', '2018-08-26 21:52:21', '', '0000-00-00 00:00:00', '0');
