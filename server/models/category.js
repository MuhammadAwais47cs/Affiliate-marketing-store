const mongoose = require("mongoose");
const categorySchema = mongoose.Schema({
  label: {
    type: String,
    required: [true, "Please Enter Category"],
    trim: true,
  },
  icon: {
    type: String,
    // required: [true, "Please Enter Icon"],
    trim: true,
  },
  // relatedBrands array of ids
  relatedBrand: [{ type: mongoose.Schema.Types.ObjectId, ref: "Brand" }],

  top: {
    type: Boolean,
  },
});

module.exports = mongoose.model("category", categorySchema);
