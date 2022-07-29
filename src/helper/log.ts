export interface Logger {
  info(...args: any[]): void

  debug(...args: any[]): void

  warn(...args: any[]): void

  error(...args: any[]): void

}

function prefixMessage(level: string, component: string, message: string) {
  return `\x1B[97m[\x1B[36m${component}\x1B[97m]\x1B[0m ${level} \x1B[97m${message}`;
}

export function createLogger(component: string): Logger {
  return {
    debug( ...args) {
      console.debug(prefixMessage("\x1B[35mDEBUG\x1B[0m", component, args[0]), ...args.slice(1));
    },
    error(...args) {
      console.error(prefixMessage("\x1B[91mERROR\x1B[0m", component, args[0]), ...args.slice(1));
    },
    info(...args) {
      console.log(prefixMessage("\x1B[32mINFO\x1B[0m", component, args[0]), ...args.slice(1));
    },
    warn(...args) {
      console.warn(prefixMessage("\x1B[93mWARN\x1B[0m", component, args[0]), ...args.slice(1));
    },
  };
}
