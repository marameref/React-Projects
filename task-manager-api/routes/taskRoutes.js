const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const Task = require('../models/Task');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

router.use(protect); // Protect all routes in this file

router.delete('/:id', catchAsync(async (req, res, next) => {
  const task = await Task.findById(req.params.id);

  if (!task) return next(new AppError('No task found with that ID', 404));

  // Check Ownership
  if (task.user.toString() !== req.user.id) {
    return next(new AppError('You do not have permission to delete this task', 403));
  }

  await task.remove();
  res.status(204).json({ status: 'success', data: null });
}));