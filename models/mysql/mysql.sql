-- 创建数据库eric_mysql
-- 字符集为utf8，排序规则为utf8_general_ci
-- 创建之前判断下是否存在，如果存在则删除，字符集为utf8，排序规则为utf8_general_ci
DROP DATABASE IF EXISTS eric_mysql;
CREATE DATABASE eric_mysql DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

-- ########################### e_users ###########################
-- ###########################  用户表  ###########################
-- ########################### e_users ###########################
-- 创建一个微信用户表，需要有手机号、邮箱、微信openid、微信unionid、头像、昵称、性别、所在地代码、微信关注时间、微信关注状态、微信备注等，重新建表
-- CREATe TABLE `e_users` (
--   `user_id` char(100) NOT NULL,
--   `user_phone` varchar(100) NOT NULL,
--   `user_email` varchar(100) NOT NULL,
--   `user_openid` varchar(100) NOT NULL,
--   `user_unionid` varchar(100) NOT NULL,
--   `user_avatar` varchar(100) NOT NULL,
--   `user_nickname` varchar(100) NOT NULL,
--   `user_gender` varchar(100) NOT NULL,
--   `user_location` varchar(100) NOT NULL,
--   `user_subscribe_time` varchar(100) NOT NULL,
--   `user_subscribe_status` varchar(100) NOT NULL,
--   `user_remark` varchar(100) NOT NULL,
--   `create_time` timestamp DEFAULT CURRENT_TIMESTAMP,
--   `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--   PRIMARY KEY (`user_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- 添加一列用户密码
-- ALTER TABLE `e_users` ADD `user_password` VARCHAR(100) NOT NULL AFTER `user_remark`;
-- 字段长度合理不
-- id相关字段修改为36位
-- ALTER TABLE `e_users` MODIFY COLUMN `user_id` char(36) NOT NULL;
-- 添加上备注，重写建表语句
-- CREATe TABLE `e_users` (
--   `user_id` char(36) NOT NULL,
--   `user_phone` varchar(100) NOT NULL,
--   `user_email` varchar(100) NOT NULL,
--   `user_openid` varchar(100) NOT NULL,
--   `user_unionid` varchar(100) NOT NULL,
--   `user_avatar` varchar(100) NOT NULL,
--   `user_nickname` varchar(100) NOT NULL,
--   `user_gender` varchar(100) NOT NULL,
--   `user_location` varchar(100) NOT NULL,
--   `user_subscribe_time` varchar(100) NOT NULL,
--   `user_subscribe_status` varchar(100) NOT NULL,
--   `user_remark` varchar(100) NOT NULL,
--   `user_password` varchar(100) NOT NULL,
--   `create_time` timestamp DEFAULT CURRENT_TIMESTAMP,
--   `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--   PRIMARY KEY (`user_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- 加上字段备注，重写建表语句
-- CREATe TABLE `e_users` (
--   `user_id` char(36) NOT NULL COMMENT '用户id',
--   `user_phone` varchar(100) NOT NULL COMMENT '用户手机号',
--   `user_email` varchar(100) NOT NULL COMMENT '用户邮箱',
--   `user_openid` varchar(100) NOT NULL COMMENT '用户微信openid',
--   `user_unionid` varchar(100) NOT NULL COMMENT '用户微信unionid',
--   `user_avatar` varchar(100) NOT NULL COMMENT '用户头像',
--   `user_nickname` varchar(100) NOT NULL COMMENT '用户昵称',
--   `user_gender` varchar(100) NOT NULL COMMENT '用户性别',
--   `user_location` varchar(100) NOT NULL COMMENT '用户所在地',
--   `user_subscribe_time` varchar(100) NOT NULL COMMENT '用户关注时间',
--   `user_subscribe_status` varchar(100) NOT NULL COMMENT '用户关注状态',
--   `user_remark` varchar(100) NOT NULL COMMENT '用户备注',
--   `user_password` varchar(100) NOT NULL COMMENT '用户密码',
--   `create_time` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
--   `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
--   PRIMARY KEY (`user_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- 添加用户备注字段
-- ALTER TABLE `e_users` ADD `user_remark` VARCHAR(100) NOT NULL AFTER `user_subscribe_status`;
-- 添加用户最后在线时间
-- ALTER TABLE `e_users` ADD `user_last_online_time` TIMESTAMP NOT NULL AFTER `user_remark`;
-- 添加用户状态字段
-- ALTER TABLE `e_users` ADD `user_status` VARCHAR(100) NOT NULL AFTER `user_last_online_time`;
-- 最后在线时间修改为上次登录时间
-- ALTER TABLE `e_users` ADD `user_last_login_time` TIMESTAMP NOT NULL AFTER `user_last_online_time`;
-- 添加上次登陆地点字段
-- ALTER TABLE `e_users` ADD `user_last_login_location` VARCHAR(100) NOT NULL AFTER `user_last_login_time`;
-- 重写建表语句
-- CREATe TABLE `e_users` (
--   `user_id` char(36) NOT NULL COMMENT '用户id',
--   `user_phone` varchar(100) DEFAULT NULL COMMENT '用户手机号',
--   `user_email` varchar(100) DEFAULT NULL COMMENT '用户邮箱',
--   `user_openid` varchar(100) DEFAULT NULL COMMENT '用户微信openid',
--   `user_unionid` varchar(100) DEFAULT NULL COMMENT '用户微信unionid',
--   `user_avatar` varchar(100) DEFAULT NULL COMMENT '用户头像',
--   `user_nickname` varchar(100) NOT NULL COMMENT '用户昵称',
--   `user_gender` varchar(100) NOT NULL COMMENT '用户性别',
--   `user_location` varchar(100) DEFAULT NULL COMMENT '用户所在地',
--   `user_subscribe_time` varchar(100) DEFAULT NULL COMMENT '用户关注时间',
--   `user_subscribe_status` varchar(100) NOT NULL COMMENT '用户关注状态',
--   `user_remark` varchar(100) DEFAULT NULL COMMENT '用户备注',
--   `user_password` varchar(100) DEFAULT NULL COMMENT '用户密码',
--   `user_last_login_time` timestamp DEFAULT NULL COMMENT '用户最后登录时间',
--   `user_last_login_location` varchar(100) DEFAULT NULL COMMENT '用户最后登录地点',
--   `user_status` varchar(100) NOT NULL COMMENT '用户状态',
--   `create_time` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
--   `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
--   PRIMARY KEY (`user_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- 用户性别改为枚举类型：1-男，2-女，-1-未知
-- 用户关注状态改为枚举类型：1-关注，2-取消关注，0-未关注
-- 用户状态改为枚举类型：1-正常，2-禁用，0-删除
-- 非空字段在最前面，枚举值在中间，时间在后面
-- 字段注释加上枚举变量
-- 重写建表语句
CREATE TABLE `e_users` (
    `user_id` char(36) NOT NULL COMMENT '用户id',
    `user_name` varchar(100) NOT NULL COMMENT '用户昵称',
    `user_phone` varchar(100) DEFAULT NULL COMMENT '用户手机号',
    `user_email` varchar(100) DEFAULT NULL COMMENT '用户邮箱',
    `user_openid` varchar(100) DEFAULT NULL COMMENT '用户微信openid',
    `user_unionid` varchar(100) DEFAULT NULL COMMENT '用户微信unionid',
    `user_avatar` varchar(100) DEFAULT NULL COMMENT '用户头像',
    `user_location` varchar(100) DEFAULT NULL COMMENT '用户所在地',
    `user_subscribe_time` varchar(100) DEFAULT NULL COMMENT '用户关注时间',
    `user_remark` varchar(100) DEFAULT NULL COMMENT '用户备注',
    `user_password` varchar(100) DEFAULT NULL COMMENT '用户密码',
    `user_last_login_time` timestamp COMMENT '用户最后登录时间',
    `user_last_login_location` varchar(100) DEFAULT NULL COMMENT '用户最后登录地点',
    `user_gender` enum('1', '2', '-1') DEFAULT '-1' COMMENT '用户性别：1-男，2-女，-1-未知',
    `user_subscribe_status` enum('1', '2', '0') DEFAULT '0' COMMENT '用户关注状态：1-关注，2-取消关注，0-未关注',
    `user_status` enum('1', '2', '0') DEFAULT '1' COMMENT '用户状态：1-正常，2-禁用，0-删除',
    `create_time` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    PRIMARY KEY (`user_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;


-- ########################### e_memo ###########################
-- ###########################  备忘录  ##########################
-- ########################### e_memo ###########################

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
-- CREATE TABLE `e_memo` (
--   `memo_id` char(32) NOT NULL COMMENT '备忘录id',
--   `memo_title` varchar(100) NOT NULL COMMENT '备忘录标题',
--   `memo_content` varchar(1000) NOT NULL COMMENT '备忘录内容',
--   `memo_remark` varchar(100) DEFAULT NULL COMMENT '备忘录备注',
--   `memo_users` varchar(32) DEFAULT NULL COMMENT '备忘录创建人',
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
-- id长度修改为36
-- ALTER TABLE `e_memo` CHANGE `memo_id` `memo_id` CHAR(36) NOT NULL;
-- 重写建表语句
-- CREATE TABLE `e_memo` (
--   `memo_id` char(36) NOT NULL COMMENT '备忘录id',
--   `memo_title` varchar(100) NOT NULL COMMENT '备忘录标题',
--   `memo_content` varchar(1000) NOT NULL COMMENT '备忘录内容',
--   `memo_remark` varchar(100) DEFAULT NULL COMMENT '备忘录备注',
--   `memo_users` varchar(36) DEFAULT NULL COMMENT '备忘录创建人',
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
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- 备忘录提醒时间改为timestamp类型
-- memo_related 默认为空
-- 备忘录状态枚举类型：0-未完成，1-已完成
-- 备忘录删除标记枚举类型：0-未删除，1-已删除
-- 枚举类型修改为tinyint
-- 字段备注添加枚举类型
-- memo_remind 默认为空
-- memo_tags 默认为空
-- memo_operation 默认为空
-- 重新建表
-- CREATE TABLE `e_memo` (
--   `memo_id` char(36) NOT NULL COMMENT '备忘录id',
--   `memo_title` varchar(100) NOT NULL COMMENT '备忘录标题',
--   `memo_content` varchar(1000) NOT NULL COMMENT '备忘录内容',
--   `memo_remark` varchar(100) DEFAULT NULL COMMENT '备忘录备注',
--   `memo_users` varchar(36) DEFAULT NULL COMMENT '备忘录创建人',
--   `memo_related` varchar(100) DEFAULT NULL COMMENT '备忘录相关人员',
--   `memo_status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '备忘录状态：0-未完成，1-已完成',
--   `memo_delete` tinyint(1) NOT NULL DEFAULT '0' COMMENT '备忘录删除标记：0-未删除，1-已删除',
--   `memo_remind` timestamp NULL DEFAULT NULL COMMENT '备忘录提醒时间',
--   `memo_tags` varchar(100) DEFAULT NULL COMMENT '备忘录标签',
--   `memo_operation` varchar(100) DEFAULT NULL COMMENT '备忘录操作概要',
--   `create_time` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '备忘录创建时间',
--   `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '备忘录修改时间',,
--   PRIMARY KEY (`memo_id`),
--   CONSTRAINT `e_memo_ibfk_1` FOREIGN KEY (`memo_users`) REFERENCES `e_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- 字段排序：非空字段最前面，接下来是枚举字段
-- 重新建表
-- CREATE TABLE `e_memo` (
--   `memo_id` char(36) NOT NULL COMMENT '备忘录id',
--   `memo_title` varchar(100) NOT NULL COMMENT '备忘录标题',
--   `memo_content` varchar(1000) NOT NULL COMMENT '备忘录内容',
--   `memo_users` varchar(36) DEFAULT NULL COMMENT '备忘录创建人',
--   `memo_related` varchar(100) DEFAULT NULL COMMENT '备忘录相关人员',
--   `memo_status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '备忘录状态：0-未完成，1-已完成',
--   `memo_delete` tinyint(1) NOT NULL DEFAULT '0' COMMENT '备忘录删除标记：0-未删除，1-已删除',
--   `memo_remind` timestamp NULL DEFAULT NULL COMMENT '备忘录提醒时间',
--   `memo_tags` varchar(100) DEFAULT NULL COMMENT '备忘录标签',
--   `memo_operation` varchar(100) DEFAULT NULL COMMENT '备忘录操作概要',
--   `memo_remark` varchar(100) DEFAULT NULL COMMENT '备忘录备注',
--   `create_time` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '备忘录创建时间',
--   `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '备忘录修改时间',,
--   PRIMARY KEY (`memo_id`),
--   CONSTRAINT `e_memo_ibfk_1` FOREIGN KEY (`memo_users`) REFERENCES `e_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- memo_status字段改为枚举字段
-- memo_delete字段改为枚举字段
-- 重新建表

-- 最终版本
-- NOTE Mysql外键首先需要是索引才可以！！！
CREATE TABLE `e_memo` (
    `memo_id` char(36) NOT NULL COMMENT '备忘录id',
    `memo_title` varchar(100) NOT NULL COMMENT '备忘录标题',
    `memo_content` varchar(1000) NOT NULL COMMENT '备忘录内容',
    `memo_owner` char(36) DEFAULT '' COMMENT '备忘录创建人',
    `memo_related` varchar(100) DEFAULT NULL COMMENT '备忘录相关人员',
    `memo_status` enum('0', '1') DEFAULT '0' COMMENT '备忘录状态：0-未完成，1-已完成',
    `memo_delete` enum('0', '1') DEFAULT '0' COMMENT '备忘录删除标记：0-未删除，1-已删除',
    `memo_remind` timestamp NULL DEFAULT NULL COMMENT '备忘录提醒时间',
    `memo_tags` varchar(100) DEFAULT NULL COMMENT '备忘录标签',
    `memo_operation` varchar(100) DEFAULT NULL COMMENT '备忘录操作概要',
    `memo_remark` varchar(100) DEFAULT NULL COMMENT '备忘录备注',
    `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '备忘录创建时间',
    `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '备忘录修改时间',
    PRIMARY KEY (`memo_id`),
    KEY `memo_owner` (`memo_owner`),
    CONSTRAINT `e_memo_ibfk_1` FOREIGN KEY (`memo_owner`) REFERENCES `e_users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

-- ########################### e_memo_remind ###########################
-- ###########################  微信强提醒记录  ##########################
-- ########################### e_memo_remind ###########################
-- 创建一个微信强提醒模板表
-- CREATE TABLE `e_memo_remind` (
--   `remind_id` char(100) NOT NULL,
--   `remind_title` varchar(100) NOT NULL,
--   `remind_content` varchar(100) NOT NULL,
--   `remind_remark` varchar(100) DEFAULT NULL,
--   `remind_users` varchar(100) DEFAULT NULL,
--   `remind_related` varchar(100) NOT NULL,
--   `remind_status` varchar(100) NOT NULL,
--   `remind_delete` varchar(100) NOT NULL,
--   `remind_remind` varchar(100) NOT NULL,
--   `remind_tags` varchar(100) NOT NULL,
--   `remind_operation` varchar(100) NOT NULL,
--   `create_time` timestamp DEFAULT CURRENT_TIMESTAMP,
--   `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--   PRIMARY KEY (`remind_id`),
--   CONSTRAINT `e_memo_remind_ibfk_1` FOREIGN KEY (`remind_users`) REFERENCES `e_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- 微信强提醒包含哪些功能
-- 上面的建表语句加上备注，重写建表语句
-- CREATE TABLE `e_memo_remind` (
--   `remind_id` char(36) NOT NULL COMMENT '提醒id',
--   `remind_title` varchar(100) NOT NULL COMMENT '提醒标题',
--   `remind_content` varchar(100) NOT NULL COMMENT '提醒内容',
--   `remind_remark` varchar(100) DEFAULT NULL COMMENT '提醒备注',
--   `remind_users` varchar(36) DEFAULT NULL COMMENT '提醒人员',
--   `remind_related` varchar(100) NOT NULL COMMENT '提醒相关人员',
--   `remind_status` varchar(100) NOT NULL COMMENT '提醒状态',
--   `remind_delete` varchar(100) NOT NULL COMMENT '提醒删除标记',
--   `remind_remind` varchar(100) NOT NULL COMMENT '提醒时间',
--   `remind_tags` varchar(100) NOT NULL COMMENT '提醒标签',
--   `remind_operation` varchar(100) NOT NULL COMMENT '提醒操作概要',
--   `create_time` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '提醒创建时间',
--   `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '提醒修改时间',,
--   PRIMARY KEY (`remind_id`),
--   CONSTRAINT `e_memo_remind_ibfk_1` FOREIGN KEY (`remind_users`) REFERENCES `e_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- 加上提醒类型
-- CREATE TABLE `e_memo_remind` (
--   `remind_id` char(36) NOT NULL COMMENT '提醒id',
--   `remind_title` varchar(100) NOT NULL COMMENT '提醒标题',
--   `remind_content` varchar(100) NOT NULL COMMENT '提醒内容',
--   `remind_remark` varchar(100) DEFAULT NULL COMMENT '提醒备注',
--   `remind_users` varchar(36) DEFAULT NULL COMMENT '提醒人员',
--   `remind_related` varchar(100) NOT NULL COMMENT '提醒相关人员',
--   `remind_status` varchar(100) NOT NULL COMMENT '提醒状态',
--   `remind_delete` varchar(100) NOT NULL COMMENT '提醒删除标记',
--   `remind_remind` varchar(100) NOT NULL COMMENT '提醒时间',
--   `remind_tags` varchar(100) NOT NULL COMMENT '提醒标签',
--   `remind_operation` varchar(100) NOT NULL COMMENT '提醒操作概要',
--   `remind_type` varchar(100) NOT NULL COMMENT '提醒类型',
--   `create_time` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '提醒创建时间',
--   `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '提醒修改时间',,
--   PRIMARY KEY (`remind_id`),
--   CONSTRAINT `e_memo_remind_ibfk_1` FOREIGN KEY (`remind_users`) REFERENCES `e_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- 加上提醒来源
-- CREATE TABLE `e_memo_remind` (
--   `remind_id` char(36) NOT NULL COMMENT '提醒id',
--   `remind_title` varchar(100) NOT NULL COMMENT '提醒标题',
--   `remind_content` varchar(100) NOT NULL COMMENT '提醒内容',
--   `remind_remark` varchar(100) DEFAULT NULL COMMENT '提醒备注',
--   `remind_users` varchar(36) DEFAULT NULL COMMENT '提醒人员',
--   `remind_related` varchar(100) NOT NULL COMMENT '提醒相关人员',
--   `remind_status` varchar(100) NOT NULL COMMENT '提醒状态',
--   `remind_delete` varchar(100) NOT NULL COMMENT '提醒删除标记',
--   `remind_remind` varchar(100) NOT NULL COMMENT '提醒时间',
--   `remind_tags` varchar(100) NOT NULL COMMENT '提醒标签',
--   `remind_operation` varchar(100) NOT NULL COMMENT '提醒操作概要',
--   `remind_type` varchar(100) NOT NULL COMMENT '提醒类型',
--   `remind_source` varchar(100) NOT NULL COMMENT '提醒来源',
--   `create_time` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '提醒创建时间',
--   `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '提醒修改时间',,
--   PRIMARY KEY (`remind_id`),
--   CONSTRAINT `e_memo_remind_ibfk_1` FOREIGN KEY (`remind_users`) REFERENCES `e_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- 提醒来源关联备忘录表外键
-- ALTER TABLE `e_memo_remind` ADD CONSTRAINT `e_memo_remind_ibfk_2` FOREIGN KEY (`remind_source`) REFERENCES `e_memo` (`memo_id`) ON DELETE CASCADE ON UPDATE CASCADE;
-- 重写一下上面建表语句
-- CREATE TABLE `e_memo_remind` (
--   `remind_id` char(36) NOT NULL COMMENT '提醒id',
--   `remind_title` varchar(100) NOT NULL COMMENT '提醒标题',
--   `remind_content` varchar(100) NOT NULL COMMENT '提醒内容',
--   `remind_remark` varchar(100) DEFAULT NULL COMMENT '提醒备注',
--   `remind_users` varchar(36) DEFAULT NULL COMMENT '提醒人员',
--   `remind_related` varchar(100) NOT NULL COMMENT '提醒相关人员',
--   `remind_status` varchar(100) NOT NULL COMMENT '提醒状态',
--   `remind_delete` varchar(100) NOT NULL COMMENT '提醒删除标记',
--   `remind_remind` varchar(100) NOT NULL COMMENT '提醒时间',
--   `remind_tags` varchar(100) NOT NULL COMMENT '提醒标签',
--   `remind_operation` varchar(100) NOT NULL COMMENT '提醒操作概要',
--   `remind_type` varchar(100) NOT NULL COMMENT '提醒类型',
--   `remind_source` varchar(100) NOT NULL COMMENT '提醒来源',
--   `create_time` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '提醒创建时间',
--   `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '提醒修改时间',,
--   PRIMARY KEY (`remind_id`),
--   CONSTRAINT `e_memo_remind_ibfk_1` FOREIGN KEY (`remind_users`) REFERENCES `e_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
--   CONSTRAINT `e_memo_remind_ibfk_2` FOREIGN KEY (`remind_source`) REFERENCES `e_memo` (`memo_id`) ON DELETE CASCADE ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- 优化枚举字段
-- 提醒状态：0-未提醒，1-已提醒，2-已完成，3-已取消，4-已删除
-- 提醒删除标记：0-未删除，1-已删除
-- 提醒类型：0-无，1-日程，2-会议，3-任务，4-电话，5-邮件，6-短信，7-微信，8-其他，9-自定义
-- 字段备注加上枚举定义
-- 重写建表语句
-- CREATE TABLE `e_memo_remind` (
--   `remind_id` char(36) NOT NULL COMMENT '提醒id',
--   `remind_title` varchar(100) NOT NULL COMMENT '提醒标题',
--   `remind_content` varchar(100) NOT NULL COMMENT '提醒内容',
--   `remind_remark` varchar(100) DEFAULT NULL COMMENT '提醒备注',
--   `remind_users` varchar(36) DEFAULT NULL COMMENT '提醒人员',
--   `remind_related` varchar(100) NOT NULL COMMENT '提醒相关人员',
--   `remind_status` varchar(100) NOT NULL COMMENT '提醒状态，0-未提醒，1-已提醒，2-已完成，3-已取消，4-已删除',
--   `remind_delete` varchar(100) NOT NULL COMMENT '提醒删除标记，0-未删除，1-已删除',
--   `remind_remind` varchar(100) NOT NULL COMMENT '提醒时间',
--   `remind_tags` varchar(100) NOT NULL COMMENT '提醒标签',
--   `remind_operation` varchar(100) NOT NULL COMMENT '提醒操作概要',
--   `remind_type` varchar(100) NOT NULL COMMENT '提醒类型，0-无，1-日程，2-会议，3-任务，4-电话，5-邮件，6-短信，7-微信，8-其他，9-自定义',
--   `remind_source` varchar(100) NOT NULL COMMENT '提醒来源',
--   `create_time` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '提醒创建时间',
--   `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '提醒修改时间',,
--   PRIMARY KEY (`remind_id`),
--   CONSTRAINT `e_memo_remind_ibfk_1` FOREIGN KEY (`remind_users`) REFERENCES `e_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
--   CONSTRAINT `e_memo_remind_ibfk_2` FOREIGN KEY (`remind_source`) REFERENCES `e_memo` (`memo_id`) ON DELETE CASCADE ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- 枚举字段类型改为枚举定义
-- 提醒时间 改为 timestamp，默认为空
-- 重写建表语句
-- CREATE TABLE `e_memo_remind` (
--   `remind_id` char(36) NOT NULL COMMENT '提醒id',
--   `remind_title` varchar(100) NOT NULL COMMENT '提醒标题',
--   `remind_content` varchar(100) NOT NULL COMMENT '提醒内容',
--   `remind_remark` varchar(100) DEFAULT NULL COMMENT '提醒备注',
--   `remind_users` varchar(36) DEFAULT NULL COMMENT '提醒人员',
--   `remind_related` varchar(100) NOT NULL COMMENT '提醒相关人员',
--   `remind_status` enum('0','1','2','3','4') NOT NULL COMMENT '提醒状态，0-未提醒，1-已提醒，2-已完成，3-已取消，4-已删除',
--   `remind_delete` enum('0','1') NOT NULL COMMENT '提醒删除标记，0-未删除，1-已删除',
--   `remind_remind` timestamp NULL DEFAULT NULL COMMENT '提醒时间',
--   `remind_tags` varchar(100) NOT NULL COMMENT '提醒标签',
--   `remind_operation` varchar(100) NOT NULL COMMENT '提醒操作概要',
--   `remind_type` enum('0','1','2','3','4','5','6','7','8','9') NOT NULL COMMENT '提醒类型，0-无，1-日程，2-会议，3-任务，4-电话，5-邮件，6-短信，7-微信，8-其他，9-自定义',
--   `remind_source` varchar(100) NOT NULL COMMENT '提醒来源',
--   `create_time` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '提醒创建时间',
--   `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '提醒修改时间',,
--   PRIMARY KEY (`remind_id`),
--   CONSTRAINT `e_memo_remind_ibfk_1` FOREIGN KEY (`remind_users`) REFERENCES `e_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
--   CONSTRAINT `e_memo_remind_ibfk_2` FOREIGN KEY (`remind_source`) REFERENCES `e_memo` (`memo_id`) ON DELETE CASCADE ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- 非空字段放最前面，其次是枚举类型，最后是时间类型
-- 重写建表语句
CREATE TABLE `e_memo_remind` (
  `remind_id` char(36) NOT NULL COMMENT '提醒id',
  `remind_title` varchar(100) NOT NULL COMMENT '提醒标题',
  `remind_content` varchar(100) NOT NULL COMMENT '提醒内容',
  `remind_source` char(36) DEFAULT NULL COMMENT '提醒来源',
  `remind_type` enum('0','1','2','3','4','5','6','7','8','9') DEFAULT '0' COMMENT '提醒类型，0-无，1-日程，2-会议，3-任务，4-电话，5-邮件，6-短信，7-微信，8-其他，9-自定义',
  `remind_status` enum('0','1','2','3','4') DEFAULT '0' COMMENT '提醒状态，0-未提醒，1-已提醒，2-已完成，3-已取消，4-已删除',
  `remind_delete` enum('0','1') DEFAULT '0' COMMENT '提醒删除标记，0-未删除，1-已删除',
  `remind_users` varchar(108) DEFAULT NULL COMMENT '提醒人员',
  `remind_related` varchar(100) DEFAULT NULL COMMENT '提醒相关人员',
  `remind_tags` varchar(100) DEFAULT NULL COMMENT '提醒标签',
  `remind_operation` varchar(100) DEFAULT NULL COMMENT '提醒操作概要',
  `remind_remark` varchar(100) DEFAULT NULL COMMENT '提醒备注',
  `remind_remind` timestamp NULL DEFAULT NULL COMMENT '提醒时间',
  `create_time` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '提醒创建时间',
  `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '提醒修改时间',
  PRIMARY KEY (`remind_id`),
  KEY `remind_source` (`remind_source`),
  CONSTRAINT `e_memo_remind_ibfk_2` FOREIGN KEY (`remind_source`) REFERENCES `e_memo` (`memo_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ############################ e_family ############################
-- ############################  家庭管理  ###########################
-- ############################ e_family ############################
-- 创建一个家庭表
-- CREATE TABLE `e_family` (
--   `family_id` char(36) NOT NULL COMMENT '家庭id',
--   `family_name` varchar(100) NOT NULL COMMENT '家庭名称',
--   `family_remark` varchar(100) DEFAULT NULL COMMENT '家庭备注',
--   `family_users` varchar(36) DEFAULT NULL COMMENT '家庭成员',
--   `family_status` varchar(100) DEFAULT 0 COMMENT '家庭状态' ,
--   `family_delete` varchar(100) DEFAULT 0 COMMENT '家庭删除标记' ,
--   `family_tags` varchar(100) DEFAULT NULL COMMENT '家庭标签',
--   `family_operation` varchar(100) DEFAULT NULL COMMENT '家庭操作概要',
--   `family_type` varchar(100) DEFAULT NULL COMMENT '家庭类型',
--   `family_source` varchar(100) DEFAULT NULL COMMENT '家庭来源',
--   `create_time` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '家庭创建时间',  
--   `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '家庭修改时间',
--   PRIMARY KEY (`family_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- 非空字段放最前面，其次是枚举类型，最后是时间类型
-- 重写建表语句
-- CREATE TABLE `e_family` (
--   `family_id` char(36) NOT NULL COMMENT '家庭id',
--   `family_name` varchar(100) NOT NULL COMMENT '家庭名称',
--   `family_remark` varchar(100) DEFAULT NULL COMMENT '家庭备注',
--   `family_users` varchar(36) DEFAULT NULL COMMENT '家庭成员',
--   `family_status` enum('0','1','2','3','4') NOT NULL COMMENT '家庭状态，0-正常，1-已删除，2-已取消，3-已完成，4-已过期',
--   `family_delete` enum('0','1') NOT NULL COMMENT '家庭删除标记，0-未删除，1-已删除',
--   `family_tags` varchar(100) DEFAULT NULL COMMENT '家庭标签',
--   `family_operation` varchar(100) DEFAULT NULL COMMENT '家庭操作概要',
--   `family_type` varchar(100) DEFAULT NULL COMMENT '家庭类型',
--   `family_source` varchar(100) DEFAULT NULL COMMENT '家庭来源',
--   `create_time` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '家庭创建时间',  
--   `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '家庭修改时间',
--   PRIMARY KEY (`family_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- 添加家庭所有者列，并关联用户表
-- ALTER TABLE `e_family` ADD `family_owner` VARCHAR(36) NOT NULL COMMENT '家庭所有者' AFTER `family_id`;
-- ALTER TABLE `e_family` ADD CONSTRAINT `e_family_ibfk_1` FOREIGN KEY (`family_owner`) REFERENCES `e_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
-- 重新建表
-- CREATE TABLE `e_family` (
--   `family_id` char(36) NOT NULL COMMENT '家庭id',
--   `family_name` varchar(100) NOT NULL COMMENT '家庭名称',
--   `family_remark` varchar(100) DEFAULT NULL COMMENT '家庭备注',
--   `family_users` varchar(36) DEFAULT NULL COMMENT '家庭成员',
--   `family_status` enum('0','1','2','3','4') NOT NULL COMMENT '家庭状态，0-正常，1-已删除，2-已取消，3-已完成，4-已过期',
--   `family_delete` enum('0','1') NOT NULL COMMENT '家庭删除标记，0-未删除，1-已删除',
--   `family_tags` varchar(100) DEFAULT NULL COMMENT '家庭标签',
--   `family_operation` varchar(100) DEFAULT NULL COMMENT '家庭操作概要',
--   `family_type` varchar(100) DEFAULT NULL COMMENT '家庭类型',
--   `family_source` varchar(100) DEFAULT NULL COMMENT '家庭来源',
--   `family_owner` varchar(36) NOT NULL COMMENT '家庭所有者',
--   `create_time` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '家庭创建时间',  
--   `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '家庭修改时间',
--   PRIMARY KEY (`family_id`),
--   CONSTRAINT `e_family_ibfk_1` FOREIGN KEY (`family_owner`) REFERENCES `e_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- 字段排序
-- 重新建表
CREATE TABLE `e_family` (
  `family_id` char(36) NOT NULL COMMENT '家庭id',
  `family_name` varchar(100) NOT NULL COMMENT '家庭名称',
  `family_owner` char(36) DEFAULT NULL COMMENT '家庭所有者',
  `family_users` varchar(36) DEFAULT NULL COMMENT '家庭成员',
  `family_remark` varchar(100) DEFAULT NULL COMMENT '家庭备注',
  `family_status` enum('0','1','2','3','4') DEFAULT '0' COMMENT '家庭状态，0-正常，1-已删除，2-已取消，3-已完成，4-已过期',
  `family_delete` enum('0','1') DEFAULT '0' COMMENT '家庭删除标记，0-未删除，1-已删除',
  `family_tags` varchar(100) DEFAULT NULL COMMENT '家庭标签',
  `family_operation` varchar(100) DEFAULT NULL COMMENT '家庭操作概要',
  `family_type` varchar(100) DEFAULT NULL COMMENT '家庭类型',
  `family_source` varchar(100) DEFAULT NULL COMMENT '家庭来源',
  `create_time` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '家庭创建时间',  
  `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '家庭修改时间',
  PRIMARY KEY (`family_id`),
  KEY `family_owner` (`family_owner`),
  CONSTRAINT `e_family_ibfk_1` FOREIGN KEY (`family_owner`) REFERENCES `e_users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- ############################ e_log ############################
-- ###########################  操作日志 ##########################
-- ############################ e_log ############################
-- 创建一个日志表
-- CREATE TABLE `e_log` (
--   `log_id` char(36) NOT NULL COMMENT '日志id',
--   `log_title` varchar(100) NOT NULL COMMENT '日志标题',
--   `log_content` varchar(100) NOT NULL COMMENT '日志内容',
--   `log_users` varchar(36) DEFAULT NULL COMMENT '日志人员',
--   `log_remark` varchar(100) DEFAULT NULL COMMENT '日志备注',
--   `log_related` varchar(100) DEFAULT NULL COMMENT '日志相关人员',
--   `log_status` varchar(100) DEFAULT 0 COMMENT '日志状态' ,
--   `log_delete` varchar(100) DEFAULT 0 COMMENT '日志删除标记' ,
--   `log_tags` varchar(100) DEFAULT NULL COMMENT '日志标签',
--   `log_operation` varchar(100) DEFAULT NULL COMMENT '日志操作概要',
--   `log_type` varchar(100) DEFAULT 0 COMMENT '日志类型',
--   `log_source` varchar(100) NOT NULL COMMENT '日志来源',
--   `create_time` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '日志创建时间',
--   `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '日志修改时间',,
--   PRIMARY KEY (`log_id`),
--   CONSTRAINT `e_log_ibfk_1` FOREIGN KEY (`log_related`) REFERENCES `e_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- 日志类型改为枚举类型：0-系统日志，1-业务日志
-- 日志状态改为枚举类型：0-正常，1-异常
-- 日志来源改为枚举类型：0-系统，1-业务
-- 日志删除标记改为枚举类型：0-正常，1-删除
-- 重新建表
-- CREATE TABLE `e_log` (
--   `log_id` char(36) NOT NULL COMMENT '日志id',
--   `log_title` varchar(100) NOT NULL COMMENT '日志标题',
--   `log_content` varchar(100) NOT NULL COMMENT '日志内容',
--   `log_users` varchar(36) DEFAULT NULL COMMENT '日志人员',
--   `log_remark` varchar(100) DEFAULT NULL COMMENT '日志备注',
--   `log_related` varchar(100) DEFAULT NULL COMMENT '日志相关人员',
--   `log_status` enum('0','1') DEFAULT '0' COMMENT '日志状态' ,
--   `log_delete` enum('0','1') DEFAULT '0' COMMENT '日志删除标记' ,
--   `log_tags` varchar(100) DEFAULT NULL COMMENT '日志标签',
--   `log_operation` varchar(100) DEFAULT NULL COMMENT '日志操作概要',
--   `log_type` enum('0','1') DEFAULT '0' COMMENT '日志类型',
--   `log_source` enum('0','1') NOT NULL COMMENT '日志来源',
--   `create_time` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '日志创建时间',
--   `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '日志修改时间',,
--   PRIMARY KEY (`log_id`),
--   CONSTRAINT `e_log_ibfk_1` FOREIGN KEY (`log_related`) REFERENCES `e_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- 日志来源改为字符串，关联外键备忘录表id
-- 重新建表
-- CREATE TABLE `e_log` (
--   `log_id` char(36) NOT NULL COMMENT '日志id',
--   `log_title` varchar(100) NOT NULL COMMENT '日志标题',
--   `log_content` varchar(100) NOT NULL COMMENT '日志内容',
--   `log_users` varchar(36) DEFAULT NULL COMMENT '日志人员',
--   `log_remark` varchar(100) DEFAULT NULL COMMENT '日志备注',
--   `log_related` varchar(100) DEFAULT NULL COMMENT '日志相关人员',
--   `log_status` enum('0','1') DEFAULT '0' COMMENT '日志状态' ,
--   `log_delete` enum('0','1') DEFAULT '0' COMMENT '日志删除标记' ,
--   `log_tags` varchar(100) DEFAULT NULL COMMENT '日志标签',
--   `log_operation` varchar(100) DEFAULT NULL COMMENT '日志操作概要',
--   `log_type` enum('0','1') DEFAULT '0' COMMENT '日志类型',
--   `log_source` varchar(100) NOT NULL COMMENT '日志来源',
--   `create_time` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '日志创建时间',
--   `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '日志修改时间',,
--   PRIMARY KEY (`log_id`),
--   CONSTRAINT `e_log_ibfk_1` FOREIGN KEY (`log_related`) REFERENCES `e_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- 字段备注记录下枚举定义
-- 重新建表
CREATE TABLE `e_log` (
  `log_id` char(36) NOT NULL COMMENT '日志id',
  `log_title` varchar(100) NOT NULL COMMENT '日志标题',
  `log_content` varchar(100) NOT NULL COMMENT '日志内容',
  `log_users` varchar(36) DEFAULT NULL COMMENT '日志人员',
  `log_remark` varchar(100) DEFAULT NULL COMMENT '日志备注',
  `log_related` varchar(100) DEFAULT NULL COMMENT '日志相关人员',
  `log_status` enum('0','1') DEFAULT '0' COMMENT '日志状态：0-正常，1-异常' ,
  `log_delete` enum('0','1') DEFAULT '0' COMMENT '日志删除标记：0-正常，1-删除' ,
  `log_tags` varchar(100) DEFAULT NULL COMMENT '日志标签',
  `log_operation` varchar(100) DEFAULT NULL COMMENT '日志操作概要',
  `log_type` enum('0','1') DEFAULT '0' COMMENT '日志类型：0-系统日志，1-业务日志' ,
  `log_source` varchar(100) DEFAULT '0' COMMENT '日志来源：0-系统，1-业务',
  `create_time` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '日志创建时间',
  `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '日志修改时间',
  PRIMARY KEY (`log_id`),
  KEY `create_time` (`create_time`),
  KEY `update_time` (`update_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ########################### e_log_insert ###########################
-- ########################### 日志记录存储过程 ##########################
-- ########################### e_log_insert ###########################
-- 添加其他表的增删改日志记录存储过程
-- DELIMITER $$
-- CREATE PROCEDURE `e_log_insert`(
--   IN `log_title` VARCHAR(100),
--   IN `log_content` VARCHAR(100),
--   IN `log_remark` VARCHAR(100),
--   IN `log_users` VARCHAR(36),
--   IN `log_related` VARCHAR(100),
--   IN `log_status` VARCHAR(100),
--   IN `log_delete` VARCHAR(100),
--   IN `log_tags` VARCHAR(100),
--   IN `log_operation` VARCHAR(100),
--   IN `log_type` VARCHAR(100),
--   IN `log_source` VARCHAR(100)
-- )
-- BEGIN
--   INSERT INTO `e_log`(`log_id`, `log_title`, `log_content`, `log_remark`, `log_users`, `log_related`, `log_status`, `log_delete`, `log_tags`, `log_operation`, `log_type`, `log_source`) VALUES (UUID(), log_title, log_content, log_remark, log_users, log_related, log_status, log_delete, log_tags, log_operation, log_type, log_source);
-- END$$
-- DELIMITER ;
-- 更新e_log_insert数据类型
-- 重新创建
DELIMITER $$
CREATE PROCEDURE `e_log_insert`(
  IN `log_title` VARCHAR(100),
  IN `log_content` VARCHAR(100),
  IN `log_remark` VARCHAR(100),
  IN `log_users` VARCHAR(36),
  IN `log_related` VARCHAR(100),
  IN `log_status` ENUM('0','1'),
  IN `log_delete` ENUM('0','1'),
  IN `log_tags` VARCHAR(100),
  IN `log_operation` VARCHAR(100),
  IN `log_type` ENUM('0','1'),
  IN `log_source` VARCHAR(100)
)
BEGIN
  INSERT INTO `e_log`(`log_id`, `log_title`, `log_content`, `log_remark`, `log_users`, `log_related`, `log_status`, `log_delete`, `log_tags`, `log_operation`, `log_type`, `log_source`) VALUES (UUID(), log_title, log_content, log_remark, log_users, log_related, log_status, log_delete, log_tags, log_operation, log_type, log_source);
END$$
DELIMITER ;


-- DELIMITER $$ 是什么意思
-- DELIMITER $$ 是用来分隔存储过程的，如果不加这个，那么在存储过程中使用分号就会报错，因为分号是用来分隔语句的，而存储过程中的语句是用分号分隔的，所以在存储过程中使用分号就会报错，所以需要用DELIMITER $$来分隔存储过程，这样就不会报错了。

-- e_memo_remind 表增删改日志记录
DELIMITER $$
CREATE TRIGGER `e_memo_remind_insert` AFTER INSERT ON `e_memo_remind` FOR EACH ROW
BEGIN
  CALL e_log_insert('新增备忘提醒', NEW.remind_users, '新增备忘提醒', NEW.remind_users, NEW.remind_users, '0', '0', '备忘提醒', '新增备忘提醒', '0', '0');
END$$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER `e_memo_remind_update` AFTER UPDATE ON `e_memo_remind` FOR EACH ROW
BEGIN
  CALL e_log_insert('修改备忘提醒', NEW.remind_users, '修改备忘提醒', NEW.remind_users, NEW.remind_users, '0', '0', '备忘提醒', '修改备忘提醒', '0', '0');
END$$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER `e_memo_remind_delete` AFTER DELETE ON `e_memo_remind` FOR EACH ROW
BEGIN
  CALL e_log_insert('删除备忘提醒', OLD.remind_users, '删除备忘提醒', OLD.remind_users, OLD.remind_users, '0', '0', '备忘提醒', '删除备忘提醒', '0', '0');
END$$
DELIMITER ;



-- e_memo 表增删改日志记录
DELIMITER $$
CREATE TRIGGER `e_memo_insert` AFTER INSERT ON `e_memo` FOR EACH ROW
BEGIN
  CALL e_log_insert('新增备忘', NEW.memo_content, '新增备忘', NEW.memo_owner, NEW.memo_owner, '0', '0', '备忘', '新增备忘', '0', '0');
END$$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER `e_memo_update` AFTER UPDATE ON `e_memo` FOR EACH ROW
BEGIN
  CALL e_log_insert('修改备忘', NEW.memo_content, '修改备忘', NEW.memo_owner, NEW.memo_owner, '0', '0', '备忘', '修改备忘', '0', '0');
END$$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER `e_memo_delete` AFTER DELETE ON `e_memo` FOR EACH ROW
BEGIN
  CALL e_log_insert('删除备忘', OLD.memo_content, '删除备忘', OLD.memo_owner, OLD.memo_owner, '0', '0', '备忘', '删除备忘', '0', '0');
END$$
DELIMITER ;

-- e_users 表增删改日志记录
DELIMITER $$
CREATE TRIGGER `e_users_insert` AFTER INSERT ON `e_users` FOR EACH ROW
BEGIN
  CALL e_log_insert('新增用户', NEW.user_name, '新增用户', NEW.user_id, NEW.user_id, '0', '0', '用户', '新增用户', '0', '0');
END$$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER `e_users_update` AFTER UPDATE ON `e_users` FOR EACH ROW
BEGIN
  CALL e_log_insert('修改用户', NEW.user_name, '修改用户', NEW.user_id, NEW.user_id, '0', '0', '用户', '修改用户', '0', '0');
END$$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER `e_users_delete` AFTER DELETE ON `e_users` FOR EACH ROW
BEGIN
  CALL e_log_insert('删除用户', OLD.user_name, '删除用户', OLD.user_id, OLD.user_id, '0', '0', '用户', '删除用户', '0', '0');
END$$
DELIMITER ;

-- e_family 表增删改日志记录
DELIMITER $$
CREATE TRIGGER `e_family_insert` AFTER INSERT ON `e_family` FOR EACH ROW
BEGIN
  CALL e_log_insert('新增家庭', NEW.family_name, '新增家庭', NEW.family_users, NEW.family_users, '0', '0', '家庭', '新增家庭', '0', '0');
END$$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER `e_family_update` AFTER UPDATE ON `e_family` FOR EACH ROW
BEGIN
  CALL e_log_insert('修改家庭', NEW.family_name, '修改家庭', NEW.family_users, NEW.family_users, '0', '0', '家庭', '修改家庭', '0', '0');
END$$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER `e_family_delete` AFTER DELETE ON `e_family` FOR EACH ROW
BEGIN
  CALL e_log_insert('删除家庭', OLD.family_name, '删除家庭', OLD.family_users, OLD.family_users, '0', '0', '家庭', '删除家庭', '0', '0');
END$$
DELIMITER ;

