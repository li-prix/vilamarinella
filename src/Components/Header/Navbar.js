import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="title">
        Vila Marinella
      </Link>

      <ul>
        <li>
          <NavLink to="/apousada">A Pousada</NavLink>
        </li>
        <li>
          <NavLink to="/avila">A Vila de Jericoacoara</NavLink>
        </li>
        <li>
          <NavLink to="/reservas">Reservas</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
