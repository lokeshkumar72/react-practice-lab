import React from "react";

const Child = () => {
  console.log("Child rendered");
  return <h3>I am Child Component</h3>;
};

export default React.memo(Child);
