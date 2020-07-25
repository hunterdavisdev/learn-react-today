import React, { useState, useContext } from "react";
import { ThemeContext } from "./App";

export default ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const style = useContext(ThemeContext);
  return (
    <>
      <button style={style} onClick={() => setCount(prev => prev - 1)}>
        -
      </button>
      <span>{count}</span>
      <button style={style} onClick={() => setCount(prev => prev + 1)}>
        +
      </button>
    </>
  );
};
