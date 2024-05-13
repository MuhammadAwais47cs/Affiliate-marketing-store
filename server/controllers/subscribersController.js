const tryCatchAsyncError = require("../middleware/tryCatchAsyncError");
const Slider = require("../models/sliderModel");
const Subscribers = require("../models/Subscribers");
const ApiFeatures = require("../utils/apiFeature");
const ErrorHandler = require("../utils/ErrorHandler");
const cloudinary = require("cloudinary");

// // Create Subscribers
exports.createSubscriber = tryCatchAsyncError(async (req, res, next) => {
  let subscriber = await Subscribers.findOne({ email: req.body.email });
  if (subscriber)
    return res.status(401).json({
      success: false,
      message: "User Already exited,  ",
    });
  subscriber = await Subscribers.create(req.body);
  return res.status(201).json({
    success: true,
    message: "Thanks for joinning us, Subscribe successfully",
    subscriber,
  });
});
