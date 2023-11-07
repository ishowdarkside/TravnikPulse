const mongoose = require("mongoose");

const TourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide tour name"],
  },
  categories: {
    type: [String],
    enum: [
      "food",
      "nightlife",
      "history",
      "art",
      "movies",
      "museums",
      "amenities",
      "music",
      "dayTrip",
      "culture",
      "science",
      "parks",
      "show",
      "sport",
      "events",
      "circus",
      "seminars",
      "river",
      "shopping",
      "workshop",
      "hiking",
      "camping",
      "technology",
      "outdoor",
      "coffeeShop",
      "bikingRoutes",
      "petFriendlyPlaces",
      "vegeterian",
    ],
    required: [true, "Provide categories for tour"],
  },
  location: {
    type: {
      type: String,
      default: "Point",
      enum: ["Point"],
    },
    coordinates: [Number],
  },
  duration: {
    type: Number,
    required: [true, "Please provide duration of the tour"],
  },
  date: {
    type: Date,
    required: [true, "Please provide the date of the event"],
  },
  price: {
    type: mongoose.Schema.Types.Mixed,
    enum: ["Free"],
    required: [true, "Provide price of event or asign as FREE"],
  },
  ratings: {
    type: [Number],
  },

  reviews: {
    type: [
      {
        review: {
          type: String,
        },
        images: {
          type: [String],
        },
        approved: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },

  coverImg: {
    type: String,
    required: [true, "Provide tour cover image"],
  },
});

const Tour = mongoose.model("Tour", TourSchema);

module.exports = Tour;
