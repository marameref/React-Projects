// Task 5: SMTP Email Integration
const nodemailer = require('nodemailer');
require('dotenv').config({ path: '../.env' }); // Look for .env in the parent folder

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Sending to yourself for testing
    subject: 'Node.js Checkpoint Test',
    text: 'Hello! This email was sent using Node.js and Nodemailer.'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Mail Error:', error);
    }
    console.log('Email sent successfully: ' + info.response);
});
