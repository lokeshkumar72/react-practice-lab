import { useRef } from "react";

function UncontrolledInput() {
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(nameRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Uncontrolled Input</h3>
      <input type="text" ref={nameRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledInput;
