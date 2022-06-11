import React from "react";

const NewsItem = (props) => {
  // Use props in newsitem...
  // let { title, description, imageUrl, newsUrl, author, date, source } =
  //   this.props;
  let cardBodyDarkModeColor;

  if (props.mode === "dark") {
    cardBodyDarkModeColor = "#b8bfdb";
  } else {
    cardBodyDarkModeColor = "white";
  }
  return (
    <div className="col-md-4 my-3">
      <div className="card" style={{ backgroundColor: cardBodyDarkModeColor }}>
        <span
          className="position-absolute top-0 badge rounded-pill translate-middle  bg-danger "
          style={{
            left: "90%",
            zIndex: "1",
            // backgroundColor: cardBodyDarkModeColor,
          }}
        >
          {props.source}
        </span>
        <img src={props.imageUrl} className="card-img-top" alt="..." />
        <div
          className="card-body"
          // style={{ backgroundColor: cardBodyDarkModeColor }}
        >
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <div className="card-footer">
            <small className="text-muted">
              By {!props.author ? "unknown" : props.author} on{" "}
              {new Date(props.date).toGMTString()}
            </small>
          </div>
          <a
            href={props.newsUrl}
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
};

export default NewsItem;
