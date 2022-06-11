import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    // Use props in newsitem...
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    let cardBodyDarkModeColor;

    if (this.props.mode === "dark") {
      cardBodyDarkModeColor = "#b8bfdb";
    } else {
      cardBodyDarkModeColor = "white";
    }
    return (
      <div className="col-md-4 my-3">
        <div
          className="card"
          style={{ backgroundColor: cardBodyDarkModeColor }}
        >
          <span
            className="position-absolute top-0 badge rounded-pill translate-middle  bg-danger "
            style={{
              left: "90%",
              zIndex: "1",
              // backgroundColor: cardBodyDarkModeColor,
            }}
          >
            {source}
          </span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div
            className="card-body"
            // style={{ backgroundColor: cardBodyDarkModeColor }}
          >
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className="card-footer">
              <small className="text-muted">
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </div>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-primary btn-sm mt-3"
              rel="noopener noreferrer" // warning here so solve by this with the help of google
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
