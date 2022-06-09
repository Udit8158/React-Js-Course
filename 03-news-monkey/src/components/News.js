import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  // Setting state...
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      pageSize: 20,
      maxPages: 0,
    };
  }
  // Use in componentDidMount (don't know why... this is actually use of life cycale.)
  async componentDidMount() {
    // Fetching from new api...
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&page=${this.state.page}&${this.state.pageSize}&apiKey=d34ab57786dc4ece9656435b68646fa5`;
    const data = await fetch(url);
    const parsedData = await data.json();
    // console.log(parsedData);
    // changing state

    this.setState({
      totalResults: parsedData.totalResults,
      maxPages: Math.ceil(parsedData.totalResults / this.state.pageSize),
      articles: parsedData.articles.filter(
        (e) =>
          e.title !== null &&
          e.description !== null &&
          e.urlToImage !== null &&
          e.url !== null
      ),
    });
    // console.log("1", url);
  }

  // Prev and next page logic

  previousPage = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&page=${
      this.state.page - 1
    }&${this.state.pageSize}&apiKey=d34ab57786dc4ece9656435b68646fa5`;
    console.log(url);
    const data = await fetch(url);
    const parsedData = await data.json();
    // console.log(parsedData);
    // changing state

    this.setState({
      page: this.state.page - 1,
      totalResults: parsedData.totalResults,
      articles: parsedData.articles.filter(
        (e) =>
          e.title !== null &&
          e.description !== null &&
          e.urlToImage !== null &&
          e.url !== null
      ),
    });
  };

  nextPage = async () => {
    // Page counting logic
    // const pageSize = this.state.pageSize; // resuls for 1 page (It might less than 20 because in filter they will gone for null.)
    const maxPages = this.state.maxPages;

    const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&page=${
      this.state.page + 1
    }&${this.state.pageSize}&apiKey=d34ab57786dc4ece9656435b68646fa5`;
    console.log(url);

    const data = await fetch(url);
    const parsedData = await data.json();
    // console.log(parsedData);
    // changing state
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles.filter(
        (e) =>
          e.title !== null &&
          e.description !== null &&
          e.urlToImage !== null &&
          e.url !== null
      ),
    });
    // console.log("2", url);
  };

  render() {
    // console.log(this.state.articles);
    return (
      <>
        <div className="container">
          <h1 className="">Our top headlines</h1>
          <div className="row my-5">
            {/* Generate this part */}
            {/* // In ract for each is not working properly we should use map to itreate array.  */}
            {this.state.articles.map((e) => {
              return (
                <div className="col-md-3 my-3" key={e.url}>
                  <NewsItem
                    title={e.title.slice(0, 38) + "...."}
                    description={e.description.slice(0, 83) + "...."}
                    imageUrl={e.urlToImage}
                    newsUrl={e.url}
                  />
                </div>
              );
            })}
          </div>

          {/* Previous and next btn container */}
          <div className="container my-3 d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.previousPage}
              disabled={this.state.page > 1 ? false : true}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.nextPage}
              disabled={this.state.page === this.state.maxPages ? true : false}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
