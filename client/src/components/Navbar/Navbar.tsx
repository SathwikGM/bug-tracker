import { Outlet, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/defects">Defects</NavLink>
          </li>
        </ul>
      </nav>

    <Outlet />
    </>
  )
}

export default Navbar