import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChildA count={count} />
      <ChildB setCount={setCount} />
    </>
  );
}

export default Parent;
