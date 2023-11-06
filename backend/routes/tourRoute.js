const express = require("express");
const router = express.Router();
const path = require("path");
const {
  createTour,
  getTours,
  getSingleTour,
  editTour,
  deleteTour,
} = require(path.join(__dirname, "..", "controllers", "tourController"));
const { protect } = require(path.join(
  __dirname,
  "..",
  "controllers",
  "authController"
));

router.route("/").post(protect, createTour).get(getTours);
router
  .route("/:tourID")
  .get(getSingleTour)
  .patch(protect, editTour)
  .delete(protect, deleteTour);

module.exports = router;
