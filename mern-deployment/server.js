const express = require('express');
const path = require('path');
const app = express();

// ... your middleware and routes ...

// SERVE FRONTEND (Add this after your API routes)
if (process.env.NODE_VALUE === 'production' || true) {
    // Set static folder
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Any route that is not an API route gets sent to React
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 8080; // Azure uses dynamic ports
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));