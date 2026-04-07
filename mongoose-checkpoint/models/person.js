const mongoose = require('mongoose');

// Define the blueprint for a Person
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String] // Array of strings
});

// Export the model to use in server.js
module.exports = mongoose.model('Person', personSchema);