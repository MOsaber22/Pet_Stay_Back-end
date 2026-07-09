const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const app = express();

const cors = require("cors");
const catsRoutes = require("../routes/cats.routes");
const port = process.env.PORT;
const DB_URL = process.env.DB_URL;

const allowedOrigins = [
  "https://pet-stay-back-end.vercel.app/",
  "http://localhost:5173",
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

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch(() => {
    console.log("Database connection failed");
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Pet Stay",
  });
});

app.use("/api/v1/cats", catsRoutes);


// app.listen(port, ()=>{
//     console.log(`Server is running on port ${port}`);
// })
module.exports = app;
 