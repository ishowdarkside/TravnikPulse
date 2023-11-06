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
  const { tourID } = req.params;
  const tour = await Tour.findById(tourID);
  if (!tour) return next(new AppError(404, "Tour not found!"));

  return res.status(200).json({
    status: "success",
    tour,
  });
});

exports.editTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findById(tourID);

  if (!tour) return next(new AppError(404, "Tour not found!"));
  Object.entries(req.body).forEach((e) => {
    tour[e[0]] = e[1];
  });

  await tour.save({ validateBeforeSave: true });

  res.status(200).json({
    status: "success",
    message: "Tour updated successfully!",
  });
});

exports.deleteTour = catchAsync(async (req, res, next) => {
  const { tourID } = req.params;
  await Tour.findByIdAndDelete(tourID);
  res.status(204).json({});
});
