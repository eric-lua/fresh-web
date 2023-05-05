/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import options from "./options.ts";

import { logger as _logger } from "./utils/index.ts";

await start(manifest, {...options, port: 8080});
