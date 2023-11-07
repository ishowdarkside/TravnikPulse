const path = require("path");
const catchAsync = require(path.join(__dirname, "..", "utils", "catchAsync"));
const AppError = require(path.join(__dirname, "..", "utils", "AppError"));
const Tour = require(path.join(__dirname, "..", "models", "Tour"));
const User = require(path.join(__dirname, "..", "models", "User"));
const sharp = require("sharp");
const { v4: uuidv4 } = require("uuid");

exports.createTour = catchAsync(async (req, res, next) => {
  const { name, categories, location, duration, date, price, description } =
    req.body;

  /*
  if (!req.file || !req.file.mimetype.startsWith("image"))
    return next(new AppError(400, "Provide valid image"));
*/
  const imageName = uuidv4();

  if (!categories || categories?.length === 0)
    return next(new AppError(400, "Provide categories for tour"));

  const tour = await Tour.create({
    name,
    categories,
    location,
    date,
    price,
    description,
    duration,
    coverImg: `${imageName}.jpeg`,
  });
  /*
  await sharp(req.file.buffer)
    .jpeg(90)
    .resize(1280, 800)
    .toFile(`public/${imageName}.jpeg`);
*/
  res.status(201).json({
    status: "success",
    message: "Tour created successfully!",
  });
});

exports.getTours = catchAsync(async (req, res, next) => {
  const tours = await Tour.find();
  res.status(200).json({
    status: "success",
    results: tours.length,
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

exports.getToursWithin = catchAsync(async (req, res, next) => {
  const { latlng, distance } = req.params;
  const [lat, lng] = latlng.split(",");

  if (!lat || !lng)
    return next(
      new AppError(
        400,
        "Please provide latitude and longitude in the format lat,lng."
      )
    );

  const radius = distance / 6378.1; // Radius of earth in radians

  const tours = await Tour.find({
    location: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
  });
  res.status(200).json({
    status: "success",
    results: tours.length,
    tours,
  });
});

//Protected routes

exports.rateTour = catchAsync(async (req, res, next) => {
  const { rating } = req.body;
  //If no rating provided, throw error
  if (!rating) return next(new AppError(400, "Please provide rating value!"));
  const tour = await Tour.findById(req.params.tourID);

  //If user have already rated tour, throw error
  if (tour.ratings.some((rating) => rating.user === req.user.id))
    return next(new AppError(400, "You have already rated this tour"));
  tour.ratings.push({ user: req.user.id, value: rating });
  await tour.save({ validateBeforeSave: false });

  //Add review to user Rated Tours Array
  const user = await User.findById(req.user.id);
  user.ratedTours.push({ tour: req.params.tourID, value: rating });
  await user.save({ validateBeforeSave: false });

  res.status(200).json({
    status: "success",
    message: "Tour rated successfully!",
  });
});

exports.reviewTour = catchAsync(async (req, res, next) => {
  const { review } = req.body;
  if (!review) return next(new AppError(400, "Provide review content"));
  const tour = await Tour.findById(req.params.tourID);
  const imageArr = [];
  if (req.files) {
    await Promise.all(
      req.files.map(async (file) => {
        const imageName = uuidv4();
        imageArr.push(`${imageName}.jpeg`);
        await sharp(file.buffer)
          .jpeg({ quality: 90 })
          .resize({ width: 1280, height: 800, fit: "contain" })
          .toFile(`public/${imageName}.jpeg`);
      })
    );
  }

  if (req.files)
    tour.reviews.push({ user: req.user.id, images: imageArr, review });
  if (!req.files) tour.reviews.push({ user: req.user.id, review });

  await tour.save({ validateBeforeSave: false });

  //Save Review to user profile
  const user = await User.findById(req.user.id);
  user.reviewedTours.push({
    tour: req.params.tourID,
    review,
    images: imageArr,
  });

  await user.save({ validateBeforeSave: false });
  res.status(200).json({
    status: "success",
    message: "Review has been made successfully!",
  });
});

//User funcionality + Tour

exports.bookmarkTour = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (!user.bookmarkedTours.includes(req.params.tourID))
    user.bookmarkedTours.push(req.params.tourID);
  else
    user.bookmarkedTours = user.bookmarkedTours.filter(
      (bookmark) => bookmark !== req.params.tourID
    );

  await user.save({ validateBeforeSave: false });

  return res.status(200).json({
    status: "success",
    message: user.bookmarkedTours.includes(req.params.tourID)
      ? "Tour bookmarked!"
      : "Tour unbookmarked",
  });
});
