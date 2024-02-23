// controllers/errorController.js
const globalErrorHandler = (err, req, res, next) => {
    res.status(err.statusCode || 500).json({
      status: err.status || 'error',
      message: err.message || 'Internal Server Error',
    });
  };
  
  module.exports = globalErrorHandler;