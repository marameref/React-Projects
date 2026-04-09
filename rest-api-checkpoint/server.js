const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

// 1. Load Environment Variables
dotenv.config({ path: './config/.env' });

const app = express();

// 2. Middleware to parse JSON
app.use(express.json());

// 3. Connect to Database
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Database Connected Successfully'))
    .catch(err => console.log('Database Connection Error:', err));

// 4. ROUTES

// GET: RETURN ALL USERS
app.get('/users', async (req, res) => {
    try {
        const users = await User.find(); // Mongoose method to get all documents
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST: ADD A NEW USER TO THE DATABASE
app.post('/users', async (req, res) => {
    const newUser = new User(req.body); // Create instance from request body
    try {
        const savedUser = await newUser.save(); // Save to DB
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT: EDIT A USER BY ID
app.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true } // Return the modified document rather than the original
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE: REMOVE A USER BY ID
app.delete('/users/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 5. Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});