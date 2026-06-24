<script setup>
import { ref, nextTick } from "vue";

const taskName = ref("");
const priority = ref("Low");
const tasks = ref([]);

const renderTime = ref(0);
const updateTime = ref(0);
const deleteTime = ref(0);

let startTime = null;

const addTask = () => {
  if (taskName.value.trim() === "") {
    alert("Please enter a task name.");
    return;
  }

  tasks.value.push({
    id: Date.now(),
    name: taskName.value,
    priority: priority.value,
  });

  taskName.value = "";
  priority.value = "Low";
};

const deleteTask = (id) => {
  tasks.value = tasks.value.filter(
    (task) => task.id !== id
  );
};

const editTask = (id) => {
  const newName = prompt(
    "Enter new task name:"
  );

  if (!newName) return;

  tasks.value = tasks.value.map((task) =>
    task.id === id
      ? { ...task, name: newName }
      : task
  );
};

const generateTasks = async (count) => {
  const generated = [];

  for (let i = 1; i <= count; i++) {
    generated.push({
      id: i,
      name: `Task ${i}`,
      priority: "Medium",
    });
  }

  startTime = performance.now();

  tasks.value = generated;

  await nextTick();

  renderTime.value =
    performance.now() - startTime;
};

const update50Tasks = () => {
  const start = performance.now();

  tasks.value = tasks.value.map(
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

  updateTime.value =
    performance.now() - start;
};

const delete50Tasks = () => {
  const start = performance.now();

  tasks.value = tasks.value.slice(50);

  deleteTime.value =
    performance.now() - start;
};

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
</script>

<template>
  <div style="padding:20px">
    <h1>Todo Benchmark Application</h1>

    <hr />

    <h2>Add Task</h2>

    <input
      v-model="taskName"
      placeholder="Task Name"
    />

    <select v-model="priority">
      <option>Low</option>
      <option>Medium</option>
      <option>High</option>
    </select>

    <button @click="addTask">
      Add Task
    </button>

    <hr />

    <h2>Benchmark Controls</h2>

    <button
      @click="generateTasks(100)"
    >
      Generate 100 Tasks
    </button>

    <button
      @click="generateTasks(500)"
    >
      Generate 500 Tasks
    </button>

    <button
      @click="generateTasks(1000)"
    >
      Generate 1000 Tasks
    </button>

    <button
      @click="update50Tasks"
    >
      Update 50 Tasks
    </button>

    <button
      @click="delete50Tasks"
    >
      Delete 50 Tasks
    </button>

    <hr />

    <h2>Performance Metrics</h2>

    <p>
      Render Time:
      {{ renderTime.toFixed(2) }}
      ms
    </p>

    <p>
      Update Time:
      {{ updateTime.toFixed(2) }}
      ms
    </p>

    <p>
      Delete Time:
      {{ deleteTime.toFixed(2) }}
      ms
    </p>

    <p>
      Memory Usage:
      {{ getMemoryUsage() }}
      MB
    </p>

    <hr />

    <h2>Tasks</h2>

    <p v-if="tasks.length === 0">
      No tasks available.
    </p>

    <ul v-else>
      <li
        v-for="task in tasks"
        :key="task.id"
      >
        <strong>{{ task.name }}</strong>
        -
        {{ task.priority }}

        <button
          @click="editTask(task.id)"
        >
          Edit
        </button>

        <button
          @click="
            deleteTask(task.id)
          "
        >
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>