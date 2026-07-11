require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("../routes/authRoutes");

const app = express();

const port = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;

app.use(express.json());

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Database connection failed:", err.message);
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Pet Stay",
  });
});

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});