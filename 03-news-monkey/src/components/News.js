import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  // Setting state...
  constructor() {
    super();
    this.state = {
      title: "Udit's News.",
    };
  }

  render() {
    return (
      <>
        <div className="container">
          <h1 className="">Our top headlines</h1>
          <div className="row my-5">
            <div className="col my-3">
              <NewsItem
                title="MY NEWS"
                description="This is  the best news"
                url="/"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
