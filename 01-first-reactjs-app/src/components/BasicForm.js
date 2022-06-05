// Import react and useStat (hook) to use state variabl
import React, { useState } from "react";

import PropTypes from "prop-types";

export default function BasicForm(props) {
  // Make a state variable text and a func setText(to change the text)
  const [text, setText] = useState("example@gmail.com"); // Default text = Email

  // text = "hie"; // wrong way to change state variable

  const onChange = (event) => {
    // console.log("Changing", event.target.value);
    const email = event.target.value;
    setText(email);
  };

  const upperCase = () => {
    // console.log(text);
    const newTxt = text.toUpperCase();
    setText(newTxt);
  };
  return (
    <div className="p-3">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            {props.title}
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={text}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
      </form>
      <button className="btn btn-primary" onClick={upperCase}>
        Submit
      </button>
    </div>
  );
}

BasicForm.prototypes = {
  title: PropTypes.string,
};
