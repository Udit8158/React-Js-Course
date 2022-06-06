import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-${props.navBarColorMode} navbar-expand-lg bg-${props.navBarColorMode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form> */}
            <button
              className="btn btn-danger mx-2"
              onClick={props.toggoleRedishDarkMode}
            >
              {props.navBarColorMode === "light" ? "Enable" : "Disable"} Redish
              Dark Mode
            </button>
            {/* Toggle dark mode */}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggoleDarkMode}
                checked={props.navBarColorMode === "light" ? false : true}
                readOnly={true}
              />
              <label
                className={`form-check-label text-${
                  props.navBarColorMode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {props.changeModeText}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

// Set required props
Navbar.propTypes = {
  title: PropTypes.element.isRequired,
  navBarColorMode: PropTypes.element.isRequired,
  toggoleDarkMode: PropTypes.element.isRequired,
  changeModeText: PropTypes.element.isRequired,
};

// set proptypes
Navbar.propTypes = {
  title: PropTypes.string,
  navBarColorMode: PropTypes.string,
  toggoleDarkMode: PropTypes.func, // here function = func
  changeModeText: PropTypes.string,
};

// Default value of props
Navbar.defaultProps = {
  title: "Textutils",
  // can't set this in this file because they are using variable from app.js
  // navBarColorMode: { mode },
  // toggoleDarkMode: { toggoleDarkMode },
  // changeModeText: { modeChangeText },
};
