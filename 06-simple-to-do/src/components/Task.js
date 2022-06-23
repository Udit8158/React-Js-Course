import React from "react";
import "./Task.css";
function Task(props) {
  return (
    <>
      <li
        className={`my-2 ${
          props.isCompleted === true ? "completed" : ""
        } list-item list-group-item d-flex justify-content-between`}
      >
        {props.taskName}

        <div className="btns">
          <button
            className="btn btn-success text-white mx-1"
            onClick={props.taskCompleteHandler}
            id={props.id}
          >
            <i
              className="fa-solid fa-check"
              onClick={props.taskCompleteHandler}
            ></i>
          </button>

          <button
            className="btn btn-danger mx-1"
            onClick={props.deleteTaskHandler}
          >
            <i
              className="fa-solid fa-trash-can "
              onClick={props.deleteTaskHandler}
              id={props.id}
            ></i>
          </button>
        </div>
      </li>
    </>
  );
}

export default Task;
