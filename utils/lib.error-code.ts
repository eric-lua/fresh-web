/// <reference no-default-lib="true" />
// /// <reference types="./types/error-code.d.ts" />
// @deno-types="./types/error-code.d.ts"


// TODO  FIXME   使用全局类型申明变量老报错！！！
export const libErr = (zzz: string) => IErrorCode.ErrorMessage.ActionNotFound.replace(/%s/, zzz);
