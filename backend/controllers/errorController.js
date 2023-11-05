const errorController = (err, req, res, next) => {
  if (process.env.NODE_ENV === "dev") {
    res.status(500).json({
      message: err.message,
      err,
      stack: err.stack,
    });
  }

  if (process.env.NODE_ENV === "production") {
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: "fail",
        message: err.message,
      });
    } else {
      return res.status(500).json({
        status: "error",
        message: "Something went really wrong!",
      });
    }
  }
};

module.exports = errorController;
