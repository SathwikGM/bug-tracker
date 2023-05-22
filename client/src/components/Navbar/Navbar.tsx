import { Outlet, NavLink } from "react-router-dom";
import './Navbar.scss';

function Navbar() {
  return (
    <>
      <nav className="Navbar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">
              <label htmlFor="search">Search</label>
              <input type="text" id="search"  />
            </NavLink>
          </li>
          <li>
            <NavLink to="/defects">Defects</NavLink>
          </li>
          <li>
            <NavLink to="/create">Create</NavLink>
          </li>
        </ul>
      </nav>

    <Outlet />
    </>
  )
}

export default Navbar