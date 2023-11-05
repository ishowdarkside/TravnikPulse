const path = require("path");
const catchAsync = require(path.join(__dirname, "..", "utils", "catchAsync"));
const AppError = require(path.join(__dirname, "..", "utils", "AppError"));
const Tour = require(path.join(__dirname, "..", "models", "Tour"));

exports.createTour = catchAsync(async (req, res, next) => {
  const { name, categories, location, duration, date, price } = req.body;

  await Tour.create({ name, categories, location, date, price });
  res.status(201).json({
    status: "success",
    message: "Tour created successfully!",
  });
});
