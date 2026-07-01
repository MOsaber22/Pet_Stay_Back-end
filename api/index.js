const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT;
const DB_URL = process.env.DB_URL;
app.use(express.json());

mongoose.connect(DB_URL)
.then(()=>{
    console.log("Database connected successfully");
})
.catch(()=>{
    console.log("Database connection failed");
    process.exit(1);
})


app.get("/", (req,res)=>{
    res.status(200).json({
        message: "Welcome to Pet Stay"
    });
})

// app.listen(port, ()=>{
//     console.log(`Server is running on port ${port}`);
// })
module.exports = app;