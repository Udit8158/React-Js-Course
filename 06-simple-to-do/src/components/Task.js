import React from "react";
import "./Task.css";
function Task(props) {
  return (
    <>
      <li
        className={`list-group-item d-flex justify-content-between my-2 ${
          props.isCompleted === true ? "completed" : ""
        }`}
      >
        <hr
          className="border-primary border-3 opacity-75 position-absolute d-none completed-hr"
          // style={{ width: "90%", left: "50px" }}
        />
        <input
          className="form-check-input me-1"
          type="checkbox"
          aria-label="..."
          onClick={props.taskCompleteHandler}
          id={props.id}
        />
        {props.taskName}

        <i
          className="fa-solid fa-trash-can "
          onClick={props.deleteTaskHandler}
          id={props.id}
        ></i>
      </li>
    </>
  );
}

export default Task;
