import { RouteConfig } from "$fresh/server.ts";

export const config: RouteConfig = {
  routeOverride: "/x/:module@:version/:path*",
}
