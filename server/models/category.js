const mongoose = require("mongoose");
const categorySchema = mongoose.Schema({
  label: {
    type: String,
    required: [true, "Please Enter Category"],
    trim: true,
  },
});

module.exports = mongoose.model("category", categorySchema);
