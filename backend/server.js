const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const postRoutes = require("./routes/postRoutes");
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
const uri = process.env.MONGODB_URI;
// Connect DB...
// after successful connect
mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ MongoDB connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });

app.use("/api/posts", postRoutes);
