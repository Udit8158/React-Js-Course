import React from "react";
import { Link } from "react-router-dom";

const ListItem = (props) => {
  // let { name } = this.props;
  return (
    <div>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to={props.path}>
          {props.name}
        </Link>
      </li>
    </div>
  );
};

export default ListItem;
