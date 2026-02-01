import useFetch from "../hooks/day-19-custom-hooks/useFetch";

function Users() {
  // using custom hook
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Users List (useFetch Hook)</h2>

      <ul>
        {data.map(user => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
