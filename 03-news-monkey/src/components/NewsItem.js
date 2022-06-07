import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    // Use props in newsitem...
    let { title, description, url } = this.props;
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={`${url}`} className="btn btn-primary btn-sm">
              Go somewhere
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
