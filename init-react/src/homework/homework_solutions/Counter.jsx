function Counter() {
  console.log("%c component rendered", "color:yellow");
  let count = 0;

  const increaseCount = () => {
    console.log("%c count before:>> ", "color:green", count);
    count = count + 1;
    console.log("%c count after:>> ", "color:orange", count);
  };
  return (
    <div>
      <h1>Counter</h1>
      {console.log("%c JSX rendered", "color:pink", count)}
      <h1>{count}</h1>
      <button onClick={increaseCount}>➕</button>
    </div>
  );
}

export default Counter;
