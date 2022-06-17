import React from "react";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand text-danger text-bold" href="/">
            MonkeyKart
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
              <ListItem name="Products" href="/" />
              <ListItem name="Electronics" href="/category/electronics" />
              <ListItem name="Jewelery" href="/category/jewelery" />
              <ListItem name="Men's clothing" href="/category/men's-clothing" />
              <ListItem
                name="Women's clothing"
                href="/category/women's-clothing"
              />
            </ul>
          </div>
        </div>
        <div className="cart-icon ">
          <Link to={"/cart"}>
            <i className="fa-solid fa-cart-shopping mx-3 fs-3"></i>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
