import React, { useState } from "react";

function expensiveCalculation(num) {
  console.log("Calculating...");
  let result = 0;
  for (let i = 0; i < 1e7; i++) {
    result += num;
  }
  return result;
}

export default function WithoutUseMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const calculatedValue = expensiveCalculation(count);

  return (
    <div>
      <h3>Without useMemo</h3>
      <p>Result: {calculatedValue}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input
        placeholder="Type here"
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
