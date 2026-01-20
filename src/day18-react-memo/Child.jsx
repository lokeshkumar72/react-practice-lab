import React from "react";

const Child = ({ value }) => {
  console.log("Child rendered with value:", value);
  return <h3>Value from Parent: {value}</h3>;
};

export default React.memo(Child);
