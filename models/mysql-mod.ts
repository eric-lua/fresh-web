/**
 * https://github.com/denodrivers/mysql
 */
import { Client } from "https://deno.land/x/mysql@v2.11.0/mod.ts";
const client = await new Client().connect({
  hostname: '43.136.174.110',
  username: 'root',
  password: 'cire@toor',
  db: "eric_mysql",
  poolSize: 3,
});

// `user_id` char(100) NOT NULL,
// `user_name` varchar(100) NOT NULL,
// `user_pass` varchar(100) NOT NULL,
// `user_email` varchar(100) DEFAULT NULL,
// `user_avatar` varchar(40),
const inserts = async () => {
  console.log('插入数据');

  let result = await client.execute(`INSERT INTO e_user(user_id, user_name, user_pass, user_avatar) values(?,?,?,?)`, [
    crypto.randomUUID(), 'eric' + (Math.random() * 100).toFixed(), '123456', 'avatar',
  ]);

  console.log('插入结果：', result);

  return result;
}

const query = async () => {
  const users = await client.query(`select * from e_user where user_name = "eric%"`);
  const queryWithParams = await client.query(
    "select ??,user_name from ?? where user_pass = ?",
    ["user_id", "e_user", '123456'],
  );
  console.log(users, queryWithParams);
  return { users, queryWithParams }
}


export const queryTables = async () => {
  const sql = `show tables`;
  return await client.query(sql);
}

export const createTable = async () => {
  const sql = "CREATE TABLE `e_strong_reminder1` (\
    `sr_id` char(100) NOT NULL,\
    `sr_title` varchar(100) NOT NULL,\
    `sr_content` varchar(100) NOT NULL,\
    `sr_remark` varchar(100) DEFAULT NULL,\
    `sr_users` varchar(100) DEFAULT NULL,\
    `create_time` timestamp DEFAULT CURRENT_TIMESTAMP,\
    `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\
    PRIMARY KEY (`sr_id`)\
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8";
  return await client.query(sql);
}

export const queryTableData = async () => {
  const sql = `select * from e_user`;
  return await client.query(sql);
}

export {
  inserts, query,
}