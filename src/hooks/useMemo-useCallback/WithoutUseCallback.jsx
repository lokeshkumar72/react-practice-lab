import React, { useState } from "react";

const Button = React.memo(({ handleClick }) => {
  console.log("Button re-rendered");
  return <button onClick={handleClick}>Click Me</button>;
});

export default function WithoutUseCallback() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Without useCallback</h3>
      <p>Count: {count}</p>
      <Button handleClick={handleClick} />
    </div>
  );
}
