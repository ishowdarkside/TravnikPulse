const path = require("path");
const catchAsync = require(path.join(__dirname, "..", "utils", "catchAsync"));
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
  const accessToken = jwt.sign(
    { username: adminData.username },
    process.env.SECRET_KEY,
    { expiresIn: "10s" }
  );

  // Generate refresh token
  const refreshToken = jwt.sign(
    { username: adminData.username },
    process.env.SECRET_KEY,
    { expiresIn: "7d" }
  );

  // Set refresh token as a cookie
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  });

  // Return access token
  res.json({ accessToken });
});

exports.refresh = catchAsync(async (req, res, next) => {
  const refreshToken = req.cookies.refreshToken;
  // Check for refresh token
  if (!refreshToken)
    return res
      .status(403)
      .json({ status: "fail", message: "Refresh token not provided" });

  // Verify refresh token
  jwt.verify(refreshToken, process.env.SECRET_KEY, (err, user) => {
    // Validate refresh token
    if (err)
      return res
        .status(403)
        .json({ status: "fail", message: "Invalid refresh token" });

    // Generate new access token
    const accessToken = jwt.sign(
      { username: user.username },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    // Return access token
    res.json({ accessToken });
  });
});
