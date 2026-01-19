import React, { useState, useCallback } from "react";

const Button = React.memo(({ handleClick }) => {
  console.log("Button re-rendered");
  return <button onClick={handleClick}>Click Me</button>;
});

export default function WithUseCallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h3>With useCallback</h3>
      <p>Count: {count}</p>
      <Button handleClick={handleClick} />
    </div>
  );
}
