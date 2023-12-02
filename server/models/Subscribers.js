const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const dotenv = require("dotenv");
dotenv.config({ path: "config/config.env" });

const SubscribersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: [true,'You already join us']
    // validate: [validator.isEmail, "Please Enter a valid Email"],
  },
});
 
module.exports = mongoose.model("Subscribers", SubscribersSchema);
