import React, { memo, useEffect } from "react";

const HomePageItem = memo(({ user }) => {
  useEffect(() => {
    console.log("Item render")
  });

  return (
    <li>
      {user.name}
    </li>
  )

})

export { HomePageItem };