// import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props, arg) {
  console.log(props);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">
          {/* using of props */}
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
              <a className="nav-link active" aria-current="page" href="/#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/#">
                {props.aboutTxt}
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

// Proptypes

//Proptypes datatype set (if not match give error on console...)

Navbar.propTypes = {
  title: PropTypes.string,
  aboutTxt: PropTypes.string,
};

//Default proptypes (if not pass anyparameter when using Navbar then these are the default values..)
Navbar.defaultProps = {
  title: "My Nav",
  aboutTxt: "About",
};
