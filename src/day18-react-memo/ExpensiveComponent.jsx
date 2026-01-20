import React from "react";

const ExpensiveComponent = () => {
  console.log("Expensive component rendered");

  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }

  return <p>Expensive calculation completed</p>;
};

export default React.memo(ExpensiveComponent);
