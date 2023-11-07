const express = require("express");
const router = express.Router();
const path = require("path");
const {
  createTour,
  getTours,
  getSingleTour,
  editTour,
  deleteTour,
  getToursWithin,
} = require(path.join(__dirname, "..", "controllers", "tourController"));
const { protect } = require(path.join(
  __dirname,
  "..",
  "controllers",
  "authController"
));
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

router
  .route("/")
  .post(protect, upload.single("coverImg"), createTour)
  .get(getTours);
router
  .route("/:tourID")
  .get(getSingleTour)
  .patch(protect, editTour)
  .delete(protect, deleteTour);

router.get("/tours-within/distance/:distance/center/:latlng", getToursWithin);

module.exports = router;
