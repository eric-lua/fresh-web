import { MiddlewareHandlerContext } from "$fresh/server.ts";

interface IState {
  data: string;
  prop: string;
}

// export async function handler(req: Request, ctx: MiddlewareHandlerContext<IState>) {
//   ctx.state.data = 'state.data'
//   ctx.state.prop = 'prop.data zz'
//   const resp = await ctx.next();
//   resp.headers.set('Route-root', encodeURIComponent('根节点'))
//   return resp;
// }

export const handler = [
  async (req: Request, ctx: MiddlewareHandlerContext<IState>) => {
    ctx.state.data = 'state.data'
    ctx.state.prop = 'prop.data zz'
    const resp = await ctx.next();
    resp.headers.set('Route-root', encodeURIComponent('根节点'))
    return resp;
  },
]