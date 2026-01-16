function ChildB({ setCount }) {
  return (
    <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
  );
}

export default ChildB;
