import { useEffect, useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

type Props = {}

const MysqlManagerIsland = (props: Props) => {
  const [tables, setTables] = useState<string[]>([])
  const getTables = async () => {
    const result = await fetch('/api/mysql?action=QueryAllTables', { method: 'post' });
    setTables(await result.json());
  }

  const [tableData, setTableData] = useState([])
  const getTableData = async (tableName: string) => {
    const result = await fetch('/api/mysql?action=QueryTableData', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ tableName }),
    })
    setTableData(await result.json())
  }

  const createTable = async () => {
    try {
      const result = await fetch('/api/mysql?action=CreateTable', {
        method: 'post',
        body: JSON.stringify({ sql: 'sqlxxx' }),
      })
      console.log('CreateTable: ', await result.json());
      return await result.json();
    } catch (error) {
      console.error('CreateTable: ', error);
      return error;
    }
  }

  const bodyTest = async () => {
    try {
      const result = await fetch('/api/mysql?action=BodyTest', {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ sql: 'sqlxxx', a: 'a', b: 'b' }),
        // body: `sql=sqlxxx&a=a&b=b`,
      })
      const res = await result.json()
      console.log('CreateTable: ', res);
      return res;
    } catch (error) {
      console.error('CreateTable: ', error);
      return error;
    }
  }

  useEffect(() => {
    getTables();
  }, []);

  return (
    <div class="flex h-full">
      <aside class="w-48">
        <ul>
          {
            tables.map(item => <li key={item} onClick={() => getTableData(item)}>
              {item}
            </li>)
          }
        </ul>
      </aside>
      <main class="flex-1">
        MysqlManagerIsland
        <button
          {...props}
          onClick={createTable}
          disabled={!IS_BROWSER}
          class={`px-3 py-2 bg-white rounded border(gray-500 2) hover:bg-gray-200 active:bg-gray-300 disabled:(opacity-50 cursor-not-allowed) ${'props.class' ?? ""}`}
        >
          新增数据表
        </button>
        <button
          {...props}
          onClick={bodyTest}
          disabled={!IS_BROWSER}
          class={`px-3 py-2 bg-white rounded border(gray-500 2) hover:bg-gray-200 active:bg-gray-300 disabled:(opacity-50 cursor-not-allowed) ${'props.class' ?? ""}`}
        >
          Body 传参测试
        </button>

        <hr />
        {
          tableData.length > 0 && <table>
            <thead>
              <tr>
                {
                  Object.keys(tableData[0]).map(item => <th key={item}>{item}</th>)
                }
              </tr>
            </thead>
            <tbody>
              {/* {tableData.map(item => <tr key={Math.random()}></tr>)} */}
              {tableData.map(item => <tr>
                {Object.values(item).map(v => <td>{v ?? ' - '}</td>)}
              </tr>)}
            </tbody>
          </table>
        }
      </main>
    </div>
  )
}

export default MysqlManagerIsland;
