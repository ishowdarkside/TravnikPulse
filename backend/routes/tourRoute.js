const express = require("express");
const router = express.Router();
const path = require("path");
const { createTour, getTours } = require(path.join(
  __dirname,
  "..",
  "controllers",
  "tourController"
));

router.route("/").post(createTour).get(getTours);

module.exports = router;
