import React from "react";
import { Link } from "react-router-dom";
import {useUserContext} from "../../state/UserContext"
// import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    // const {name} = useUserContext();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        {/* {name} */}
      </Link>
      <div>
        <ul className="navbar-nav">
          {/* Home */}
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          {/* Travel */}
          <li className="nav-item">
            <Link
              to="/travel"
              className={
                window.location.pathname === "/travel"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Travel
            </Link>
          </li>
          {/* About */}
          <li className="nav-item">
            <Link
              to="/about"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
          </li>
          {/* Profile */}
          <li className="nav-item">
            <Link
              to="/profile"
              className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
            >
              Profile
            </Link>
          </li>
          {/* Login and Logout */}
          <li className="nav-item">
            <Link
              to="/login"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
