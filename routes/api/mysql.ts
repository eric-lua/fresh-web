import { createTable, execSql, inserts, queryTableData, queryTables } from "../../models/mysql-mod.ts";
import { Handlers, HandlerContext } from "$fresh/server.ts";
import { handleActionNotFound, useParams } from "../../utils/index.ts";

export const handler: Handlers = {
  GET: async (_req: Request, _ctx: HandlerContext): Promise<Response> => {
    const res = await inserts();
    return new Response(JSON.stringify({ result: res }));
  },
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
      case 'ExecSql': {
        result = await ExecSql(reqJSON.sql);
        break;
      }
      case 'QueryAllTables': {
        result = await QueryAllTables();
        break;
      }
      case 'CreateTable': {
        result = await CreateTable();
        break;
      }
      case 'QueryTableData': {
        result = await QueryTableData(reqJSON.tableName);
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

async function ExecSql(sql: string) {
  const res = await execSql(sql);
  console.log('await execSql: ', res);
  return res;
}
async function QueryAllTables() {
  const res = await queryTables();
  console.log('await queryTables: ', res);
  return res;
}
async function CreateTable() {
  console.log('createTable start');

  // TODO  
  const res = await createTable({});
  console.log('await createTable: ', res);
  return res;
}
async function QueryTableData(tableName: string) {
  console.log('queryTableData start');

  const res = await queryTableData(tableName);
  console.log('await queryTableData: ', res);
  return res;
}
