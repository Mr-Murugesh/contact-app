import React from "react";
import { Link } from "react-router-dom";

// Navbar
function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg" id="navbar">
        <b className="heading">Responsive Website</b>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="list-item">
              <Link to="/" className="nav-link heading1" href="#home">
                Login
              </Link>
            </li>
            <li className="list-item">
              <Link to="/Register" className="nav-link heading1" href="#home">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
