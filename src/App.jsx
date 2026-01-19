import WithoutUseMemo from "./hooks/useMemo-useCallback/WithoutUseMemo";
import WithUseMemo from "./hooks/useMemo-useCallback/WithUseMemo";
import WithoutUseCallback from "./hooks/useMemo-useCallback/WithoutUseCallback";
import WithUseCallback from "./hooks/useMemo-useCallback/WithUseCallback";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Day 17 – useMemo & useCallback</h2>

      <WithoutUseMemo />
      <hr />

      <WithUseMemo />
      <hr />

      <WithoutUseCallback />
      <hr />

      <WithUseCallback />
    </div>
  );
}

export default App;
