// deno-lint-ignore-file no-empty
/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

import { logger as _logger } from "./utils/index.ts";

await start(manifest, { plugins: [twindPlugin(twindConfig)], port: 8080 });
