import React, { memo, useEffect } from "react";
import { HomePageItem } from "./PageHomeItems";

const HomePageList = memo(({ users, handleDelete }) => {
  return (
    <ul>
      {users.map(user => (
        <HomePageItem key={user.id} user={user} handleDelete={ handleDelete}/>
      ))}
    </ul>
  )

})

export { HomePageList };