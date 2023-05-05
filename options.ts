import { FreshOptions } from "$fresh/server.ts";
import twindConfig from "./twind.config.ts";
import twindPlugin from "$fresh/plugins/twindv1.ts";

export default { 
  plugins: [twindPlugin(twindConfig)],
  experimentalDenoServe: false, // 使用 Deno.serve 高性能服务器
} as FreshOptions;