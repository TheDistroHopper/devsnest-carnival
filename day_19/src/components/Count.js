import { useState } from "react";
import "./Count.css";

const Count = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return <button onClick={increaseCount}>{count}</button>;
};

export default Count;
