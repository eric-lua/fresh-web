declare namespace IErrorCode {
  enum ErrorCode {
    OK = 0,
    NeedLogin = 1,

    ActionNotFound = 404,
  }

  enum ErrorMessage {
    OK = 'success',
    NeedLogin = 'Looks like you need to log in.',

    ActionNotFound = 'Action \'%s\' does not found.'
  }
}