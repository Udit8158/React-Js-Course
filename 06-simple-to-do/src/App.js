import { useEffect, useState } from "react";
import Task from "./components/Task";

function App() {
  // State settings
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);
  // const [completedTasks, setCompletedTasks] = useState([]);
  const [completedTasksNumber, setCompletedTasksNumber] = useState(0);
  const [taskCompleteHandlerRun, setTaskCompleteHandler] = useState(true);

  // setting inputvalue on changing
  const taskValueSet = (event) => {
    setTaskName(event.target.value);
  };

  // adding task
  const addTaskHandler = () => {
    if (taskName !== "" && taskName !== null) {
      tasks.push({ text: taskName, id: tasks.length, completed: false });
    }

    // task add in to the localstorage
    localStorage.setItem("tasksArr", JSON.stringify(tasks));

    // Set taskname blank which is input box value
    setTaskName("");
  };

  // Function for deleting tasks
  const deleteTaskHandler = (event) => {
    const deletedTaskID = event.target.id;

    const filteredTasks = tasks.filter(
      (t) => Number(t.id) !== Number(deletedTaskID)
    );
    setTasks(filteredTasks);

    // Also update local storage
    localStorage.setItem("tasksArr", JSON.stringify(filteredTasks));
  };

  // Task complete
  const taskCompleteHandler = (event) => {
    // make completed : true in the completed tasks
    const completdTasksFilter = tasks.map((item) => {
      if (item.id == event.target.id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTasks(completdTasksFilter);
    setTaskCompleteHandler(!taskCompleteHandlerRun);

    // Update localstorage also
    localStorage.setItem("tasksArr", JSON.stringify(completdTasksFilter));
  };
  console.log(tasks);

  // Only run this at the first time and setting localstorage.
  useEffect(() => {
    let tasksArr = localStorage.getItem("tasksArr");

    if (tasksArr === null) {
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
              value={taskName}
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
          <p className="text-center">
            You have {tasks.length - completedTasksNumber} tasks today.
          </p>
          <ul className="list-group fs-4">
            {tasks.map((t) => {
              return (
                <Task
                  taskName={t.text}
                  key={t.id}
                  deleteTaskHandler={deleteTaskHandler}
                  taskCompleteHandler={taskCompleteHandler}
                  id={t.id}
                  isCompleted={t.completed}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
