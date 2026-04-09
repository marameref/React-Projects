This is a comprehensive `README.md` file designed for a professional GitHub repository. It includes the project overview, installation instructions, API documentation, and the file structure you used.

```markdown
# REST API with Node.js, Express, and Mongoose

This project is a checkpoint task designed to demonstrate the creation of a RESTful API using **Node.js**, **Express**, and **Mongoose**. The API allows for basic CRUD (Create, Read, Update, Delete) operations on a User database stored in MongoDB.

---

## 📁 Project Structure

```text
rest-api-checkpoint/
├── config/
│   └── .env            # Environment variables (Port, Mongo URI)
├── models/
│   └── User.js         # Mongoose User Schema
├── node_modules/       # Dependencies
├── .gitignore          # Files to ignore in Git
├── package.json        # Project metadata and dependencies
└── server.js           # Main entry point and API routes
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have the following installed:
* [Node.js](https://nodejs.org/) (v14 or higher)
* [MongoDB](https://www.mongodb.com/) (Local or Atlas)
* [Postman](https://www.postman.com/) (For testing routes)

### 2. Installation
1. Clone the repository or navigate to your project folder.
2. Install dependencies:
   ```bash
   npm install
   ```

### 3. Environment Setup
Create a `.env` file inside the `config/` folder and add your configuration:
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

### 4. Running the Server
Start the server using Node:
```bash
node server.js
```
The server will run at `http://localhost:3000`.

---

## 🛠 API Endpoints

| Method | Endpoint      | Description            | Body (JSON) Required |
| :----- | :------------ | :--------------------- | :------------------- |
| **GET** | `/users`      | Get all users          | No                   |
| **POST** | `/users`      | Add a new user         | Yes                  |
| **PUT** | `/users/:id`  | Update a user by ID    | Yes                  |
| **DELETE** | `/users/:id`  | Remove a user by ID    | No                   |

### Example JSON Body for POST/PUT:
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "age": 28
}
```

---

## 💻 Technical Details

* **Express.js**: Used as the web framework to handle HTTP requests.
* **Mongoose**: Used as the ODM (Object Data Modeling) library for MongoDB.
* **dotenv**: Used to manage environment variables securely.
* **Async/Await**: Used for handling asynchronous database operations cleanly.

---

## 📝 Author
* ** Engr. Amarachi Crystal Omereife**
* Developed as part of the Web Development Checkpoint.
```