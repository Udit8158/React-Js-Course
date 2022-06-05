import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-${props.navBarColorMode} navbar-expand-lg bg-${props.navBarColorMode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
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
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  About
                </a>
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
            {/* Toggle dark mode */}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggoleDarkMode}
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

Navbar.propTypes = {
  //   title: PropTypes.element.isRequired,
  title: PropTypes.string,
};
