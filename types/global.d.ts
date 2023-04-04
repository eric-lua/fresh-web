declare namespace IApiV1 {
  type Path = 'noPath' | 'mysql';
  type Action = 'noAction' | 'QueryAllTables' | 'CreateTable' | 'QueryTableData';
}

declare interface IReqAction {
  action: IApiV1.Action;
}