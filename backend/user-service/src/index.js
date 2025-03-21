const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`✅ [User Service] Connected to MongoDB`);
    app.listen(PORT, () => {
      console.log(`🚀 [User Service] running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ [User Service] MongoDB connection error:", err);
  });
