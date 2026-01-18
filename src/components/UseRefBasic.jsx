import { useRef } from "react";

function UseRefBasic() {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1;
    console.log("Count:", countRef.current);
  };

  return (
    <div>
      <h3>useRef Basic Example</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default UseRefBasic;
