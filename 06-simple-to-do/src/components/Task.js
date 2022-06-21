import React from "react";

function Task(props) {
  return (
    <>
      <div className="list-group">
        <label className="list-group-item my-2 d-flex justify-content-between fs-2">
          <input className="form-check-input me-1" type="checkbox" value="" />
          {props.taskName}
          <i
            className="fa-solid fa-trash-can "
            onClick={props.deleteTaskHandler}
            id={props.id}
          ></i>
        </label>
      </div>
    </>
  );
}

export default Task;
