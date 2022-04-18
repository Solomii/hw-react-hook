import React, { useState } from "react";
import { useResolvedPath } from "react-router";

const HomePage = () => {
  const initialUsers = [
    { id: 1, name: "Mary" },
    { id: 2, name: "Max" }
  ];

  console.log("render");

  const [users, setUsers] = useState(initialUsers);
  const [text, setText] = useState('dfad')


  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <ul>
        {users.map(user => (
          <li key={user.id}>{ user.name}</li>
        ))}
     </ul>
    </div>
  )
}

export { HomePage };