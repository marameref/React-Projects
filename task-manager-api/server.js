const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');

// Import our custom error utilities (we will create these next)
const AppError = require('./utils/AppError');
const globalErrorHandler = require('./middleware/errorMiddleware');

// 1. INITIALIZE APP & ENV
dotenv.config({ path: './.env' });
const app = express();

// 2. GLOBAL MIDDLEWARES (Security & Parsing)
app.use(helmet()); // Set security HTTP headers

// Limit requests from same IP (Prevent Brute Force)
const limiter = rateLimit({
  max: 100, 
  windowMs: 60 * 60 * 1000, // 1 hour
  message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection
// Added configuration to prevent the "Cannot set property query" error
app.use(mongoSanitize({
  replaceWith: '_'
}));

// Data sanitization against XSS
app.use(xss());

// 3. ROUTES
// Test Route
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to the Task Manager API!'
  });
});

// Placeholder for your actual routes (we will add these later)
// app.use('/api/v1/auth', authRouter);
// app.use('/api/v1/tasks', taskRouter);

// 4. ERROR HANDLING FOR UNDEFINED ROUTES
// If a request reaches here, it means no route above matched it
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// 5. GLOBAL ERROR HANDLING MIDDLEWARE
// This must be the last middleware in the file
app.use(globalErrorHandler);

// 6. START SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}...`);
});
