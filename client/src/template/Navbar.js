import React, {useState} from "react";
import "../App.css";
import { Link } from "react-router-dom";



const Navbar = props => {
  // trying to add state to change the nav bar when shrinking 

// const [isNavCollapsed, setIsNavCollapsed] = useState(true);
// const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <div className="container">
        <a className="navbar-brand text-info font-weight-bolder" href="/">
          Toilet SOS
        </a>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <Link
                to="/add"
                className="nav-link py-3 px-0 px-lg-3 rounded text-danger border"
                href="/add"
              >
                + Add New Restroom
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link
                to="/login"
                className="nav-link py-3 px-0 px-lg-3 rounded border"
                data-mdb-ripple-color="light"
                href="/login"
              >
                Login
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link
                to="/signup"
                className="nav-link py-3 px-0 px-lg-3 rounded border"
                href="/signup"
              >
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;
