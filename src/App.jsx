import Parent from "./day18-react-memo/Parent";
import ExpensiveComponent from "./day18-react-memo/ExpensiveComponent";

export default function App() {
  return (
    <>
      <h2>Day 18 — React.memo Demo</h2>
      <Parent />
      <ExpensiveComponent />
    </>
  );
}
