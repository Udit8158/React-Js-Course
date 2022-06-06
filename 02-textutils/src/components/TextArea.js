import React, { useState } from "react";
import "../App.css";
import PropTypes from "prop-types";

// After reload clear the loacal storage... only for redo (not optimized)
localStorage.clear();

export default function TextArea(props) {
  // Setting state variable
  const [text, setText] = useState("");

  // changing state variable with onchange method
  const onChangeText = (event) => {
    const newText = event.target.value;
    setText(newText);
  };

  // uppercase and lowercase and other functionality logic
  const toDoUpperCase = () => {
    const uppercaseText = text.toUpperCase();
    setText(uppercaseText);
  };

  const toDoLowerCase = () => {
    const lowerCase = text.toLowerCase();
    setText(lowerCase);
  };

  const toDoRemove = () => {
    const blankText = "";
    setText(blankText);
  };

  const makeQoute = () => {
    const quotedText = `"${text}"`;
    setText(quotedText);
  };

  const undo = () => {
    localStorage.setItem("beforeUndoText", text);
    const afterUndoText = text.slice(0, text.length - 1);
    setText(afterUndoText);
  };

  const redo = () => {
    const redoText = localStorage.getItem("beforeUndoText");
    if (redoText !== null) {
      setText(redoText);
    }
  };

  const copyText = () => {
    const myTextArea = document.querySelector("#myTextArea");
    // Select the text
    myTextArea.select();
    myTextArea.setSelectionRange(0, 99999); // Need only for mobile

    //copy the selected text value in clipboard
    navigator.clipboard.writeText(myTextArea.value);
  };

  // logic for charactercount and wordcount
  const textArr = Array.from(text);
  const textArrWithoutSpace = textArr.filter((e) => e !== " ");
  const wordArr = text.split(" ");
  const accurateWrodArr = wordArr.filter((word) => word !== "");

  const characterCount = textArrWithoutSpace.length;
  const wordCount = accurateWrodArr.length;
  //   console.log(textArrWithoutSpace);

  // Logic for reading time
  const avaragePerWordTime = 0.005; // In minute
  let readingTime = avaragePerWordTime * wordCount;
  let roundedReadingTime = Math.round(readingTime);

  if (readingTime > 0 && readingTime < 1) {
    readingTime = "less than 1";
  } else {
    readingTime = roundedReadingTime;
  }

  let textColorMode = "";
  let textAreaColor = "";
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
      <h1 className={`text-${textColorMode}`}>Enter your text here</h1>
      <textarea
        className="form-control my-3"
        placeholder="Enter your text here....."
        id="myTextArea"
        rows={8}
        value={text}
        onChange={onChangeText}
        style={textAreaStyle}
      ></textarea>
      <button className="btn btn-primary" onClick={toDoUpperCase}>
        Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={toDoLowerCase}>
        Lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={toDoRemove}>
        Remove All
      </button>
      <button className="btn btn-primary mx-2" onClick={makeQoute}>
        Make Quote
      </button>
      <button className="btn btn-primary mx-2" onClick={undo}>
        Undo
      </button>
      <button className="btn btn-primary mx-2" onClick={redo}>
        Redo
      </button>
      {/* <i className="bi bi-arrow-counterclockwise"></i> */}
      <button className="btn btn-primary mx-2" onClick={copyText}>
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
          Avarage reading time :<b>{roundedReadingTime} Minutes</b>
        </p>
        <div className="previewSection">
          <h2>Preview</h2>
          <p>{text === "" ? "Write something to see the preview" : text}</p>
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
