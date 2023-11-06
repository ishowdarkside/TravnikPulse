const path = require("path");
const catchAsync = require(path.join(__dirname, "..", "utils", "catchAsync"));
const AppError = require(path.join(__dirname, "..", "utils", "AppError"));
const jwt = require("jsonwebtoken");

exports.login = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;

  // Check for username and password
  if (!username || !password)
    return res
      .status(400)
      .json({ status: "fail", message: "All fields are required" });

  // Admin data
  const adminData = {
    username: process.env.ADMIN_USERNAME,
    password: process.env.ADMIN_PASSWORD,
  };

  // Login validation
  if (adminData.username !== username || adminData.password !== password)
    return res
      .status(401)
      .json({ status: "fail", message: "Invalid username/password" });

  // Generate access token
  const token = jwt.sign({ id: process.env.ADMIN_ID }, process.env.SECRET_KEY, {
    expiresIn: "7d",
  });

  // Set refresh token as a cookie

  // Return access token
  res.json({
    status: "success",
    message: "Logged in successfully!",
    token,
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")?.[1];
  if (!token) return next(new AppError(401, "Unauthorized!"));
  const verified = await jwt.verify(token, process.env.SECRET_KEY);
  if (verified.id !== process.env.ADMIN_ID) return next(401, "Unauthorized");
  next();
});
