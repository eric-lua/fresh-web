/**
 * https://github.com/denodrivers/mysql
 */
import { Client } from "mysql/mod.ts";

let res;
try {
  res = Deno.readTextFileSync('./config/mysql.private.config.json')
} catch (_error) {
  res = Deno.readTextFileSync('./config/mysql.config.json')
}
const mysqlInfo = JSON.parse(res);

// NOTE  开发部署配置： copy /config/mysql.config.json to ./config/mysql.private.config.json and modify your db info.
const client = await new Client().connect(mysqlInfo);

// NOTE  test
const inserts = async () => {
  console.log('插入数据');

  const result = await client.execute(`INSERT INTO e_users(user_id, user_name, user_password, user_avatar) values(?,?,?,?)`, [
    crypto.randomUUID(), 'eric' + (Math.random() * 100).toFixed(), '123456', 'avatar',
  ]);

  console.log('插入结果：', result);

  return result;
}

// NOTE  test
const query = async () => {
  const users = await client.query(`select * from e_users where user_name = "eric%"`);
  const queryWithParams = await client.query(
    "select ??,user_name from ?? where user_password = ?",
    ["user_id", "e_users", '123456'],
  );
  console.log(users, queryWithParams);
  return { users, queryWithParams }
}

// NOTE  execSql test
// deno-lint-ignore no-explicit-any
export const execSql: (sql: string) => Promise<any> = async (sql) => {
  try {
    const r = await client.execute(sql);
    return r;
  } catch (error) {
    console.error(error);
    return { result: '执行失败！', error };
  }
}

/** 查询所有数据表 */
export const queryTables: () => Promise<string[]> = async () => {
  const r = await client.query('show tables');
  if (r instanceof Array) return r.map((item: Record<string, string>) => Object.values(item)[0]);
  return [];
}

/** 创建数据表 */
export const createTable = async ({
  tableName, fields, primaryKey, needCreateTime = false, needUpdateTime = false,
}: IMysql.CreateTable) => {
  let sql = "CREATE TABLE `" + tableName + "` (";

  for (const item of fields) {
    let field = '`' + item.field + '`';
    switch (item.type) {
      case 'TIMESTAMP': {
        field += ' TIMESTAMP';
        break;
      }
      case 'CHAR': {
        if (typeof item.constraintValue === 'number') {
          field += ` CHAR(${item.constraintValue})`;
        } else {
          field += ' CHAR';
        }
        break;
      }
      case 'VARCHAR': {
        if (typeof item.constraintValue === 'number') {
          field += ` VARCHAR(${item.constraintValue})`;
        } else {
          field += ' VARCHAR';
        }
        break;
      }
      default:
        break;
    }

    if (item.default !== undefined) field += ` DEFAULT ${item.default}`;

    if (item.notNull) field += ' NOT NULL';

    if (item.onUpdate) field += ` ON UPDATE ${item.onUpdate}`;

    sql = sql + '\n' + field;
  }

  if (needCreateTime) sql += `\`create_time\` timestamp DEFAULT CURRENT_TIMESTAMP,`;
  if (needUpdateTime) sql += `\`update_time\` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,`;

  if (primaryKey) sql += `PRIMARY KEY (\`${primaryKey}\`)`;

  sql += ") ENGINE=InnoDB DEFAULT CHARSET=utf8";
  // let s = "`sr_id` char(100) NOT NULL,\
  //   `sr_title` varchar(100) NOT NULL,\
  //   `sr_content` varchar(100) NOT NULL,\
  //   `sr_remark` varchar(100) DEFAULT NULL,\
  //   `sr_users` varchar(100) DEFAULT NULL,\
  //   `create_time` timestamp DEFAULT CURRENT_TIMESTAMP,\
  //   `update_time` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\
  //   PRIMARY KEY (`sr_id`)\
  // ) ENGINE=InnoDB DEFAULT CHARSET=utf8";
  console.log('CREATE TABLE SQL: ', sql);

  return await client.query(sql);
}

export const queryTableData = async (tableName: string) => {
  const sql = `select * from ${tableName}`;
  return await client.query(sql);
}

export const createDatabases = async (databases: string[]) => {
  // deno 创建数据库
  for (const item of databases) {
    await client.query(`CREATE DATABASE IF NOT EXISTS ${item}`);
  }
}

export {
  inserts, query,
}