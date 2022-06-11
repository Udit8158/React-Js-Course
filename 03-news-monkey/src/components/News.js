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

      loading: true,
    };

    // Change title dynamically
    document.title = `NewsMonkey - ${this.capializeFirstLetter(
      this.props.category
    )}`;
  }

  async updateNews() {
    // this.setState({ loading: true });
    // Fetching from new api...
    const url = `https://newsapi.org/v2/top-headlines?country=in&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}&apiKey=d34ab57786dc4ece9656435b68646fa5`;
    const data = await fetch(url);

    this.props.setProgress(40);
    const parsedData = await data.json();

    this.props.setProgress(70);

    // changing state

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      // articles: parsedData.articles,
      loading: false,
    });
    this.props.setProgress(100);
    console.log(url, this.state.articles);
  }
  // Use in componentDidMount (don't know why... this is actually use of life cycale.)
  async componentDidMount() {
    // this.setState({ loading: false });
    this.updateNews();
    // console.log(this.state.articles.length, this.state.totalResults);
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });

    // this.setState({ loading: true });
    // Fetching from new api...
    const url = `https://newsapi.org/v2/top-headlines?country=in&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}&category=${
      this.props.category
    }&apiKey=d34ab57786dc4ece9656435b68646fa5`;
    const data = await fetch(url);
    const parsedData = await data.json();

    // console.log(this.articles.length, this.state.totalResults);

    // changing state

    this.setState({
      totalResults: parsedData.totalResults,

      articles: this.state.articles.concat(parsedData.articles),
      // articles: this.state.articles.concat(parsedData.articles),
      // loading: false,
    });
    console.log("result" + this.state.totalResults, this.state.articles);
  };

  render() {
    // let { pageSize } = this.props;
    // console.log(this.state.articles);
    let { mode } = this.props;
    return (
      <>
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

        <div className="container p-0">
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >
            <div className="row my-2 container">
              {/* Generate this part */}
              {/* // In ract for each is not working properly we should use map to itreate array.  */}
              {this.state.articles.map((e) => {
                return (
                  <NewsItem
                    title={e.title ? e.title : ""}
                    description={e.description ? e.description : ""}
                    imageUrl={e.urlToImage}
                    newsUrl={e.url}
                    author={e.author}
                    date={e.publishedAt}
                    source={e.source.name}
                    mode={this.props.mode}
                    key={Math.random()}
                  />
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}

export default News;
