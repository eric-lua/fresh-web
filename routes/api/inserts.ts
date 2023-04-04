import { inserts } from "../../models/mysql-mod.ts";
import { HandlerContext } from "$fresh/server.ts";

export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {
  const res = await inserts();
  return new Response(JSON.stringify({ result: res }));
};