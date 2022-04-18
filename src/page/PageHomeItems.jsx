import React, { memo, useEffect } from "react";

const HomePageItem = memo(({ user, handleDelete }) => {
  return (
    <li>
      {user.name}
      <button onClick={() => handleDelete(user.id)}>
        Delete
      </button>
    </li>
  )

})

export { HomePageItem };