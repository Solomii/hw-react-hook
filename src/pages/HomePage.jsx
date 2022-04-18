import React, { useState, useMemo, useCallback } from "react";
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
    const newUser = { id: Date.now(), name: text };
    setUsers([...users, newUser]);
  };

  const handleDelete = useCallback((userId) => {
    setUsers(users.filter(user => user.id !== userId));
  }, [users]);

  const handleSearch = () => {
    setSearch(text);
  }

  const filterUsers = useMemo(() =>
    users.filter((user) => {
      return user.name.toLowerCase().includes(search.toLocaleLowerCase());
    })
    , [search, users]);

  return (
    <div className="home_page">
      <div>
       <input type="text" placeholder="enter name" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
        <button className="home_page_button_add" onClick={handleAdd}>Add</button>
      </div>
      <br />
      <br />
      <HomePageList users={filterUsers} handleDelete={handleDelete}/>
    </div>
  )
}

export { HomePage };