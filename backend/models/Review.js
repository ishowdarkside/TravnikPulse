const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    tour: { type: mongoose.Schema.Types.ObjectId, ref: "Tour" },
    review: { type: String, required: true },
    images: [String],
    approved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
