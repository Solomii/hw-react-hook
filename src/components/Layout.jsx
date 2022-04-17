import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Layout = () => {
  const auth = useAuth();


  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/posts">Blogs</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        {!auth.user && (<NavLink to="/login">Login</NavLink>)}
      </header>
      <main>
        <Outlet/>
      </main>
      <footer></footer>
    </>
  )
}

export { Layout };