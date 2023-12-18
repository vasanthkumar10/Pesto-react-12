import React, { useState } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div>
      <input name="task" type="text" value={task} onChange={handleTask} />
      <button onClick={addTask}>Add task</button>
      {tasks.length ? (
        <>
          {tasks.map((task) => (
            <h1>{task}</h1>
          ))}
        </>
      ) : (
        <h2>No tasks found</h2>
      )}
    </div>
  );
}

export default TaskManager;
