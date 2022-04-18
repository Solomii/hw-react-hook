import React, { useState, useEffect, useMemo } from "react";
import { HomePageList } from "../page/PageHomeList";

const HomePage = () => {
  const initialUsers = [
    { id: 1, name: "Mary" },
    { id: 2, name: "Luna" }
  ];

  const [users, setUsers] = useState(initialUsers);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const handleAdd = () => {
    const newUser = { id: Date.now(), name: text }
    setUsers([...users, newUser])
  }

  const handleSearch = () => {
    setSearch(text);
  }

  const filterUsers = useMemo(() =>
    users.filter((user) => {
      console.log('filter obj')
      return user.name.toLowerCase().includes(search.toLocaleLowerCase())
    })
    , [search, users]);
 
  useEffect(() => {
      // console.log("render");
  })

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleAdd}>Add</button>
      <HomePageList users={filterUsers}/>
    </div>
  )
}

export { HomePage };