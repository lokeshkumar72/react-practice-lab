function UserItem({ user }) {
  return (
    <li>
      <strong>{user.name}</strong> — {user.role}
    </li>
  );
}

export default UserItem;
