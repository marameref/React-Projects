const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

exports.protect = catchAsync(async (req, res, next) => {
  // 1. Get token from cookies
  const token = req.cookies.jwt;
  if (!token) return next(new AppError('Please log in to access this route', 401));

  // 2. Verify token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
  // 3. Attach user to request
  req.user = decoded; 
  next();
});