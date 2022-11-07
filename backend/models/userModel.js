const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {  //email is the username, you can change it to username if you want
    type: String,
    required: true,
    unique: true,
  },
  salt: String,
  hash: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;