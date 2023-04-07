// deno-lint-ignore-file no-namespace
/**
 * 公共组件错误码
 */
export namespace ILibErrorCode {
  // 60000 - 65535
  export enum ErrorCode {
    ValueRangeError = 60000,
  }

  export enum ErrorMessage {
    ValueRangeError = '数值范围错误',
  }
}
