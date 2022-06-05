import React, { useState } from "react";
import "../App.css";

// After reload clear the loacal storage... only for redo (not optimized)
localStorage.clear();
export default function TextArea() {
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
  const readingTime = Math.round(avaragePerWordTime * wordCount);

  // Return the DOM
  return (
    <div className="container my-5">
      <h1>Enter your text here</h1>
      <textarea
        className="form-control my-3"
        placeholder="Enter your text here....."
        id="myTextArea"
        rows={8}
        value={text}
        onChange={onChangeText}
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
      <button className="btn btn-primary mx-2" onClick={copyText}>
        Copy to Clipboar
      </button>

      <div className="summery my-3">
        <h2>You text summery</h2>
        <p>
          Wordcount : <b>{wordCount}</b> , Charactercount :{" "}
          <b>{characterCount}</b>
        </p>

        <p id="readingTimeElemetAfterOne">
          Avarage reading time : <b>{readingTime} Minutes</b>
        </p>
        <div className="previewSection">
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
