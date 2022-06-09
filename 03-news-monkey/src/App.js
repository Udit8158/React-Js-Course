import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
// import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={<News key="general" pageSize={8} category="general" />}
            />
            <Route
              exact
              path="/business"
              element={<News key="business" pageSize={8} category="business" />}
            />
            <Route
              exact
              path="/sports"
              element={<News key="sports" pageSize={8} category="sports" />}
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={8}
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={<News key="health" pageSize={8} category="health" />}
            />
            <Route
              exact
              path="/science"
              element={<News key="science" pageSize={8} category="science" />}
            />
            <Route
              exact
              path="/teachnology"
              element={
                <News key="teachnology" pageSize={8} category="teachnology" />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
