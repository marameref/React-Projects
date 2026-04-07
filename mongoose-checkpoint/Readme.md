# Mongoose Checkpoint: People Management API

This project is a back-end application built with **Node.js**, **Express**, and **Mongoose**. It demonstrates essential Database management skills including Schema creation, CRUD operations (Create, Read, Update, Delete), and advanced query chaining using a MongoDB Atlas cluster.

---

## 📁 Project Structure

```text
📂 mongoose-checkpoint/
├── 📂 models/
│   └── person.js       # Mongoose Schema and Model definition
├── .env                # Private environment variables (API Keys/URI)
├── .gitignore          # Files to be ignored by Git (node_modules, .env)
├── package.json        # Project dependencies and metadata
└── server.js           # Main logic and database connection
```

---

## 🛠️ Prerequisites

* **Node.js** installed on your Mac.
* **VS Code** installed.
* A **MongoDB Atlas** account and a cluster created.
* **npm** (comes with Node.js).

---

## 🚀 Getting Started

### 1. Installation
Clone or create your project folder, then install the necessary dependencies:

```bash
npm install mongoose dotenv
```

### 2. Environment Setup
Create a `.env` file in the root directory and add your MongoDB URI. Ensure there are no spaces around the `=` sign:

```text
MONGO_URI='mongodb+srv://<username>:<password>@clustername.mongodb.net/dbname?retryWrites=true&w=majority'
```

### 3. Running the Project
To start the application, run:

```bash
node server.js
```

---

## 📝 Features & Task Checklist

### 🏗️ Schema Definition
- [x] **Person Prototype:** Created a schema with `name` (String, Required), `age` (Number), and `favoriteFoods` (Array of Strings).

### 💾 Create Operations
- [x] **Create and Save:** Logic to instantiate a Model and save it to the database using `.save()`.
- [x] **Create Many:** Seeding the database with an array of people using `Model.create()`.

### 🔍 Read Operations
- [x] **Find by Name:** Retrieve all documents matching a specific name using `Model.find()`.
- [x] **Find One:** Find a single person based on a favorite food using `Model.findOne()`.
- [x] **Find by ID:** Target a specific document using its unique `_id`.

### 🔄 Update Operations
- [x] **Classic Update:** Find by ID, push a new item to `favoriteFoods`, and save.
- [x] **Improved Update:** Use `Model.findOneAndUpdate()` to update a person's age by name.

### 🗑️ Delete Operations
- [x] **Delete One:** Remove a single document by ID using `findByIdAndRemove`.
- [x] **Delete Many:** Remove all documents matching a specific name (e.g., "Mary") using `Model.remove()`.

### ⛓️ Advanced Querying
- [x] **Chain Search:** Find people who like "burritos," sort them by name, limit to 2 results, hide their age, and execute the query.

---

## 💡 Key Mongoose Concepts Used

* **Schema:** The blueprint for the data.
* **Model:** A wrapper on the schema that provides the interface for database operations.
* **Middleware:** Functionality triggered during the execution of asynchronous functions (Aggregate, Document, Model, Query).
* **Validation:** Ensuring data integrity (e.g., `required: true`).

---

## 👨‍💻 Author
**Data Engineer**
*6 years of Engineering experience*
