import UserCard from './components/UserCard'

export default function Props() {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Jim" },
  ];

  return (
    <div>
      <h1>Users</h1>
        {users.map((user) => (
            <UserCard key={user.id} user={user} />
        ))}
    </div>
  );
}
