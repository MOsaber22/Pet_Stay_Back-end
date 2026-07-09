const mongoose = require("mongoose");
const catsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [0, "Age must be a positive number"],
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: [true, "Gender is required"],
    },
    breed: {
      type: String,
      required: [true, "Breed is required"],
    },
    temperament: {
      type: String,
    },
    story: {
      type: String,
    },
    status: {
      type: String,
      enum: ["available", "adopted", "reserved", "pending"],
      default: "available",
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Cat", catsSchema);
