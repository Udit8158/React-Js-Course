// import mongoose from "mongoose";
const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// module.exports = mongoose.model("user", UserSchema);
// To do unique extenses (here like email)
const User = mongoose.model("user", UserSchema);
User.createIndexes();
module.exports = User; // Here 'User' is a model which use  'UserSchema' and store in 'users' document of DB.
