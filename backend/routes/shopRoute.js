const express = require("express");
const router = express.Router();
const path = require("path");
const { protectAdmin } = require(path.join(
  __dirname,
  "..",
  "controllers",
  "authController"
));

const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const {
  addShop,
  getAllShops,
  getSingleShop,
  getShopsWithin,
} = require(path.join(__dirname, "..", "controllers", "shopController"));

router
  .route("/")
  .get(getAllShops)
  .post(protectAdmin, upload.single("coverImg"), addShop);

router.get("/:shopID", getSingleShop);

router.get("/shops-within/distance/:distance/center/:latlng", getShopsWithin);

module.exports = router;
