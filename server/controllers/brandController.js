const tryCatchAsyncError = require("../middleware/tryCatchAsyncError");
const Brand = require("../models/brandModel");
const ApiFeatures = require("../utils/apiFeature");
const ErrorHandler = require("../utils/ErrorHandler");
const cloudinary = require("cloudinary");

// // Create brand
exports.deleteBrand = tryCatchAsyncError(async (req, res, next) => {
  console.log("req.params :>> ", req.params.id);
  const Brand = await Brand.findById(req.params.id);

  if (!Brand) {
    return next(new ErrorHandler("Product not found", 404));
  }

  // Deleting Images From Cloudinary
  // for (let i = 0; i < Brand.images.length; i++) {
  //   await cloudinary.v2.uploader.destroy(Brand.images[i].public_id);
  // }

  await Brand.remove();

  res.status(200).json({
    success: true,
    message: "Product Delete Successfully",
  });
  return res.status(201).json({
    success: true,
    message: "Brand created successfully",
    brand,
  });
});
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
  const resultPerPage = 100;
  const brandsCount = await Brand.countDocuments();
  const apiFeatures = new ApiFeatures(Brand.find(), req.query)
    .search()
    .pagination(resultPerPage);
  // .filter()

  const result = await apiFeatures.query;

  const key = "name";
  // const brands = [
  //   ...new Map(filteredResult?.map((item) => [item[key], item])).values(),
  // ];

  if (!result) {
    return next(new ErrorHandler(`Brand not found`, 404));
  }
  // console.log("else brands :>> ", brands);
  res
    .status(200)
    .json({ success: true, brands: result, brandsCount, resultPerPage });
});
