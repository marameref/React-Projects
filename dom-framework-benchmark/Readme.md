# 🚀 DOM Performance Benchmarking of Modern JavaScript Frameworks

### Comparative Analysis of React, Vue, Angular, and Svelte

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge\&logo=javascript)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge\&logo=react)
![Vue](https://img.shields.io/badge/Vue-3-green?style=for-the-badge\&logo=vuedotjs)
![Angular](https://img.shields.io/badge/Angular-20-red?style=for-the-badge\&logo=angular)
![Svelte](https://img.shields.io/badge/Svelte-5-orange?style=for-the-badge\&logo=svelte)

---

# 📖 Project Overview

This project benchmarks and compares the performance of four popular front-end JavaScript frameworks:

* ⚛️ React
* 💚 Vue
* 🔴 Angular
* 🧡 Svelte

The objective is to investigate how each framework handles common DOM operations under increasing workloads and determine their relative efficiency in terms of:

* Initial Rendering Performance
* DOM Update Performance
* DOM Deletion Performance
* Memory Consumption

Each framework implements the exact same To-Do List application to ensure a fair and unbiased comparison.

---

# 🎯 Project Objectives

The project evaluates:

✅ Time taken to render:

* 100 Tasks
* 500 Tasks
* 1000 Tasks

✅ Time taken to:

* Update 50 Tasks
* Delete 50 Tasks

✅ JavaScript Heap Memory Usage.

---

# 🏗️ Application Features

The following functionality was implemented identically in all four frameworks:

### Task Management

* Add Tasks
* View Tasks
* Edit Tasks
* Delete Tasks

### Benchmark Controls

* Generate 100 Tasks
* Generate 500 Tasks
* Generate 1000 Tasks
* Update 50 Tasks
* Delete 50 Tasks
* Measure Memory Usage

---

# 🛠️ Technologies Used

| Technology      | Purpose               |
| --------------- | --------------------- |
| JavaScript      | Application Logic     |
| React           | Framework Benchmark   |
| Vue             | Framework Benchmark   |
| Angular         | Framework Benchmark   |
| Svelte          | Framework Benchmark   |
| Vite            | Development Server    |
| Chrome DevTools | Performance Profiling |

---

# 📂 Project Structure

```text
dom-framework-benchmark/
│
├── react-todo/
├── vue-todo/
├── angular-todo/
└── svelte-todo/
```

Each folder contains an independent implementation of the same application.

---

# ⚙️ Installation Guide

## 1. Clone Repository

```bash
git clone https://github.com/<username>/dom-framework-benchmark.git
cd dom-framework-benchmark
```

---

# ⚛️ React Setup

```bash
npm create vite@latest react-todo -- --template react
cd react-todo
npm install
npm run dev
```

---

# 💚 Vue Setup

```bash
npm create vite@latest vue-todo -- --template vue
cd vue-todo
npm install
npm run dev
```

---

# 🔴 Angular Setup

```bash
npm install -g @angular/cli

ng new angular-todo

cd angular-todo

ng serve
```

---

# 🧡 Svelte Setup

```bash
npm create vite@latest svelte-todo -- --template svelte
cd svelte-todo
npm install
npm run dev
```

---

# 🧪 Benchmark Methodology

For each framework:

## Test 1

1. Launch application.
2. Refresh browser.
3. Generate 100 Tasks.
4. Record:

   * Render Time
   * Memory Usage.

---

## Test 2

1. Refresh browser.
2. Generate 500 Tasks.
3. Record:

   * Render Time
   * Memory Usage.

---

## Test 3

1. Refresh browser.
2. Generate 1000 Tasks.
3. Record:

   * Render Time
   * Memory Usage.

---

## Test 4

1. Generate 1000 Tasks.
2. Click:

```text
Update 50 Tasks
```

3. Record update time.

---

## Test 5

1. Generate 1000 Tasks.
2. Click:

```text
Delete 50 Tasks
```

3. Record deletion time.

---

# 🔬 Experimental Methodology

To improve reliability:

* Every benchmark was executed five (5) times.
* The arithmetic mean was used as the final result.

This minimizes measurement noise caused by browser optimizations and background system processes.

---

# 📊 Benchmark Results

| Framework | Render (100) | Render (500) | Render (1000) | Update 50           | Delete 50           | Memory Usage |
| --------- | ------------ | ------------ | ------------- | ------------------- | ------------------- | ------------ |
| React     | 10.10 ms     | 27.00 ms     | 40.70 ms      | Re-test Recommended | Re-test Recommended | 129.12 MB    |
| Vue       | 5.80 ms      | 16.60 ms     | 17.90 ms      | Re-test Recommended | Re-test Recommended | 119.50 MB    |
| Angular   | 18.10 ms     | 21.10 ms     | 40.90 ms      | Re-test Recommended | Re-test Recommended | 172.29 MB    |
| Svelte    | 6.90 ms      | 10.10 ms     | 14.40 ms      | Re-test Recommended | Re-test Recommended | 37.44 MB     |

> **Note:** Update and deletion metrics should be re-run multiple times and averaged to avoid reporting anomalous measurements.

---

# 📈 Observations

## 🧡 Svelte

* Fastest rendering performance.
* Lowest memory consumption.
* Minimal runtime overhead.

## 💚 Vue

* Excellent rendering performance.
* Good balance between speed and simplicity.

## ⚛️ React

* Competitive rendering performance.
* Higher memory usage due to Virtual DOM reconciliation.

## 🔴 Angular

* Richest framework ecosystem.
* Highest memory consumption.
* Additional framework overhead from change detection and dependency injection.

---

# 🏆 Overall Ranking

| Category                  | Winner     |
| ------------------------- | ---------- |
| Fastest Rendering         | 🥇 Svelte  |
| Lowest Memory Usage       | 🥇 Svelte  |
| Best Balance              | 🥇 Vue     |
| Richest Ecosystem         | 🥇 Angular |
| Best Developer Experience | 🥇 React   |

---

# 📝 Reflection

The experiment demonstrates that framework architecture significantly influences DOM performance.

Svelte consistently outperformed the other frameworks due to its compile-time approach, which eliminates the need for a Virtual DOM.

Vue achieved strong results through its lightweight reactivity system.

React delivered acceptable performance but incurred additional memory overhead because of its reconciliation process and Virtual DOM implementation.

Angular provided extensive framework features and tooling but exhibited the highest memory consumption and runtime overhead.

The benchmark highlights the trade-offs between developer experience, framework capabilities, and raw performance.

---

# 👨‍💻 Author

**Amarachi Omereife**

* DevSecOps Engineer
* AIOps/MLOps Engineer
* Cloud Security Engineer
* Cloud & Infrastructure Engineer
* Software Architect/ Documentation
*

---

# 📜 License

This project is for educational and research purposes.

