const mongoose = require("mongoose");

async function connectMongo(url) {
  try {
    await mongoose.connect(url).then(() => {
      console.log("Connected to Mongo DB");
    });
  } catch {
    console.log("Error connecting to MongoDB");
  }
}

module.exports = connectMongo;
