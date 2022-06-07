import React, { useState } from "react";
import "../App.css";
import PropTypes from "prop-types";

// After reload clear the loacal storage... only for redo (not optimized)
localStorage.clear();

export default function TextArea(props) {
  // Setting state variable
  const [text, setText] = useState("");
  let disabled = text.length === 0 ? true : false;

  // changing state variable with onchange method
  const onChangeText = (event) => {
    const newText = event.target.value;
    setText(newText);
  };

  // uppercase and lowercase and other functionality logic
  const toDoUpperCase = () => {
    const uppercaseText = text.toUpperCase();
    setText(uppercaseText);
    props.showAlert("Converted into uppercase", "success");
  };

  const toDoLowerCase = () => {
    const lowerCase = text.toLowerCase();
    setText(lowerCase);
    props.showAlert("Converted into lowercase", "success");
  };

  const toDoRemove = () => {
    const blankText = "";
    setText(blankText);
    props.showAlert("Removed all the text", "success");
  };

  const makeQoute = () => {
    const quotedText = `"${text}"`;
    setText(quotedText);
    props.showAlert("Made a quote with your text", "success");
  };

  const undo = () => {
    localStorage.setItem("beforeUndoText", text);
    const afterUndoText = text.slice(0, text.length - 1);
    setText(afterUndoText);
    props.showAlert("Undo successfully", "success");
  };

  const redo = () => {
    const redoText = localStorage.getItem("beforeUndoText");
    if (redoText !== null) {
      setText(redoText);
      props.showAlert("Redo successfully", "success");
    }
  };

  const copyText = () => {
    const myTextArea = document.querySelector("#myTextArea");
    // Select the text
    myTextArea.select();
    myTextArea.setSelectionRange(0, 99999); // Need only for mobile

    //copy the selected text value in clipboard
    navigator.clipboard.writeText(myTextArea.value);
    window.getSelection().removeAllRanges();
    props.showAlert("Copied text into your clipboard", "success");
  };

  // logic for charactercount and wordcount
  const textArr = Array.from(text);
  const textArrWithoutSpace = textArr.filter((e) => e !== " ");
  // Use reg exp mean, count " " and new line  both.
  const wordArr = text.split(/\s+/);
  const accurateWrodArr = wordArr.filter((word) => word !== "");

  const characterCount = textArrWithoutSpace.length;
  const wordCount = accurateWrodArr.length;
  //   console.log(textArrWithoutSpace);

  // Logic for reading time
  const avaragePerWordTime = 0.005; // In minute
  let readingTime = avaragePerWordTime * wordCount;
  // let roundedReadingTime = Math.round(readingTime);

  let textColorMode = "";
  let textAreaColor = "";
  // Logic for changing color (It is not optimized for many theming color)
  if (props.textAreaColorMode === "light") {
    textColorMode = "dark";
    textAreaColor = "#dedfe3";
  } else {
    textColorMode = "light";
    textAreaColor = "#b8bfdb";
  }

  const textAreaStyle = {
    backgroundColor: textAreaColor,
  };

  // Return the DOM
  return (
    <div className="container my-5">
      <h1 className={`text-${textColorMode} mb-4`}>Enter your text here</h1>
      <textarea
        className="form-control my-3"
        placeholder="Enter your text here....."
        id="myTextArea"
        rows={8}
        value={text}
        onChange={onChangeText}
        style={textAreaStyle}
      ></textarea>
      <button
        className={`btn btn-${
          props.isRedishDarkMode ? "danger" : "primary"
        } my-2 me-2`}
        onClick={toDoUpperCase}
        disabled={disabled}
      >
        Uppercase
      </button>
      <button
        className={`btn btn-${
          props.isRedishDarkMode ? "danger" : "primary"
        } mx-2 my-2`}
        onClick={toDoLowerCase}
        disabled={disabled}
      >
        Lowercase
      </button>
      <button
        className={`btn btn-${
          props.isRedishDarkMode ? "danger" : "primary"
        } mx-2 my-2`}
        onClick={toDoRemove}
        disabled={disabled}
      >
        Remove All
      </button>
      <button
        className={`btn btn-${
          props.isRedishDarkMode ? "danger" : "primary"
        } mx-2 my-2`}
        onClick={makeQoute}
        disabled={disabled}
      >
        Make Quote
      </button>
      <button
        className={`btn btn-${
          props.isRedishDarkMode ? "danger" : "primary"
        } mx-2 my-2`}
        onClick={undo}
        disabled={disabled}
      >
        Undo
      </button>
      <button
        className={`btn btn-${
          props.isRedishDarkMode ? "danger" : "primary"
        } mx-2 my-2`}
        onClick={redo}
        disabled={disabled}
      >
        Redo
      </button>
      {/* <i className="bi bi-arrow-counterclockwise"></i> */}
      <button
        className={`btn btn-${
          props.isRedishDarkMode ? "danger" : "primary"
        } mx-2 my-2`}
        onClick={copyText}
        disabled={disabled}
      >
        Copy to Clipboard
      </button>
      {/* <i
        className={`fa-solid fa-clipboard text-${textColorMode}`}
        onClick={copyText}
      ></i> */}
      {/* <span className={`mx-1 text-${textColorMode}`}>Copy to clipboard</span> */}

      <div className={`summery my-3 text-${textColorMode}`}>
        <h2>You text summery</h2>
        <p>
          Wordcount : <b>{wordCount}</b> , Charactercount :{" "}
          <b>{characterCount}</b>
        </p>

        <p id="readingTimeElemetAfterOne">
          Avarage reading time : <b>{readingTime} Minutes</b>
        </p>
        <div className="previewSection ">
          <h2>Preview</h2>
          <p>{text === "" ? "Nothing to preview" : text}</p>
        </div>
      </div>
    </div>
  );
}

// Setting requird props
TextArea.propTypes = {
  textAreaColorMode: PropTypes.element.isRequired,
};

TextArea.propTypes = {
  textAreaColorMode: PropTypes.string,
};
