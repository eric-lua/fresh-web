import { useEffect, useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { ITable, Table } from "../components/index.ts";
import { Button } from "../components/Button.tsx";

type Props = {
  type?: string;
}

const MysqlManagerIsland = (props: Props) => {
  const [tables, setTables] = useState<string[]>([])
  const [selectedTable, setSelectedTable] = useState<string>(tables[0]);
  const getTables = async () => {
    const result = await fetch('/api/mysql?action=QueryAllTables', { method: 'post' });
    setTables(await result.json());
  }

  // deno-lint-ignore no-explicit-any
  const [tableData, setTableData] = useState<any[]>([])
  const getTableData = async (tableName: string) => {
    setSelectedTable(tableName);
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

  // sql test
  const [inputSql, setInputSql] = useState<string>('');
  const handleInputSql = async () => {
    console.log('handleInputSql inputSql: ', inputSql);
    const inputSqlResult = await fetch('/api/mysql?action=ExecSql', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ sql: inputSql }),
    });
    console.log('inputSqlResult: ', await inputSqlResult.json());
  }

  const getColumns = () => {
    if (tableData?.length > 0 && tableData[0]) {
      return Object.keys(tableData[0]).map(item => ({ key: item }));
    }
    return [];
  }

  useEffect(() => {
    getTables();
  }, []);

  return (
    <div class="flex h-full">
      <aside class="w-48">
        <ul>
          {
            tables.map(item => <li key={item} onClick={() => getTableData(item)} class={`${selectedTable === item ? 'text-blue-800' : ''}`}>
              {item}
            </li>)
          }
        </ul>
      </aside>
      <main class="flex-1">
        <div>
          <span>sql 集中测试：</span>
          <input
            {...props}
            disabled={!IS_BROWSER}
            class={`px-3 py-2 bg-white rounded border(gray-500 2) disabled:(opacity-50 cursor-not-allowed)`}
            value={inputSql}
            onInput={(v) => {
              // deno-lint-ignore ban-ts-comment
              // @ts-ignore
              setInputSql(v.target?.value);
            }}
          />
          <button
            {...props}
            onClick={handleInputSql}
            disabled={!IS_BROWSER}
            class={'px-3 py-2 bg-blue-200 text-blue-800 rounded hover:bg-blue-300 active:bg-blue-400'}
          >
            Body 传参测试
          </button>
        </div>
        <hr />
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
        <div>
          <span>Operations: </span>
          <button
            {...props}
            onClick={handleInputSql}
            disabled={!IS_BROWSER}
            class={'px-3 py-2 bg-blue-200 text-blue-800 rounded hover:bg-blue-300 active:bg-blue-400'}
          >
            Body 传参测试
          </button>
        </div>

        <hr />
        <Table
          columns={[...getColumns(), ({
            key: 'operation',
            render(row) {
              return <Button onClick={() => console.log('row: ', row)}>{row.user_name || 'user_name'}</Button>
            }
          }) as ITable.Column]}
          // columns={[{key: 'aaa'}, {key: 'aaaa'}, {key: 'aaaaa'}, {key: 'aaaaa'}, {key: 'aaaaa'}, {key: 'aaaaa'}]}
          data={tableData}
          autoIndex
        />
      </main>
    </div>
  )
}

export default MysqlManagerIsland;
