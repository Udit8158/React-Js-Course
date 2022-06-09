import React, { Component } from "react";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Navbar
            </Link>

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
