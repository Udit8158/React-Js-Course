import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ListItem extends Component {
  render() {
    // let { name } = this.props;
    return (
      <div>
        <li className="nav-item">
          <Link
            className="nav-link active"
            aria-current="page"
            to={this.props.path}
          >
            {this.props.name}
          </Link>
        </li>
      </div>
    );
  }
}

export default ListItem;
