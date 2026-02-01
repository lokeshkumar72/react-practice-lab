import useCounter from "../hooks/day-19-custom-hooks/useCounter";

function Counter() {
  // using custom hook
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Counter Using Custom Hook</h2>

      <p>Count: {count}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: "10px" }}>
        Decrement
      </button>
      <button onClick={reset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
