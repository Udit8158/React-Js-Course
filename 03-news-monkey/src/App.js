import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
// import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = (props) => {
  const [mode, setMode] = useState("light");
  const [progress, setProgress] = useState(10);

  const toggleMode = () => {
    const darkBodyColor = "#343a40";
    let newMode;
    if (mode === "light") {
      newMode = "dark";
      document.body.style.backgroundColor = darkBodyColor;
    } else {
      newMode = "light";
      document.body.style.backgroundColor = "white";
    }

    setMode(newMode);
  };

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} title="NewsMonkey" />
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
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
                mode={mode}
                toggleMode={toggleMode}
                progress={progress}
                setProgress={setProgress}
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
                mode={mode}
                toggleMode={toggleMode}
                progress={progress}
                setProgress={setProgress}
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
                mode={mode}
                toggleMode={toggleMode}
                progress={progress}
                setProgress={setProgress}
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
                mode={mode}
                toggleMode={toggleMode}
                progress={progress}
                setProgress={setProgress}
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
                mode={mode}
                toggleMode={toggleMode}
                progress={progress}
                setProgress={setProgress}
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
                mode={mode}
                toggleMode={toggleMode}
                progress={progress}
                setProgress={setProgress}
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
                mode={mode}
                toggleMode={toggleMode}
                progress={progress}
                setProgress={setProgress}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
