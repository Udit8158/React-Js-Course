import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";

import Spinner from "./Spinner.js";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotoalResults] = useState(0);
  const [loading, setLoading] = useState(true);

  const capializeFirstLetter = (str) =>
    str[0].toUpperCase() + str.slice(1, str.length);

  const updateNews = async () => {
    // Fetching from new api...
    const url = `https://newsapi.org/v2/top-headlines?country=in&page=${page}&pageSize=${props.pageSize}&category=${props.category}&apiKey=d34ab57786dc4ece9656435b68646fa5`;
    const data = await fetch(url);

    props.setProgress(40);
    const parsedData = await data.json();

    props.setProgress(70);

    setArticles(parsedData.articles);
    setTotoalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  // Use in componentDidMount (don't know why... this is actually use of life cycale.) In case of componentdidmount use 'useeffect' in functional comp
  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);

    // Fetching from new api...
    const url = `https://newsapi.org/v2/top-headlines?country=in&page=${
      page + 1
    }&pageSize=${props.pageSize}&category=${
      props.category
    }&apiKey=d34ab57786dc4ece9656435b68646fa5`;
    const data = await fetch(url);
    const parsedData = await data.json();

    setTotoalResults(parsedData.totalResults);
    setArticles(articles.concat(parsedData.articles));
  };

  return (
    <>
      <h1
        className={`text-center mt-5 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        {`Our top  ${capializeFirstLetter(props.category)} headlines`}
      </h1>

      {/* Means  if this.state.loading === true then only display this loadig spinner  (very useful syntax) */}
      {loading && <Spinner />}

      <div className="container p-0">
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="row my-2 container">
            {/* Generate this part */}
            {/* // In ract for each is not working properly we should use map to itreate array.  */}
            {articles.map((e) => {
              return (
                <NewsItem
                  title={e.title ? e.title : ""}
                  description={e.description ? e.description : ""}
                  imageUrl={e.urlToImage}
                  newsUrl={e.url}
                  author={e.author}
                  date={e.publishedAt}
                  source={e.source.name}
                  mode={props.mode}
                  key={Math.random()}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default News;
