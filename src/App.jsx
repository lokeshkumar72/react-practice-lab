import UserList from "./components/UserList";

function App() {
  const users = [
    { id: 1, name: "Lokesh", role: "MERN Developer" },
    { id: 2, name: "Aman", role: "Frontend Developer" },
    { id: 3, name: "Riya", role: "React Developer" },
  ];

  return (
    <div>
      <h2>User List</h2>
      <UserList users={users} />
    </div>
  );
}

export default App;
