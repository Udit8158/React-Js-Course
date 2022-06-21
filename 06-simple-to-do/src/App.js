import { useEffect, useState } from "react";
import Task from "./components/Task";

function App() {
  // State settings
  const [taskName, setTaskName] = useState("");
  let [tasks, setTasks] = useState([]);
  const [taskKey, setTaskKey] = useState("");

  // setting inputvalue on changing
  const taskValueSet = (event) => {
    setTaskName(event.target.value);
  };

  // adding task
  const addTaskHandler = () => {
    tasks.push(taskName);

    // task add in to the localstorage
    localStorage.setItem("tasksArr", JSON.stringify(tasks));

    // very odd behavior extra line for solving the bug (which I don't understand.)
    setTaskKey(taskName);
  };

  const deleteTaskHandler = (event) => {
    const deletedTask = event.target.previousSibling;
    tasks = tasks.filter((t) => t !== deletedTask);
    setTasks(tasks);
    console.log(tasks);
  };

  // Only run this at the first time and setting localstorage.
  useEffect(() => {
    let tasksArr = localStorage.getItem("tasksArr");

    if (tasksArr === null) {
      // tasksArr = []
      localStorage.setItem("tasksArr", JSON.stringify(tasks));
    } else {
      tasksArr = JSON.parse(tasksArr);
    }

    setTasks(tasksArr);
  }, []);

  return (
    <>
      {/* Todo section */}
      <div className="container">
        <h1 className="text-center mt-3">Add Your Todos</h1>
        <form>
          <div className="mb-3 mt-5 d-flex justify-content-between">
            <input
              type="email"
              className="form-control me-3 fs-4"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Add your tasks"
              onChange={taskValueSet}
            />
            <div
              className="btn btn-primary fs-4 fw-bold"
              onClick={addTaskHandler}
            >
              +
            </div>
          </div>
        </form>

        {/* Populate Tasks */}
        <div className="task-container mt-3">
          <h3 className="text-center">Your tasks</h3>
          {tasks.map((t) => {
            return (
              <Task
                taskName={t}
                key={t}
                deleteTaskHandler={deleteTaskHandler}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
