class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    
    // This property helps us identify operational errors later
    this.isOperational = true;

    // This captures the line of code where the error happened
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
