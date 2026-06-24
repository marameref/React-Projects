import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Low");
  const [tasks, setTasks] = useState([]);

  const [renderTime, setRenderTime] = useState(0);
  const [updateTime, setUpdateTime] = useState(0);
  const [deleteTime, setDeleteTime] = useState(0);

  const [startTime, setStartTime] = useState(null);

  // Measure actual DOM render time
  useEffect(() => {
    if (startTime !== null) {
      const end = performance.now();
      setRenderTime(end - startTime);
      setStartTime(null);
    }
  }, [tasks, startTime]);

  // Add Task
  const addTask = () => {
    if (taskName.trim() === "") {
      alert("Please enter a task name.");
      return;
    }

    const newTask = {
      id: Date.now(),
      name: taskName,
      priority,
    };

    setTasks([...tasks, newTask]);
    setTaskName("");
    setPriority("Low");
  };

  // Delete Single Task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(
      (task) => task.id !== id
    );

    setTasks(updatedTasks);
  };

  // Edit Single Task
  const editTask = (id) => {
    const newName = prompt(
      "Enter new task name:"
    );

    if (!newName) return;

    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          name: newName,
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  };

  // Generate Tasks for Benchmarking
  const generateTasks = (count) => {
    const generatedTasks = [];

    for (let i = 1; i <= count; i++) {
      generatedTasks.push({
        id: i,
        name: `Task ${i}`,
        priority: "Medium",
      });
    }

    setStartTime(performance.now());
    setTasks(generatedTasks);
  };

  // Update First 50 Tasks
  const update50Tasks = () => {
    const start = performance.now();

    const updatedTasks = tasks.map(
      (task, index) => {
        if (index < 50) {
          return {
            ...task,
            priority: "High",
          };
        }

        return task;
      }
    );

    setTasks(updatedTasks);

    const end = performance.now();
    setUpdateTime(end - start);
  };

  // Delete First 50 Tasks
  const delete50Tasks = () => {
    const start = performance.now();

    const updatedTasks =
      tasks.slice(50);

    setTasks(updatedTasks);

    const end = performance.now();
    setDeleteTime(end - start);
  };

  // Memory Usage
  const getMemoryUsage = () => {
    if (performance.memory) {
      return (
        performance.memory.usedJSHeapSize /
        1024 /
        1024
      ).toFixed(2);
    }

    return "Not Supported";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>
        Todo Benchmark Application
      </h1>

      <hr />

      <h2>Add Task</h2>

      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) =>
          setTaskName(
            e.target.value
          )
        }
      />

      <select
        value={priority}
        onChange={(e) =>
          setPriority(
            e.target.value
          )
        }
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button onClick={addTask}>
        Add Task
      </button>

      <hr />

      <h2>
        Benchmark Controls
      </h2>

      <button
        onClick={() =>
          generateTasks(100)
        }
      >
        Generate 100 Tasks
      </button>

      <button
        onClick={() =>
          generateTasks(500)
        }
      >
        Generate 500 Tasks
      </button>

      <button
        onClick={() =>
          generateTasks(1000)
        }
      >
        Generate 1000 Tasks
      </button>

      <button
        onClick={update50Tasks}
      >
        Update 50 Tasks
      </button>

      <button
        onClick={delete50Tasks}
      >
        Delete 50 Tasks
      </button>

      <hr />

      <h2>
        Performance Metrics
      </h2>

      <p>
        Render Time:
        {" "}
        {renderTime.toFixed(2)}
        {" "}
        ms
      </p>

      <p>
        Update Time:
        {" "}
        {updateTime.toFixed(2)}
        {" "}
        ms
      </p>

      <p>
        Delete Time:
        {" "}
        {deleteTime.toFixed(2)}
        {" "}
        ms
      </p>

      <p>
        Memory Usage:
        {" "}
        {getMemoryUsage()}
        {" "}
        MB
      </p>

      <hr />

      <h2>Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <strong>
                {task.name}
              </strong>
              {" - "}
              {task.priority}
              {" "}

              <button
                onClick={() =>
                  editTask(
                    task.id
                  )
                }
              >
                Edit
              </button>

              <button
                onClick={() =>
                  deleteTask(
                    task.id
                  )
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;