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
  // relatedProduct: {
  //   type: String,
  //   trim: true,
  // },
  // relatedProduct array of ids
  relatedProduct: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],

  relatedBrand: {
    type: String,
    trim: true,
  },
  // relatedBrands array of ids
  // similarBrand: [{ type: mongoose.Schema.Types.ObjectId, ref: "Brand" }],

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
  badge: {
    type: String,
    trim: true,
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
