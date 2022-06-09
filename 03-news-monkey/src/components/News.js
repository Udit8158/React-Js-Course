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
  updateNews = async () => {
    this.setState({ loading: true });
    // Fetching from new api...
    const url = `https://newsapi.org/v2/top-headlines?country=in&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}&apiKey=d34ab57786dc4ece9656435b68646fa5`;
    const data = await fetch(url);
    const parsedData = await data.json();

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
    // console.log(url);
  };
  // Use in componentDidMount (don't know why... this is actually use of life cycale.)
  async componentDidMount() {
    this.updateNews();
  }

  // Prev and next page logic

  previousPage = async () => {
    await this.setState({ loading: true, page: this.state.page - 1 });
    this.updateNews();
  };

  nextPage = async () => {
    await this.setState({ loading: true, page: this.state.page + 1 });

    this.updateNews();
  };

  render() {
    // let { pageSize } = this.props;
    // console.log(this.state.articles);
    let { mode } = this.props;
    return (
      <>
        <div className="container">
          <h1
            className={`text-center mt-3 text-${
              mode === "light" ? "dark" : "light"
            }`}
          >
            Our top headlines
          </h1>

          {/* Means  if this.state.loading === true then only display this loadig spinner  (very useful syntax) */}
          {this.state.loading && (
            <div className="text-center">
              <img src={Spinner} alt="React Logo" />
            </div>
          )}
          {!this.state.loading && (
            <div className="row my-2">
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
                      author={e.author}
                      date={e.publishedAt}
                      source={e.source.name}
                      mode={this.props.mode}
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
