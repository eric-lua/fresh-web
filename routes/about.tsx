import PageWarpper from "../components/PageWarpper.tsx";
import { PageProps, Handler, HandlerContext } from "$fresh/server.ts";
// import { models } from "../models/index.ts"
import { query } from "../models/mysql-mod.ts"
import Mysql from "../islands/Mysql.tsx";

export const handler: Handler = async (_req: Request, ctx: HandlerContext) => {
  const users = await query();
  return ctx.render({ users });
}

const about = ({ data }: PageProps) => {
  return (
    <PageWarpper>
      <div>about</div>
      <hr />
      <pre>
        {JSON.stringify(data.users, null, ' ')}
      </pre>
      <Mysql />
    </PageWarpper>
  )
}

export default about
