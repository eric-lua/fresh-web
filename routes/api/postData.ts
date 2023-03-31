import { HandlerContext } from "$fresh/server.ts";

const data = {
  a: 'a',
  b: 'b',
  s: 's',
  m: 'post',
}
export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  const resp = new Response(JSON.stringify(data));
  resp.headers.set('content-type', 'application/json')
  return resp;
};
