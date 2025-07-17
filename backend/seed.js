const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const Post = require('./models/Post');
require("dotenv").config();

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.mongodb.net/${process.env.DB_NAME}`;

mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err.message));


