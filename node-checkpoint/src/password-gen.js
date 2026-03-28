// Task 4: Third-party module integration
const generator = require('generate-password');

const password = generator.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true
});

console.log(`Generated Secure Password: ${password}`);
