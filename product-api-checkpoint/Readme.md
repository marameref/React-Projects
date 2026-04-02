```markdown
# Product Management API (Dual DB: SQL & NoSQL)

This project is a RESTful API built with **Node.js** and **Express**. It demonstrates how to perform CRUD (Create, Read, Update, Delete) operations using two different database systems: **MongoDB** (NoSQL) and **MySQL** (SQL).

---

## 📂 Project Structure

```text
product-checkpoint/
├── config/
│   ├── dbMongo.js       # MongoDB connection logic (Mongoose)
│   └── dbSQL.js         # MySQL connection logic (mysql2)
├── controllers/
│   ├── NoSQLcontroller.js # MongoDB CRUD logic
│   └── SQLcontroller.js   # MySQL CRUD logic
├── models/
│   └── Product.js       # Mongoose Schema (Blueprint for MongoDB)
├── routes/
│   └── productRoutes.js # Routes directing to specific controllers
├── .env                 # Environment variables (Secrets)
├── server.js            # Entry point for the application
└── package.json         # Dependencies and scripts
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** installed on your Mac.
- **MongoDB** (Local or MongoDB Atlas URI).
- **MySQL** installed and running (`brew services start mysql`).

### 2. Database Setup
Before running the server, ensure you have created the MySQL database:
```bash
mysql -u root -p
CREATE DATABASE product_db;
EXIT;
```

### 3. Environment Variables
Create a `.env` file in the root folder and add:
```env
PORT=3000

# MongoDB
MONGO_URI=mongodb://localhost:27017/product_db

# MySQL
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=product_db
```

### 4. Installation
```bash
npm install
```

### 5. Running the Server
```bash
node server.js
```

---

## 🛠 API Endpoints

You can test these endpoints using **Postman** or **Insomnia**.

### MongoDB (NoSQL)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/api/nosql/products` | Create a new product |
| GET | `/api/nosql/products` | Get all products |
| GET | `/api/nosql/products/:id` | Get a single product |
| PUT | `/api/nosql/products/:id` | Update a product |
| DELETE | `/api/nosql/products/:id` | Delete a product |

### MySQL (SQL)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/api/sql/products` | Create a new product |
| GET | `/api/sql/products` | Get all products |
| GET | `/api/sql/products/:id` | Get a single product |
| PUT | `/api/sql/products/:id` | Update a product |
| DELETE | `/api/sql/products/:id` | Delete a product |

---

## 📝 Key Comparisons

### NoSQL (MongoDB/Mongoose)
- **Schema-based:** Uses a `Product.js` model to define data structure.
- **Methods:** Uses built-in JS methods like `.find()` and `.findByIdAndUpdate()`.
- **IDs:** Uses 24-character hex strings (`_id`).

### SQL (MySQL/mysql2)
- **Table-based:** Requires a rigid table structure defined by SQL.
- **Queries:** Uses raw SQL strings like `SELECT * FROM products`.
- **Security:** Uses **Parameterized Queries** (`?` placeholders) to prevent SQL Injection.
- **IDs:** Uses Auto-incrementing Integers (`id`).

---

## 🛡 Security Features
- **dotenv:** Keeps database credentials out of the source code.
- **Parameterized Queries:** Protects the MySQL database from malicious inputs.
- **Mongoose Validation:** Ensures data integrity for MongoDB entries.
```
