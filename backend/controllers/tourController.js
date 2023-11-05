const path = require("path");
const catchAsync = require(path.join(__dirname, "..", "utils", "catchAsync"));
const AppError = require(path.join(__dirname, "..", "utils", "AppError"));
const Tour = require(path.join(__dirname, "..", "models", "Tour"));

exports.createTour = catchAsync(async (req, res, next) => {
  const { name, categories, location, duration, date, price, coverImg } =
    req.body;

  if (!categories || categories?.length === 0)
    return next(new AppError(400, "Provide categories for tour"));

  const tour = await Tour.create({
    name,
    categories,
    location,
    date,
    price,
    duration,
    coverImg,
  });

  res.status(201).json({
    status: "success",
    message: "Tour created successfully!",
  });
});

exports.getTours = catchAsync(async (req, res, next) => {
  const tours = await Tour.find();
  res.status(200).json({
    status: "success",
    tours,
  });
});

exports.getSingleTour = catchAsync(async (req, res, next) => {
  const { tourId } = req.params;
  const tour = await Tour.findById(tourId);
  if (!tour) return next(new AppError(404, "Tour not found!"));

  return res.status(200).json({
    status: "success",
    tour,
  });
});
