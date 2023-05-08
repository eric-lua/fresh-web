// 官方文档：https://deno.land/x/redis
import { connect, RedisConnectOptions, Redis } from "redis/mod.ts";

console.log('redis connect: ', 'start!');


let res: string;
try {
  res = Deno.readTextFileSync('./config/redis.private.config.json');
} catch (_error) {
  res = Deno.readTextFileSync('./config/redis.config.json');
}

export const redis: Redis = await connect(JSON.parse(res) as RedisConnectOptions);

// 测试信息
const ok = await redis.set("ServiceStartTime", "Service started at " + new Date().getTime());

const serviceStartTime = await redis.get("ServiceStartTime");
console.log(`[Redis Test]`, ok === 'OK' ? serviceStartTime : 'Redis connect failed!');

const keys = async (pattern: string) => {
  const keys = await redis.keys(pattern);
  return keys;
}
const get = async (key: string) => {
  const value = await redis.get(key);
  return value;
}
const set = async (key: string, value: string) => {
  const ok = await redis.set(key, value);
  return ok;
}
const del = async (key: string) => {
  let ok;
  if (key === '*') {
    ok = redis.flushall();
  } else {
    ok = await redis.del(key);
  }
  return ok;
}

const redisConnection = { keys, get, set, del };

export default redisConnection;