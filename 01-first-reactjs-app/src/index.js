import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import BasicForm from "./components/BasicForm";

// Importing Navbar component
import Navbar from "./components/Navbar.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // JSX fragment <> - You can create only one element inside jsx
  // <>
  // Using Navbar component
  <>
    <Navbar title="My Navbar" aboutTxt="About Us" />
    <BasicForm title="Enter email address" />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
