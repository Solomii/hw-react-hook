import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/posts">Blogs</NavLink>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer></footer>
    </>
  )
}

export { Layout };