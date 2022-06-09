import React, { Component } from "react";
import ListItem from "./ListItem";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <ListItem name="Home" />
                <ListItem name="About" />
                <ListItem name="Business" />
                <ListItem name="Entertainment" />
                <ListItem name="General" />
                <ListItem name="Helth" />
                <ListItem name="Science" />
                <ListItem name="Sports" />
                <ListItem name="Teachnology" />
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
      </div>
    );
  }
}

export default Navbar;
