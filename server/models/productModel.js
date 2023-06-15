const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  sName: {
    type: String,
    trim: true,
  },
  relatedProduct: {
    type: String,
    trim: true,
  },
  relatedBrand: {
    type: String,
    trim: true,
  },
  code: {
    type: String,
    trim: true,
  },
  link: {
    type: String,
    trim: true,
  },
  couponType: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  expireDate: {
    type: Date,
  },
  language: {
    type: String,
  },
  Badge: {
    type: Number,
  },
  images: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
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

module.exports = mongoose.model("Product", productSchema);
