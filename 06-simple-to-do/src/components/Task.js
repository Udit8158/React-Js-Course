import React from "react";

function Task(props) {
  return (
    <>
      <ul className="list-group fs-4">
        <li className="list-group-item d-flex justify-content-between">
          <input
            className="form-check-input me-1"
            type="checkbox"
            value=""
            aria-label="..."
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
