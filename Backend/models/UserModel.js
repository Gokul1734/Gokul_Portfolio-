const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Message: {
    type: String,
    required: true,
  },
});

const UserModal = mongoose.model("Users", UserSchema);

module.exports = UserModal;
