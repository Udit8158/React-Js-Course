import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsItem from "./components/NewsItem";

export class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <News />
        <NewsItem />
        <NewsItem />
      </>
    );
  }
}

export default App;
