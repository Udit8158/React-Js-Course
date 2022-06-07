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
        <NewsItem
          title={`${this.state.title}`}
          description="New news desc"
          url="/"
        />
      </>
    );
  }
}

export default News;
