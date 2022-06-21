import { useEffect, useState } from "react";
import Task from "./components/Task";

function App() {
  // State settings
  const [taskName, setTaskName] = useState("");
  let [tasks, setTasks] = useState([]);
  const [taskKey, setTaskKey] = useState(Math.random());

  const taskValueSet = (event) => {
    setTaskName(event.target.value);
  };
  const addTaskHandler = () => {
    // console.log(taskName);

    tasks.push(taskName);
    // tasks.filter((t) => !tasks.includes(t));
    // console.log(taskKey);
    // console.log(tasks);

    setTaskKey(Math.random());
    // console.log(tasks);
  };

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

        {/* Tasks */}
        <div className="task-container mt-3">
          <h3 className="text-center">Your tasks</h3>
          {tasks.map((t) => {
            // console.log(tasks);

            return <Task taskName={t} key={t} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
