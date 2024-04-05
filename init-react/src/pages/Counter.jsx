import { useState } from "react";

function Counter() {
  console.log("%c component rendered", "color:pink");
  //   let count = 0;

  const [count, setCount] = useState(0);
  const increaseCount = () => {
    // console.log("%c count before :>> ", "color:orange", count);
    // count = count + 1;
    setCount(count + 1);
    // console.log("%c count after :>> ", "color:yellow", count);
  };

  return (
    <div>
      {console.log("%c JSX rendered", "color:purple")}
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={increaseCount}>+</button>
    </div>
  );
}

export default Counter;
