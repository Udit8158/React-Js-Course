import React, { useState } from "react";
import "../App.css";

export default function TextArea() {
  // Setting state variable
  const [text, setText] = useState("");

  // changing state variable with onchange method
  const onChangeText = (event) => {
    const newText = event.target.value;
    setText(newText);
  };

  // uppercase and lowercase logic
  const toDoUpperCase = () => {
    const uppercaseText = text.toUpperCase();
    setText(uppercaseText);
  };

  const toDoLowerCase = () => {
    const lowerCase = text.toLowerCase();
    setText(lowerCase);
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
