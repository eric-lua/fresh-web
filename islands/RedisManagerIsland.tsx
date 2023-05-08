import { useEffect, useState } from "preact/hooks";

type Props = {
  type?: string;
}

const RedisManagerIsland = (props: Props) => {
  const [keys, setKeys] = useState([]);
  const [selectedKey, setSelectedKey] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const getAllKeys = async () => {
    const res = await fetch('/api/redis?action=GetAllKeys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({}),
    });
    const { data } = await res.json();
    console.log(typeof data, data);
    if (data.length > 0) {
      setKeys(data);
    }
  }

  const getValueByKey = async (key: string) => {
    setSelectedKey(key);
    const value = await fetch('/api/redis?action=GetValueByKey', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ key }),
    });
    const {data} = await value.json();
    console.log('getValueByKey: ', data);
    setSelectedValue(data);
  }

  useEffect(() => {
    getAllKeys();
  }, []);

  return (
    <div class="flex h-full">
      <aside class="w-48">
        <ul>
          {
            keys.map(item => <li key={item} onClick={() => getValueByKey(item)} class={`${selectedKey === item ? 'text-blue-800' : ''}`}>
              {item}
            </li>)
          }
        </ul>
      </aside>
      <main class="flex-1">
        Redis
        <br />
        <hr />
        <br />
        <div>{selectedValue}</div>
      </main>
    </div>
  )
}

export default RedisManagerIsland;
