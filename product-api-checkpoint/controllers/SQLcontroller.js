const db = require('../config/dbSQL');

// This function "builds" your table inside MySQL automatically
const initTable = async () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS products (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price DECIMAL(10, 2) NOT NULL,
      category VARCHAR(100),
      inStock BOOLEAN DEFAULT true
    )
  `;
  try {
    await db.execute(sql);
    console.log("✅ MySQL 'products' table is ready.");
  } catch (err) {
    console.error("❌ Error creating table:", err.message);
  }
};

// Run this function immediately when the file is loaded
initTable();

// --- CRUD Operations will go below here ---

const db = require('../config/dbSQL'); // Assume this is your mysql2 pool

exports.createProduct = async (req, res) => {
    const { name, price, category, inStock } = req.body;
    const sql = 'INSERT INTO products (name, price, category, inStock) VALUES (?, ?, ?, ?)';
    const [result] = await db.execute(sql, [name, price, category, inStock]);
    res.status(201).json({ id: result.insertId, ...req.body });
};

exports.getAllProducts = async (req, res) => {
    const [rows] = await db.execute('SELECT * FROM products');
    res.json(rows);
};

exports.deleteProduct = async (req, res) => {
    await db.execute('DELETE FROM products WHERE id = ?', [req.params.id]);
    res.status(204).send();
};