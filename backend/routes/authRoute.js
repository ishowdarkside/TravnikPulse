const express = require("express");
const path = require("path");
const router = express.Router();
const { login } = require(path.join(
  __dirname,
  "..",
  "controllers",
  "authController"
));

router.post("/login", login);

module.exports = router;
