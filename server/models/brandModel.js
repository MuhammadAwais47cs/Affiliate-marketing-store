const mongoose = require("mongoose");
const brandSchema = mongoose.Schema({
  name: {
    type: String,
    // required: [true, "Please Enter product Name"],
    trim: true,
  },
  sName: {
    type: String,
    //required: [true, "Please Enter product Description"],
  },
  description: {
    type: String,
    //required: [true, "Please Enter product Description"],
  },
  link: {
    type: String,
    //required: [true, "Please Enter product Stock"],
  },

  language: {
    type: String,
    // required: [true, "Please Enter product Description"],
  },
  relatedBrand: {
    type: String,
    // required: [true, "Please Enter product Description"],
  },
  published: {
    type: Boolean,
  },
  popular: {
    type: Boolean,
  },
  other: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Brand", brandSchema);
