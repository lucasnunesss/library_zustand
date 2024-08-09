import { Outlet } from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <h1>Hello World</h1>
      <Outlet />
    </>
  )
}

export default NavBar