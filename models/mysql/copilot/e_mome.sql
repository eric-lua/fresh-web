
-- 创建一个备忘录数据表，关联上用户表，备忘录的内容，可以是富文本。
-- CREATe TABLE `e_memo` (
--   `memo_id` char(100) NOT NULL,
--   `memo_title` varchar(100) NOT NULL,
--   `memo_content` varchar(100) NOT NULL,
--   `memo_remark` varchar(100) DEFAULT NULL,
--   `memo_users` varchar(100) DEFAULT NULL,
--   `create_time` timestamp DEFAULT CURRENT_TIMESTAMP,
--   `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,,
--   PRIMARY KEY (`memo_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8
-- char(100)和varchar(100)的区别
-- char(100)是固定长度的，如果不够100个字符，会用空格补齐
-- varchar(100)是可变长度的，如果不够100个字符，会用空格补齐
-- 关联外键用户id
-- ALTER TABLE `e_memo` ADD CONSTRAINT `e_memo_ibfk_1` FOREIGN KEY (`memo_users`) REFERENCES `e_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
-- 外键写到创建备忘录数据表中
-- CREATE TABLE `e_memo` (
--   `memo_id` char(100) NOT NULL,
--   `memo_title` varchar(100) NOT NULL,
--   `memo_content` varchar(100) NOT NULL,
--   `memo_remark` varchar(100) DEFAULT NULL,
--   `memo_users` varchar(100) DEFAULT NULL,
--   `create_time` timestamp DEFAULT CURRENT_TIMESTAMP,
--   `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,,
--   PRIMARY KEY (`memo_id`),
--   CONSTRAINT `e_memo_ibfk_1` FOREIGN KEY (`memo_users`) REFERENCES `e_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8
-- 添加一列相关人员
-- ALTER TABLE `e_memo` ADD `memo_related` VARCHAR(100) NOT NULL AFTER `memo_users`;
-- 写到建表语句中
-- CREATE TABLE `e_memo` (
--   `memo_id` char(100) NOT NULL,
--   `memo_title` varchar(100) NOT NULL,
--   `memo_content` varchar(100) NOT NULL,
--   `memo_remark` varchar(100) DEFAULT NULL,
--   `memo_users` varchar(100) DEFAULT NULL,
--   `memo_related` varchar(100) NOT NULL,
--   `create_time` timestamp DEFAULT CURRENT_TIMESTAMP,
--   `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,,
--   PRIMARY KEY (`memo_id`),
--   CONSTRAINT `e_memo_ibfk_1` FOREIGN KEY (`memo_users`) REFERENCES `e_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8
-- 列表元素怎么做外键约束
-- 1. 一个备忘录可以有多个相关人员，一个人员可以有多个备忘录
-- 2. 一个备忘录只有一个创建人，一个人可以创建多个备忘录
-- 3. 一个备忘录只有一个修改人，一个人可以修改多个备忘录
-- 4. 一个备忘录只有一个删除人，一个人可以删除多个备忘录
-- 5. 一个备忘录只有一个归档人，一个人可以归档多个备忘录
-- 6. 一个备忘录只有一个恢复人，一个人可以恢复多个备忘录
-- 添加一列备忘录状态
-- ALTER TABLE `e_memo` ADD `memo_status` VARCHAR(100) NOT NULL AFTER `memo_related`;
-- 添加一列删除标记
-- ALTER TABLE `e_memo` ADD `memo_delete` VARCHAR(100) NOT NULL AFTER `memo_status`;
-- 一个字段存储多个值怎么做
-- 1. 一个字段存储多个值，用逗号分隔
-- 2. 一个字段存储多个值，用json格式存储
-- 3. 一个字段存储多个值，用xml格式存储
-- 4. 一个字段存储多个值，用数组格式存储
-- 5. 一个字段存储多个值，用对象格式存储
-- 6. 一个字段存储多个值，用二进制格式存储
-- 7. 一个字段存储多个值，用其他格式存储
-- 怎么校验每个值的合法性
-- 1. 前端校验
-- 2. 后端校验
-- 3. 数据库校验
-- 4. 其他校验
-- 5. 无校验
-- 6. 有校验
-- 数据库校验该怎么做
-- 1. 数据库校验，用正则表达式
-- 2. 数据库校验，用枚举
-- 3. 数据库校验，用其他方式
-- 改用建表语句
-- CREATE TABLE `e_memo` (
--   `memo_id` char(100) NOT NULL,
--   `memo_title` varchar(100) NOT NULL,
--   `memo_content` varchar(100) NOT NULL,
--   `memo_remark` varchar(100) DEFAULT NULL,
--   `memo_users` varchar(100) DEFAULT NULL,
--   `memo_related` varchar(100) NOT NULL,
--   `memo_status` varchar(100) NOT NULL,
--   `memo_delete` varchar(100) NOT NULL,
--   `create_time` timestamp DEFAULT CURRENT_TIMESTAMP,
--   `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,,
--   PRIMARY KEY (`memo_id`),
--   CONSTRAINT `e_memo_ibfk_1` FOREIGN KEY (`memo_users`) REFERENCES `e_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8
-- 还有什么需要完善的没
-- 1. 备忘录的状态
-- 2. 备忘录的删除标记
-- 3. 备忘录的创建时间
-- 4. 备忘录的修改时间
-- 5. 备忘录的创建人
-- 6. 备忘录的修改人
-- 7. 备忘录的删除人
-- 8. 备忘录的归档人
-- 9. 备忘录的恢复人
-- 10. 备忘录的相关人员
-- 11. 备忘录的备注
-- 12. 备忘录的内容
-- 13. 备忘录的标题
-- 14. 备忘录的id
-- 补全缺少的字段
-- 添加一列提醒时间
-- ALTER TABLE `e_memo` ADD `memo_remind` VARCHAR(100) NOT NULL AFTER `memo_delete`;
-- 添加一列标签，标签可能是多个
-- ALTER TABLE `e_memo` ADD `memo_tag` VARCHAR(100) NOT NULL AFTER `memo_remind`;
-- 标签改为复数
-- ALTER TABLE `e_memo` ADD `memo_tags` VARCHAR(100) NOT NULL AFTER `memo_remind`;
-- 添加一列操作概要
-- ALTER TABLE `e_memo` ADD `memo_operation` VARCHAR(100) NOT NULL AFTER `memo_tags`;
-- 重写建表语句
-- CREATE TABLE `e_memo` (
--   `memo_id` char(100) NOT NULL,
--   `memo_title` varchar(100) NOT NULL,
--   `memo_content` varchar(100) NOT NULL,
--   `memo_remark` varchar(100) DEFAULT NULL,
--   `memo_users` varchar(100) DEFAULT NULL,
--   `memo_related` varchar(100) NOT NULL,
--   `memo_status` varchar(100) NOT NULL,
--   `memo_delete` varchar(100) NOT NULL,
--   `memo_remind` varchar(100) NOT NULL,
--   `memo_tags` varchar(100) NOT NULL,
--   `memo_operation` varchar(100) NOT NULL,
--   `create_time` timestamp DEFAULT CURRENT_TIMESTAMP,
--   `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,,
--   PRIMARY KEY (`memo_id`),
--   CONSTRAINT `e_memo_ibfk_1` FOREIGN KEY (`memo_users`) REFERENCES `e_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8
-- 建表语句添加上注释，并重写
-- CREATE TABLE `e_memo` (
--   `memo_id` char(100) NOT NULL COMMENT '备忘录id',
--   `memo_title` varchar(100) NOT NULL COMMENT '备忘录标题',
--   `memo_content` varchar(100) NOT NULL COMMENT '备忘录内容',
--   `memo_remark` varchar(100) DEFAULT NULL COMMENT '备忘录备注',
--   `memo_users` varchar(100) DEFAULT NULL COMMENT '备忘录创建人',
--   `memo_related` varchar(100) NOT NULL COMMENT '备忘录相关人员',
--   `memo_status` varchar(100) NOT NULL COMMENT '备忘录状态',
--   `memo_delete` varchar(100) NOT NULL COMMENT '备忘录删除标记',
--   `memo_remind` varchar(100) NOT NULL COMMENT '备忘录提醒时间',
--   `memo_tags` varchar(100) NOT NULL COMMENT '备忘录标签',
--   `memo_operation` varchar(100) NOT NULL COMMENT '备忘录操作概要',
--   `create_time` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '备忘录创建时间',
--   `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '备忘录修改时间',,
--   PRIMARY KEY (`memo_id`),
--   CONSTRAINT `e_memo_ibfk_1` FOREIGN KEY (`memo_users`) REFERENCES `e_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8
-- 存储数据大小修改为合理的值，并重写
CREATE TABLE `e_memo` (
  `memo_id` char(32) NOT NULL COMMENT '备忘录id',
  `memo_title` varchar(100) NOT NULL COMMENT '备忘录标题',
  `memo_content` varchar(1000) NOT NULL COMMENT '备忘录内容',
  `memo_remark` varchar(100) DEFAULT NULL COMMENT '备忘录备注',
  `memo_users` varchar(32) DEFAULT NULL COMMENT '备忘录创建人',
  `memo_related` varchar(100) NOT NULL COMMENT '备忘录相关人员',
  `memo_status` varchar(100) NOT NULL COMMENT '备忘录状态',
  `memo_delete` varchar(100) NOT NULL COMMENT '备忘录删除标记',
  `memo_remind` varchar(100) NOT NULL COMMENT '备忘录提醒时间',
  `memo_tags` varchar(100) NOT NULL COMMENT '备忘录标签',
  `memo_operation` varchar(100) NOT NULL COMMENT '备忘录操作概要',
  `create_time` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '备忘录创建时间',
  `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '备忘录修改时间',,
  PRIMARY KEY (`memo_id`),
  CONSTRAINT `e_memo_ibfk_1` FOREIGN KEY (`memo_users`) REFERENCES `e_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8



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
