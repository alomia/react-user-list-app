function UserItem({ user }) {
  return (
    <li className="font-light">
      {user.id}. {user.first_name} {user.last_name} ({user.email})
    </li>
  );
}

export default UserItem;
