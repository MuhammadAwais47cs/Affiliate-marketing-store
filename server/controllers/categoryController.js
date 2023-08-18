const tryCatchAsyncError = require("../middleware/tryCatchAsyncError");
const category = require("../models/category");
const ApiFeatures = require("../utils/apiFeature");
const ErrorHandler = require("../utils/ErrorHandler");
const cloudinary = require("cloudinary");

// // Create category
exports.createCategory = tryCatchAsyncError(async (req, res, next) => {
  console.log("req.body :>> ", req.body);
  const result = await category.create(req.body.data);
  return res.status(201).json({
    success: true,
    message: "category created successfully",
    result,
  });
});

// get category by Id OR get category details

exports.getcategoryDetails = tryCatchAsyncError(async (req, res, next) => {
  console.log("req.params.id :>> ", req.params.id);
  const category = await category.findById(req.params.id);
  if (!category) {
    return next(new ErrorHandler(`category not found`, 404));
  }
  return res.status(200).json({
    success: true,
    category,
  });
});
exports.getAllCategories = tryCatchAsyncError(async (req, res, next) => {
  // return next(new ErrorHandler('template error'))
  const resultPerPage = 100;
  const categorysCount = await category.countDocuments();
  const apiFeatures = new ApiFeatures(category.find(), req.query)
    .search()
    .pagination(resultPerPage);
  // .filter()

  const result = await apiFeatures.query;

  const key = "name";
  // const categorys = [
  //   ...new Map(filteredResult?.map((item) => [item[key], item])).values(),
  // ];

  if (!result) {
    return next(new ErrorHandler(`category not found`, 404));
  }
  // console.log("else categorys :>> ", categorys);
  res
    .status(200)
    .json({ success: true, categories: result, categorysCount, resultPerPage });
});

// delete category by Id 
exports.deleteCategory = tryCatchAsyncError(async (req, res, next) => {
  const Category = await category.findById(req.params.id);
  if (!Category) {
    return next(new ErrorHandler(`category not found`, 404));
  }
  await Category.remove();
  return res.status(200).json({
    success: true,
    message: "category deleted successfully",
  });
});