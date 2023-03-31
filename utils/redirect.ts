/**
 * SSR页面重定向
 * @param req Request 请求体
 * @param path ?string 重定向路由，默认重定向到首页
 * @returns Response 302
 */
export const redirect: (req: Request, path?: string) => Response = (req, path) => {
  let location = new URL(req.url).origin;
  if (path) location += path;
  const headers = new Headers({ location });
  return new Response(null, { status: 302, headers });
}
