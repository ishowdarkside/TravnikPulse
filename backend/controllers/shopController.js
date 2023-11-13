const path = require("path");
const catchAsync = require(path.join(__dirname, "..", "utils", "catchAsync"));
const AppError = require(path.join(__dirname, "..", "utils", "AppError"));
const Shop = require(path.join(__dirname, "..", "models", "Shop"));
const sharp = require("sharp");
const { v4: uuidv4 } = require("uuid");

exports.addShop = catchAsync(async (req, res, next) => {
  req.body.location = JSON.parse(req.body.location);

  const { shopName, location, category } = req.body;

  if (!req.file || !req.file.mimetype.startsWith("image"))
    return next(new AppError(400, "Provide valid image"));

  const imageName = uuidv4();

  await sharp(req.file.buffer)
    .jpeg(90)
    .resize({ width: 1280, height: 800, fit: "cover" })
    .toFile(`public/${imageName}.jpeg`);

  await Shop.create({
    shopName,
    location,
    coverImg: `${imageName}.jpeg`,
    category,
  });

  res.status(201).json({
    status: "success",
    message: "Shop added successfully!",
  });
});

exports.getAllShops = catchAsync(async (req, res, next) => {
  const shops = await Shop.find();
  return res.status(200).json({
    status: "success",
    shops,
  });
});

exports.getSingleShop = catchAsync(async (req, res, next) => {
  const shop = await Shop.findById(req.params.shopID);
  return res.status(200).json({
    status: "success",
    shop,
  });
});

exports.getShopsWithin = catchAsync(async (req, res, next) => {
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

  const shops = await Shop.find({
    location: {
      $geoWithin: {
        $centerSphere: [[parseFloat(lng), parseFloat(lat)], radius],
      },
    },
  });
  res.status(200).json({
    status: "success",
    results: shops.length,
    shops,
  });
});
