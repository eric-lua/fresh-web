/// <reference no-default-lib="true" />
// /// <reference types="./types/error-code.d.ts" />
// @deno-types="./types/error-code.d.ts"


// TODO  FIXME   使用全局类型申明变量老报错！！！
export const libErr = (zzz: string) => IErrorCode.ErrorMessage.ActionNotFound.replace(/%s/, zzz);

export const libErrorCode = {
  ErrorCode: {
    OK: 0,
    NeedLogin: 1,

    ActionNotFound: 404,
  },

  ErrorMessage: {
    OK: 'success',
    NeedLogin: 'Looks like you need to log in.',

    ActionNotFound: 'Action \'%s\' does not found.',
  }
}
