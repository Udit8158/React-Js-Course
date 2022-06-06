// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";

function App() {
  // mode changing stat
  const [mode, changeMode] = useState("light");
  // changing text for enable dark or light mode (state variable)
  const [modeChangeText, setModeChangeText] = useState("Enable dark mode");

  // state variable for alert
  const [alert, setAlert] = useState(null);

  // state variable for iscolormode redish or not
  const [isRedishDarkMode, setIsRedishDarkMode] = useState(false);

  // Make a function to show an alert which take some arguments and create a new alert
  const showAlert = (messege, type) => {
    setAlert({
      messege: messege,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  let bodyDarkColor = "#343a40";
  let bodyLightColor = "white";
  //Toggole dark mode
  const toggoleDarkMode = () => {
    if (mode === "light") {
      changeMode("dark");
      setModeChangeText("Disable dark mode");
      document.body.style.backgroundColor = bodyDarkColor;
    } else {
      changeMode("light");
      setModeChangeText("Enable dark mode");
      document.body.style.backgroundColor = bodyLightColor;
    }
  };

  // Toggole redish dark mode
  const toggoleRedishDarkMode = () => {
    bodyDarkColor = "#302426";
    // Logic for setting variable
    if (mode === "light") {
      setIsRedishDarkMode(true);
    } else {
      setIsRedishDarkMode(false);
    }
    toggoleDarkMode();
  };
  // Component return
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          title="Textutils"
          navBarColorMode={mode}
          toggoleDarkMode={toggoleDarkMode}
          changeModeText={modeChangeText}
          toggoleRedishDarkMode={toggoleRedishDarkMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextArea
                textAreaColorMode={mode}
                showAlert={showAlert}
                isRedishDarkMode={isRedishDarkMode}
              />
            }
          ></Route>

          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
