import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
// import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "light",
      progress: 10,
    };
  }

  setProgress = (p) => {
    this.setState({ progress: p });
  };

  toggleMode = () => {
    // const newMode = this.state.mode === "light" ? "dark" : "light";
    const darkBodyColor = "#343a40";
    let newMode;
    if (this.state.mode === "light") {
      newMode = "dark";
      document.body.style.backgroundColor = darkBodyColor;
    } else {
      newMode = "light";
      document.body.style.backgroundColor = "white";
    }

    this.setState({ mode: newMode });
  };
  render() {
    return (
      <>
        <Router>
          <Navbar
            mode={this.state.mode}
            toggleMode={this.toggleMode}
            title="NewsMonkey"
          />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
            height={3}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  pageSize={8}
                  category="general"
                  mode={this.state.mode}
                  toggleMode={this.state.toggleMode}
                  progress={this.state.progress}
                  setProgress={this.setProgress}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={8}
                  category="business"
                  mode={this.state.mode}
                  toggleMode={this.state.toggleMode}
                  progress={this.state.progress}
                  setProgress={this.setProgress}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={8}
                  category="sports"
                  mode={this.state.mode}
                  toggleMode={this.state.toggleMode}
                  progress={this.state.progress}
                  setProgress={this.setProgress}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={8}
                  category="entertainment"
                  mode={this.state.mode}
                  toggleMode={this.state.toggleMode}
                  progress={this.state.progress}
                  setProgress={this.setProgress}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={8}
                  category="health"
                  mode={this.state.mode}
                  toggleMode={this.state.toggleMode}
                  progress={this.state.progress}
                  setProgress={this.setProgress}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={8}
                  category="science"
                  mode={this.state.mode}
                  toggleMode={this.state.toggleMode}
                  progress={this.state.progress}
                  setProgress={this.setProgress}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={8}
                  category="technology"
                  mode={this.state.mode}
                  toggleMode={this.state.toggleMode}
                  progress={this.state.progress}
                  setProgress={this.setProgress}
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
