// deno-lint-ignore-file no-explicit-any
import { JSX } from "preact";
import { IPagination } from "../Pagination/index.ts";

export declare namespace ITable {
  /** Table 属性 */
  interface Props<T = any> {
    columns: Column[];
    data: T[];
    empty?: string | EmptyRenderFn;
    placeHolder?: string;
    autoIndex?: boolean;
    className?: string;
    pagination?: IPagination.Props;
  }

  /** 表格列属性 */
  interface Column {
    key: string;
    title?: string;
    render?: TdRenderFn;
  }

  /** 单元格render函数 */
  interface TdRenderFn<T = any> {
    (): void;
    (row: T, index?: number): JSX.Element | string | number | boolean;
  }

  interface EmptyRenderFn {
    (): JSX.Element;
    (): string;
  }
}
