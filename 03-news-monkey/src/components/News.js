import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner.svg";

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
      loading: false,
    };
  }
  // Use in componentDidMount (don't know why... this is actually use of life cycale.)
  async componentDidMount() {
    this.setState({ loading: true });
    // Fetching from new api...
    const url = `https://newsapi.org/v2/top-headlines?country=in&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}&apiKey=d34ab57786dc4ece9656435b68646fa5`;
    const data = await fetch(url);
    const parsedData = await data.json();
    // console.log(parsedData);
    // changing state

    this.setState({
      totalResults: parsedData.totalResults,
      maxPages: Math.ceil(parsedData.totalResults / this.props.pageSize),
      articles: parsedData.articles.filter(
        (e) =>
          e.title !== null &&
          e.description !== null &&
          e.urlToImage !== null &&
          e.url !== null
      ),
      loading: false,
    });
    // console.log("1", url);
  }

  // Prev and next page logic

  previousPage = async () => {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=in&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}&category=${
      this.props.category
    }&apiKey=d34ab57786dc4ece9656435b68646fa5`;
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
      loading: false,
    });
  };

  nextPage = async () => {
    this.setState({ loading: true });
    // Page counting logic
    // const pageSize = this.state.pageSize; // resuls for 1 page (It might less than 20 because in filter they will gone for null.)
    // const maxPages = this.state.maxPages;

    const url = `https://newsapi.org/v2/top-headlines?country=in&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}&category=${
      this.props.category
    }&apiKey=d34ab57786dc4ece9656435b68646fa5`;
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
      loading: false,
    });
    // console.log("2", url);
  };

  render() {
    // let { pageSize } = this.props;
    // console.log(this.state.articles);
    return (
      <>
        <div className="container">
          <h1 className="text-center">Our top headlines</h1>

          {/* Means  if this.state.loading === true then only display this loadig spinner  (very useful syntax) */}
          {this.state.loading && (
            <div className="text-center">
              <img src={Spinner} alt="React Logo" />
            </div>
          )}
          {!this.state.loading && (
            <div className="row my-5">
              {/* Generate this part */}
              {/* // In ract for each is not working properly we should use map to itreate array.  */}
              {this.state.articles.map((e) => {
                return (
                  <div className="col-md-4 my-3" key={e.url}>
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
          )}
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
