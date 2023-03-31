import { PageProps } from "$fresh/server.ts";
import { redirect } from "../utils/index.ts";

export const handler = (req: Request) => redirect(req, '/404'); // 重定向到首页
// export const handler = (req: Request, ctx) => {
//   return ctx.renderNotFound();
// }

export default function Greet(props: PageProps) {
  return <></>
}
