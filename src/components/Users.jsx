import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>User List</h1>

      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        users.map((user) => <p key={user.id}>{user.name}</p>)
      )}
    </div>
  );
}

export default Users;
