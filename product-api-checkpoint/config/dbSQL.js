const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

const promisePool = pool.promise();

// --- THE TEST ---
promisePool.getConnection()
  .then(() => console.log("✅ Successfully connected to MySQL!"))
  .catch((err) => console.log("❌ Connection failed:", err.message));

module.exports = promisePool;