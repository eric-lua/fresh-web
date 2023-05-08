declare namespace IApiV1 {
  type Path = 'noPath' | 'mysql';
  type Action = /** Mysql Api */ 'noAction' | 'ExecSql' | 'QueryAllTables' | 'CreateTable' | 'QueryTableData'
  /** Redis Api */ | 'GetAllKeys' | 'GetValueByKey' | 'SetKeyValue' | 'DeleteKey' | 'DeleteAllKeys';
}

declare interface IReqAction {
  action: IApiV1.Action;
}