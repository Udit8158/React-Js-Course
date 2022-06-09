import React, { Component } from "react";

export class ListItem extends Component {
  render() {
    // let { name } = this.props;
    return (
      <div>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/#">
            {this.props.name}
          </a>
        </li>
      </div>
    );
  }
}

export default ListItem;
