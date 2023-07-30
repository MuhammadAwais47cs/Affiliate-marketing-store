const tryCatchAsyncError = require("../middleware/tryCatchAsyncError");
const Brand = require("../models/brandModel");
const ApiFeatures = require("../utils/apiFeature");
const ErrorHandler = require("../utils/ErrorHandler");
const cloudinary = require("cloudinary");

// // Create brand
exports.createBrand = tryCatchAsyncError(async (req, res, next) => {
  console.log("req.body :>> ", req.body);
  const brand = await Brand.create(req.body);
  return res.status(201).json({
    success: true,
    message: "Brand created successfully",
    brand,
  });
});

// get Brand by Id OR get Brand details

exports.getBrandDetails = tryCatchAsyncError(async (req, res, next) => {
  console.log("req.params.id :>> ", req.params.id);
  const brand = await Brand.findById(req.params.id);
  if (!brand) {
    return next(new ErrorHandler(`brand not found`, 404));
  }
  return res.status(200).json({
    success: true,
    brand,
  });
});
exports.getAllBrands = tryCatchAsyncError(async (req, res, next) => {
  // return next(new ErrorHandler('template error'))
  const { id, alphabet } = req.params;
  const resultPerPage = 100;
  const brandsCount = await Brand.countDocuments();
  let apiFeatures = "";
  if (id) {
    apiFeatures = new ApiFeatures(Brand.find({ category: id }), req.query)
      .search()
      .pagination(resultPerPage);
  } else {
    apiFeatures = new ApiFeatures(Brand.find(), req.query)
      .search()
      .alphabet()
      .pagination(resultPerPage);
    // .filter()
  }

  const result = await apiFeatures.query;
  
  if (!result) {
    return next(new ErrorHandler(`Brand not found`, 404));
  }
  // console.log("else brands :>> ", brands);
  res
    .status(200)
    .json({ success: true, brands: result, brandsCount, resultPerPage });
});

// delete Brand by Id 
exports.deleteBrand = tryCatchAsyncError(async (req, res, next) => {
  const brand = await Brand.findById(req.params.id);
  if (!brand) {
    return next(new ErrorHandler(`Brand not found`, 404));
  }
  await brand.remove();
  res.status(200).json({
    success: true,
    message: "Brand Delete Successfully",
  });
});


