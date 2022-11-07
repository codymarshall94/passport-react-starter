const mongoose = require("mongoose");

require("dotenv").config();

const connectDb = async () => {
  try {
    const conn = mongoose.connect(/* your mongodb connection string/env */ {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDb;