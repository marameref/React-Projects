// Task 2: Create a local server
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello Node!!!!</h1>\n');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is successfully running at http://localhost:${PORT}`);
});
