const mongoose = require("mongoose");
const governorates = require("./governorates");

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
      enum: ["available", "adopted", "reserved", "pending", "rejected"],
      default: "available",
    },
    image: {
      type: String,
      // required: [true, "Image is required"],
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", //users model can be change later because it didn't done yet
      // required: true,
    },
    adopted_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", //users model can be change later because it didn't done yet
    },
    location: {
      type: String,
      enum: governorates,
      required: [true, "location is required"],
    },
    weight: {
      type: Number,
      min: [1, "Weight must be at least 1 kg"],
      max: [12, "Weight cannot exceed 12 kg"],
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Cat", catsSchema);
