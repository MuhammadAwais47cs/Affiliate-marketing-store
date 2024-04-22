const mongoose = require("mongoose");
const blogsSchema = mongoose.Schema({
  label: {
    type: String,
    required: [true, "Please Enter blogs"],
    trim: true,
  },
  description: {
    type: String,
    //required: [true, "Please Enter product Description"],
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
  category: {
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

module.exports = mongoose.model("blogs", blogsSchema);
