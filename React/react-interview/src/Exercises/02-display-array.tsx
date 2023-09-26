import React from "react";

interface User {
  name: string;
  id: number;
}

const users: User[] = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 },
];

const Exercise2: React.FC = () => {
  return (
    <>
      <h3>User names</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Exercise2;
