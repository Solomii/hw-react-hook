import React, { memo } from "react";
import { HomePageItem } from "./PageHomeItems";

const HomePageList = memo(({ users, handleDelete }) => {
  return (
    <div>
      <ul>
        {users.map(user => (
          <HomePageItem key={user.id} user={user} handleDelete={handleDelete} />
        ))}
     </ul>
    </div>
  )
})

export { HomePageList };