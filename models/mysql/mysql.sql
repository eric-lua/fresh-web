drop database if exists eric_mysql; -- TODO ERROR

create database eric_mysql DEFAULT CHARSET utf8 COLLATE utf8_general_ci;

CREATE TABLE `e_user` (
  `user_id` char(100) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_pass` varchar(100) NOT NULL,
  `user_email` varchar(100) DEFAULT NULL,
  `user_OpenID` varchar(100) DEFAULT NULL,
  `user_UnionID` varchar(100) DEFAULT NULL,
  `user_avatar` varchar(40),
  `create_time` timestamp DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8

insert into e_user(user_id,user_name, user_pass) values 
('admin', 'eric', '123456'),
('super', 'tom', '123456');

select * from e_user;
show full columns from `e_user`; -- 查看表字段

CREATE TABLE `e_strong_reminder` (
  `sr_id` char(100) NOT NULL,
  `sr_title` varchar(100) NOT NULL,
  `sr_content` varchar(100) NOT NULL,
  `sr_remark` varchar(100) DEFAULT NULL,
  `sr_users` varchar(100) DEFAULT NULL,
  `create_time` timestamp DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,,
  PRIMARY KEY (`sr_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8


CREATE TABLE `e_strong_reminder` (
  `sr_id` char(100) NOT NULL,
  `sr_title` varchar(100) NOT NULL,
  `sr_content` varchar(100) NOT NULL,
  `sr_remark` varchar(100) DEFAULT NULL,
  `sr_users` varchar(100) DEFAULT NULL,
  `create_time` timestamp DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,,
  PRIMARY KEY (`sr_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8


