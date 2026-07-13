require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("../routes/authRoutes");
const catsRoutes = require("../routes/cats.routes");
const cartRoutes = require("../routes/cart.routes");
const userRoutes = require("../routes/user.routes");

const app = express();

const port = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;


const allowedOrigins = [
  "https://pet-stay-back-end.vercel.app/",
  "http://localhost:5173/",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/cats", catsRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/auth", authRoutes);

console.log(DB_URL);

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

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

module.exports = app;
