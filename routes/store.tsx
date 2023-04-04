// /** @jsx h */
// import { h } from "preact";

import { Handlers, PageProps } from "$fresh/server.ts";
import PageWarpper from "../components/PageWarpper.tsx";
import Store from "../islands/Store.tsx";
import { useParams } from "../utils/index.ts";

// export const handler = async (req: Request, ctx) => {
//   const user = await Promise.resolve({
//     name: 111,
//     age: 1112,
//   })
//   return ctx.render(user);
// }

export const handler: Handlers = {
  async GET(req: Request, ctx) {
    const { username } = useParams<{ username: string }>(req);
    console.log('store ctx: ', ctx.state);
    
    const user: IUser.User = {
      id: crypto.randomUUID(),
      login: 'true',
      name: username || '没有用户名',
      avatar_url: 'avatar_url-zzz',
    }

    const res = await ctx.render(user);
    res.headers.set('ETK', 'eric-token');

    return res;
  }
}

const store = (p: PageProps<IUser.User>) => {
  const { data } = p;

  return <PageWarpper>
    <Store user={data} />
  </PageWarpper>
}

export default store;
