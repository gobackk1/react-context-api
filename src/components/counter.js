import React from "react";
import CounterContext from "../contexts/counter";

const Counter = () => (
  // Context.Provider の value に設定した値が、
  // 配下のContext.Consumer 内関数の引数に渡ってくる
  <CounterContext.Consumer>
    {/* 中に関数を書くのがルール */}
    {({ count, increment, decrement }) => {
      return (
        <React.Fragment>
          <div>count: {count}</div>
          <button onClick={increment}>+1</button>
          <button onClick={decrement}>-1</button>
        </React.Fragment>
      );
    }}
  </CounterContext.Consumer>
);

export default Counter;
