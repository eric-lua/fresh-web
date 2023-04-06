import { fileLoggerOptions } from "logger/interface.ts";
import Logger from "logger/logger.ts";

const logger = new Logger();

// await logger.initFileLogger(Deno.cwd() + '/log', {
await logger.initFileLogger('log', {
  rotate: true, // cut by day
  now: true, // print datetime or not
  maxBytes: 10 * 1024, // the maximum size in bytes that the log file can grow to before rolling over to a new one
  maxBackupCount: 10, // maxBackupCount must work with maxBytes
} as fileLoggerOptions);

let Version = 'development';
// deno-lint-ignore no-empty no-extra-semi
try { Version = Deno.env.get('DENO_DEPLOYMENT_ID') ?? Version } catch (_error) { };
if (Version !== 'development') logger.disableConsole();

// logger.info('======== ======== ======== ========');
logger.info(
  '\n======== ======== ======== ========\nStarting fresh web app ...',
  '\nVersion:\t', Version,
  '\nWorkspace:\t', Deno.cwd(),
);

// logger.info('aaa')
// logger.warn('aaa')
// logger.info('aaa')
logger.warn('deno logger 目前处于不可用状态！！！')

// logger.info('i am from consoleLogger', { env: Version });
// logger.warn('i am from consoleLogger', 1, 'any');
// logger.error('i am from consoleLogger', new Error('test'));


export { logger };
