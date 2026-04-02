module.exports = fn => {
  return (req, res, next) => {
    // Run the async function and .catch any error, 
    // then pass it to next() to reach the global error handler
    fn(req, res, next).catch(next);
  };
};
