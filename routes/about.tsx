import PageWarpper from "../components/PageWarpper.tsx";
import { PageProps, Handler, HandlerContext } from "$fresh/server.ts";
// import { models } from "../models/index.ts"
import { query } from "../models/mysql-mod.ts"
import Mysql from "../islands/Mysql.tsx";
/** @type {import('twind').Configuration} */

export const handler: Handler = async (_req: Request, ctx: HandlerContext) => {
  const users = await query();
  return ctx.render({ users });
}

const about = ({ data }: PageProps) => {
  return (
    <PageWarpper>
      <div class="w-full inline-block w-d ani" className="w-1">about</div>
      <hr />
      <pre class='w-block h- tw` w`'>
        {JSON.stringify(data.users, null, ' ')}
      </pre>
      <Mysql />
    </PageWarpper>
  ) 
}

export default about
