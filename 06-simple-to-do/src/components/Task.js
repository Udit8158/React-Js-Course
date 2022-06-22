import React from "react";

function Task(props) {
  return (
    <>
      <ul className="list-group fs-4">
        <li className="list-group-item d-flex justify-content-between my-1">
          <hr
            className="border-primary border-3 opacity-75 position-absolute d-none"
            style={{ width: "90%", left: "50px" }}
          />
          <input
            className="form-check-input me-1"
            type="checkbox"
            aria-label="..."
            onClick={props.taskCompleteHandler}
          />
          {props.taskName}

          <i
            className="fa-solid fa-trash-can "
            onClick={props.deleteTaskHandler}
            id={props.id}
          ></i>
        </li>
      </ul>
    </>
  );
}

export default Task;
