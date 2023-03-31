/**
 * 从请求的Request中解析请求参数
 * @param req Request 路由请求的Request
 * @returns <T> 返回的结构体
 */
// deno-lint-ignore no-explicit-any
export const useParams: <T = any>(req: Request) => T = (req) => {
  const url = new URL(req.url);
  const searchParams: URLSearchParams = url.searchParams;

  // NOTE  REVIEW  deno 啥时候能优化泛型的支持呀！！！(
  // deno-lint-ignore ban-ts-comment
  // @ts-ignore
  const result: T = {};
  searchParams.forEach((v, k) => result[k] = v)

  return result;
}