import { Outlet, NavLink } from "react-router-dom";
import './Navbar.scss';
import Search from "../Search/search";

function Navbar() {
  return (
    <>
      <nav className="Navbar">
        
        <ul>
          <li><Search/></li>
          <li>
            <NavLink to="/">Home</NavLink>
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

export default Navbar;