-- phpMyAdmin SQL Dump
-- version 2.10.3
-- http://www.phpmyadmin.net
-- 
-- 主机: localhost
-- 生成日期: 2017 年 01 月 12 日 06:52
-- 服务器版本: 5.0.51
-- PHP 版本: 5.2.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

-- 
-- 数据库: `baidunews`
-- 

-- --------------------------------------------------------

-- 
-- 表的结构 `news`
-- 

CREATE TABLE `news` (
  `id` int(11) NOT NULL auto_increment,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` char(100) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=35 ;

-- 
-- 导出表中的数据 `news`
-- 

INSERT INTO `news` VALUES (21, '精选', '失独父亲为子追讨"见义勇为"证书告政府 一审被驳', 'img/12.jpg', '2017-01-12 00:00:00', '网易要闻');
INSERT INTO `news` VALUES (20, '精选', '2016中华文化人物颁授典礼在深圳完美落幕', 'img/11.jpg', '2017-01-12 00:00:00', '凤凰头条');
INSERT INTO `news` VALUES (22, '精选', '习主席新年首访,立足一国,面向欧洲和全球', 'img/13.jpg', '2017-01-12 00:00:00', '热点');
INSERT INTO `news` VALUES (23, '百家', '代驾师傅闯下大祸，车主向滴滴出行索赔“车子泡水5小时已严重贬值”', 'img/21.jpg', '2017-01-11 00:00:00', '网易');
INSERT INTO `news` VALUES (24, '百家', '骗子QQ冒充亲人“画皮诈骗”，到底是怎么回事？', 'img/22.jpg', '2017-01-11 00:00:00', '网易');
INSERT INTO `news` VALUES (25, '百家', '网购七天无理由退货有新规好办法还需好落实扫码阅读手机版', 'img/23.jpg', '2017-01-11 00:00:00', '网易');
INSERT INTO `news` VALUES (26, '本地', '北京一乘客地铁车厢内使用刀具 网友拍照曝光', 'img/31.jpg', '2017-01-12 00:00:00', '拍照');
INSERT INTO `news` VALUES (27, '本地', '不差钱!曝黄子韬在北京朝阳区看房 真人获赞超帅', 'img/32.jpg', '2017-01-12 00:00:00', '黄子韬');
INSERT INTO `news` VALUES (31, '娱乐', '网瘾少女杨幂早起打游戏 拿高分毫无压力', 'img/41.jpg', '2017-01-12 00:00:00', '娱乐圈');
INSERT INTO `news` VALUES (29, '本地', '早讯丨饿了么跟阿里云联合研发AI送外卖，大数据不正当竞争首案判决 ', 'img/33.jpg', '2017-01-12 00:00:00', '科技');
INSERT INTO `news` VALUES (32, '娱乐', '《遇见爱情的利先生》撒娇陈晓上线 与周冬雨浪漫约会', 'img/42.jpg', '2017-01-12 00:00:00', '周冬雨');
