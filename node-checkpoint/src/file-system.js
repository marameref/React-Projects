// Task 3: File System (FS) Module
const fs = require('fs');
const path = require('path');

// Step 1: Create "welcome.txt"
const filePath = path.join(__dirname, '../welcome.txt');

fs.writeFile(filePath, 'Hello Node', (err) => {
    if (err) throw err;
    console.log('✓ welcome.txt has been created in the root folder.');

    // Step 2: Read from "hello.txt" 
    // (Ensure you have a file named hello.txt in your project root first!)
    const readPath = path.join(__dirname, '../hello.txt');
    
    fs.readFile(readPath, 'utf8', (err, data) => {
        if (err) {
            console.log('Error: Please create a "hello.txt" file in the root directory to test reading.');
        } else {
            console.log('Data retrieved from hello.txt:', data);
        }
    });
});
