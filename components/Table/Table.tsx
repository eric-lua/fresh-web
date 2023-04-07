import { JSX } from "preact/jsx-runtime";
import { ITable } from "./Table.typing.ts";
import { genRandom } from "../utils/index.ts";
import { Pagination } from "../Pagination/index.ts";

// FIXME  TODO  引入外部依赖会导致报错！！！
// import { genRandom } from "../../utils/index.ts";

// deno-lint-ignore no-explicit-any
export const Table: <T extends Record<string, any>>(props: ITable.Props<T>) => JSX.Element = ({
  columns, data, empty, placeHolder = '-', autoIndex = false, className = '', pagination,
}) => {
  // 全局生成一个当前table的随机标识
  const random = genRandom();

  const renderCellData: <T>(rowData: {
    row: T;
    index: number;
    item: ITable.Column;
    tdIdx: number;
  }) => JSX.Element = ({ row, index, item, tdIdx }) => {
    if (typeof item?.render === 'function') {
      return <td key={`${random}-tr-${index}-td-${tdIdx}`}>{item?.render(row, index)}</td>;
    }
    // deno-lint-ignore no-explicit-any
    return <td key={`${random}-tr-${index}-td-${tdIdx}`}>{(row as any)[item.key] ?? placeHolder}</td>
  }

  const renderTable = () => (
    <table class={`${className}`}>
      <thead>
        <tr>
          {autoIndex && <th class="p-2" key={`${random}-th-i-1`}>{'#'}</th>}
          {columns.map((item, index) => <th class="p-2" key={`${random}-th-${index}`}>{item?.title ?? item.key}</th>)}
        </tr>
      </thead>
      {
        data.length > 0 && <tbody>
          {
            data.map((row, index) => {
              if (!row) return <></>;
              return <tr key={`tr-${random}-${index}`}>
                {autoIndex && <td key={`${random}-tr-${index}-td-i-1`}>{index + 1}</td>}
                {columns.map((item, tdIdx) => {
                  return renderCellData({ row, index, item, tdIdx });
                })}
              </tr>
            })
          }
        </tbody>
      }

      {/* 暂无数据 */}
      {
        !data?.length && <tr>
          <td colSpan={autoIndex ? columns.length + 1 : columns.length} class="text-center">{empty || '暂无数据 (:'}</td>
        </tr>
      }
    </table >
  )

  return <>
    {
      pagination ? <div>
        {renderTable()}
        <Pagination {...pagination} />
      </div>
        :
        renderTable()
    }
  </>
}
