import { useState } from 'preact/hooks';
import { counter } from "../store/index.ts";

type Props = {
  [key: string]: unknown;
}

const PostTest = (props: Props) => {
  const [postData, setPostData] = useState({});
  const getPostData = async () => {
    // NOTE 路由一样会出现死循环！！
    // const res = await fetch('/search?q=aaa', {
    // const res = await fetch('', { // 这里会自动识别填充当前页面的路由
    // const res = await fetch('/api/postData?q=aaa', {
    const res = await fetch('/static.json', {
      // const res = await fetch('https://github.com/api/static.json?q=aaa', {
      method: 'get',
      headers: { 'content-type': 'application/json' },
    });
    const result = await res.json();
    console.log('get POST Data res: ', result);
  }

  return (
    <div>
      <br />
      <hr />
      <span>counter： {counter.value}</span>
      <hr />
      <div onClick={getPostData}>PostTest: {JSON.stringify(postData)}</div>
    </div>
  )
}

export default PostTest;
