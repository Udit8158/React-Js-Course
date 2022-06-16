import React from "react";
import { Link } from "react-router-dom";

function ListItem(props) {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to={props.href}>
          {props.name}
        </Link>
      </li>
    </>
  );
}

export default ListItem;
