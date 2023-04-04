declare namespace IMysql {
  type FieldType = 'CHAR' | 'VARCHAR' | 'TIMESTAMP';
  interface FieldItem {
    field: string;
    type: FieldType;
    constraintValue?: number;
    default?: number | string | boolean;
    notNull?: boolean;
    onUpdate?: string;
  }
  interface CreateTable {
    tableName: string;
    fields: FieldItem[];
    primaryKey?: string;
    needCreateTime?: boolean;
    needUpdateTime?: boolean;
  }
}