import { JSX } from "preact/jsx-runtime";
import { testSignals, setCounter, counter, useComputed } from "../store/index.ts";
import { useEffect, useState } from "preact/hooks";

type Props = {
  user: IUser.User;
}

function Store({ user }: Props): JSX.Element {
  useEffect(() => {
    console.log('counter 发生了改变：', counter.value);
  }, [counter.value]);

  useEffect(() => {
    console.log('user: ', user);
  }, [user])


  const aa = useComputed(() => {
    return counter.value + 1;
  });

  return (
    <div>
      <span>user {user?.name.toString()}</span>
      <hr />

      <span>counter： {counter.value}</span>
      <hr />

      <span>computed：{aa}</span>
      <hr />

      <div>
        <button onClick={() => {
          testSignals.counter.value += 2;
          console.log('+2: ', counter.value);
        }}>testSignals.counter.value += 2</button>
      </div>

      <div>
        <button onClick={() => {
          setCounter(-1);
          console.log('setCounter(-1)： ', testSignals.counter.value);
        }}>setCounter(-1)</button>
      </div>
    </div>
  );
}

export default Store;
