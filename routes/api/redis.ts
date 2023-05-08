import redisConnection from "../../models/redis/index.ts";
import { Handlers, HandlerContext } from "$fresh/server.ts";
import { handleActionNotFound, useParams } from "../../utils/index.ts";

export const handler: Handlers = {
  GET: async (_req: Request, _ctx: HandlerContext): Promise<Response> => await new Response(JSON.stringify({ result: 'Not Allowed GET Method!' })),
  POST: async (req: Request, _ctx: HandlerContext): Promise<Response> => {
    const { action = 'noAction' } = useParams<IReqAction>(req);
    console.log('action: ', action);
    let reqJSON;
    try {
      reqJSON = await req.json();
    } catch (_error) {
      console.error('reqJSON error!!!');
    }
    if (reqJSON) console.log('POST 请求 body: ', reqJSON);

    let result: Record<string, unknown> | string[] = {};

    switch (action) {
      case 'GetAllKeys': {
        const res = await getAllKeys();
        result = {
          code: 0,
          data: res,
        }
        break;
      }
      case 'GetValueByKey': {
        const res = await getValuesByKey(reqJSON.key);
        result = {
          code: 0,
          data: res,
        }
        break;
      }
      case 'SetKeyValue': {
        const res = await setKeyValue(reqJSON.key, reqJSON.value);
        result = {
          code: 0,
          data: res,
        }
        break;
      }
      case 'DeleteKey': {
        const res = await deleteKey(reqJSON.key);
        result = {
          code: 0,
          data: res,
        }
        break;
      }
      case 'DeleteAllKeys': {
        const res = await deleteAllKeys();
        result = {
          code: 0,
          data: res,
        }
        break;
      }
      default:
        return handleActionNotFound(action);
    }

    const resp = new Response(JSON.stringify(result));
    resp.headers.set('content-type', 'application/json');
    return resp;
  },
}

// get all keys
async function getAllKeys() {
  const keys = await redisConnection.keys('*');
  console.log('keys: ', keys);
  return keys;
}

// get values by key
async function getValuesByKey(key: string) {
  const value = await redisConnection.get(key);
  console.log('value: ', value);
  return value;
}

// set key value
async function setKeyValue(key: string, value: string) {
  const result = await redisConnection.set(key, value);
  console.log('result: ', result);
  return result;
}

// delete key
async function deleteKey(key: string) {
  const result = await redisConnection.del(key);
  console.log('result: ', result);
  return result;
}

// delete all keys
async function deleteAllKeys() {
  const result = await redisConnection.del('*');
  console.log('result: ', result);
  return result;
}
