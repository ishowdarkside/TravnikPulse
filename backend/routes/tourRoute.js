const express = require("express");
const router = express.Router();
const path = require("path");
const { createTour } = require(path.join(
  __dirname,
  "..",
  "controllers",
  "tourController"
));

router.route("/").post(createTour);

module.exports = router;
