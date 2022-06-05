// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import React, { useState } from "react";

function App() {
  // mode changing stat
  const [mode, changeMode] = useState("light");
  // changing text for enable dark or light mode (state variable)
  const [modeChangeText, setModeChangeText] = useState("Enable dark mode");

  const bodyDarkColor = "#343a40";
  const bodyLightColor = "white";
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
  // Component return
  return (
    <div className="App">
      <Navbar
        title="Textutils"
        navBarColorMode={mode}
        toggoleDarkMode={toggoleDarkMode}
        changeModeText={modeChangeText}
      />
      <TextArea textAreaColorMode={mode} />
    </div>
  );
}

export default App;
