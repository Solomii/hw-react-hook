import React, { memo, useEffect } from "react";
import { HomePageItem } from "./PageHomeItems";



const HomePageList = memo(({ users }) => {
  useEffect(() => {
    console.log("list render")
  });

  return (
    <ul>
      {users.map(user => (
        <HomePageItem key={user.id} user={user}/>
      ))}
    </ul>
  )

})


export { HomePageList };