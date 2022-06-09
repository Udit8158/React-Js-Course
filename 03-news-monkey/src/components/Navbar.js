import React, { Component } from "react";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    let { mode, toggleMode, title } = this.props;
    return (
      <div>
        <nav className={`navbar navbar-${mode} navbar-expand-lg bg-${mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              {title}
            </Link>

            {/* Mobile responsive section */}
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

            {/* List section */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <ListItem name="Home" path="/" />

                <ListItem name="Business" path="/business" />
                <ListItem name="Entertainment" path="/entertainment" />

                <ListItem name="Health" path="/health" />
                <ListItem name="Science" path="/science" />
                <ListItem name="Sports" path="/sports" />
                <ListItem name="Teachnology" path="/teachnology" />
              </ul>

              {/* Darkmode section */}
              <div className="form-check form-switch mx-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={toggleMode}
                />
                <label
                  className={`form-check-label text-${
                    mode === "light" ? "dark" : "light"
                  }`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  {mode === "light" ? "Enable dark mode" : "Disable dark mode"}
                </label>
              </div>
              {/* Search section */}
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-primary">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
