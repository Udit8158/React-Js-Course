import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";

import Spinner from "./Spinner.js";

export class News extends Component {
  capializeFirstLetter = (str) =>
    str[0].toUpperCase() + str.slice(1, str.length);
  // Setting state...
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      pageSize: 20,
      maxPages: 0,
      loading: true,
    };

    // Change title dynamically
    document.title = `NewsMonkey - ${this.capializeFirstLetter(
      this.props.category
    )}`;
  }
  updateNews = async () => {
    this.setState({ loading: true });
    // Fetching from new api...
    const url = `https://newsapi.org/v2/top-headlines?country=in&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}&apiKey=e603c44254f246cd9653b673a4137e42`;
    const data = await fetch(url);
    const parsedData = await data.json();

    // changing state

    this.setState({
      totalResults: parsedData.totalResults,
      maxPages: Math.ceil(parsedData.totalResults / this.props.pageSize),
      articles: parsedData.articles,

      // articles: parsedData.articles,

      loading: false,
    });
    // console.log(url);
  };
  // Use in componentDidMount (don't know why... this is actually use of life cycale.)
  async componentDidMount() {
    this.setState({ loading: false });
    this.updateNews();
    // console.log(this.state.articles.length, this.state.totalResults);
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });

    // this.setState({ loading: true });
    // Fetching from new api...
    const url = `https://newsapi.org/v2/top-headlines?country=in&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}&apiKey=e603c44254f246cd9653b673a4137e42`;
    const data = await fetch(url);
    const parsedData = await data.json();

    // await console.log(this.articles.length);

    // changing state

    this.setState({
      totalResults: parsedData.totalResults,
      maxPages: Math.ceil(parsedData.totalResults / this.props.pageSize),
      articles: this.state.articles.concat(parsedData.articles),
      // articles: this.state.articles.concat(parsedData.articles),
      // loading: false,
    });
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
            {`Our top  ${this.capializeFirstLetter(
              this.props.category
            )} headlines`}
          </h1>

          {/* Means  if this.state.loading === true then only display this loadig spinner  (very useful syntax) */}
          {this.state.loading && <Spinner />}

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >
            <div className="row my-2">
              {/* Generate this part */}
              {/* // In ract for each is not working properly we should use map to itreate array.  */}
              {this.state.articles.map((e) => {
                return (
                  <div className="col-md-4 my-3" key={e.url}>
                    <NewsItem
                      title={e.title ? e.title : ""}
                      description={e.description ? e.description : ""}
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
          </InfiniteScroll>

          {/* Previous and next btn container */}
          {/* <div className="container my-3 d-flex justify-content-between">
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
          </div> */}
        </div>
      </>
    );
  }
}

export default News;
