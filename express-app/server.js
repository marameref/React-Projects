const express = require('express');
const checkTime = require('./middleware/checkTime');
const app = express();
const PORT = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Serve static files (CSS)
app.use(express.static('public'));

// Apply the custom middleware globally
app.use(checkTime);

// Routes
app.get('/', (req, res) => res.render('home', { title: 'Home' }));
app.get('/services', (req, res) => res.render('services', { title: 'Our Services' }));
app.get('/contact', (req, res) => res.render('contact', { title: 'Contact Us' }));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));