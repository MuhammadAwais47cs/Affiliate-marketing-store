const tryCatchAsyncError = require("../middleware/tryCatchAsyncError");
const Slider = require("../models/sliderModel");
const ApiFeatures = require("../utils/apiFeature");
const ErrorHandler = require("../utils/ErrorHandler");
const cloudinary = require("cloudinary");

// // Create slider
exports.createSlider = tryCatchAsyncError(async (req, res, next) => {
  const slider = await Slider.create(req.body);
  return res.status(201).json({
    success: true,
    message: "Slider created successfully",
    slider,
  });
});

// get Slider by Id OR get Slider details

exports.getSliderDetails = tryCatchAsyncError(async (req, res, next) => {
  const slider = await Slider.findById(req.params.id);
  if (!slider) {
    return next(new ErrorHandler(`slider not found`, 404));
  }
  return res.status(200).json({
    success: true,
    slider,
  });
});
exports.getAllSliders = tryCatchAsyncError(async (req, res, next) => {
  // return next(new ErrorHandler('template error'))
  const resultPerPage = 100;
  const slidersCount = await Slider.countDocuments();
  const apiFeatures = new ApiFeatures(Slider.find(), req.query)
    .search()
    .pagination(resultPerPage);
  // .filter()
  const result = await apiFeatures.query;
  if (!result) {
    return next(new ErrorHandler(`Slider not found`, 404));
  }
  res
    .status(200)
    .json({ success: true, sliders: result, slidersCount, resultPerPage });
});
// delete Slider by Id
exports.deleteSlider = tryCatchAsyncError(async (req, res, next) => {
  const slider = await Slider.findById(req.params.id);
  if (!slider) {
    return next(new ErrorHandler(`Slider not found`, 404));
  }
  await slider.remove();
  return res.status(200).json({
    success: true,
    message: "Slider deleted successfully",
  });
});