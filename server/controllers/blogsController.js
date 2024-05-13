const tryCatchAsyncError = require("../middleware/tryCatchAsyncError");
const blogs = require("../models/blogsModel");
const ApiFeatures = require("../utils/apiFeature");
const ErrorHandler = require("../utils/ErrorHandler");
const cloudinary = require("cloudinary");

// // Create blogs
exports.createBlogs = tryCatchAsyncError(async (req, res, next) => {
  const result = await blogs.create(req.body.data);
  return res.status(201).json({
    success: true,
    message: "blogs created successfully",
    result,
  });
});

// get blogs by Id OR get blogs details

exports.getblogsDetails = tryCatchAsyncError(async (req, res, next) => {
  const blogs = await blogs.findById(req.params.id);
  if (!blogs) {
    return next(new ErrorHandler(`blogs not found`, 404));
  }
  return res.status(200).json({
    success: true,
    blogs,
  });
});
exports.getAllBlogs = tryCatchAsyncError(async (req, res, next) => {
  // return next(new ErrorHandler('template error'))
  const resultPerPage = 100;
  const blogssCount = await blogs.countDocuments();
  const apiFeatures = new ApiFeatures(blogs.find(), req.query)
    .search()
    .pagination(resultPerPage);
  // .filter()

  const result = await apiFeatures.query;

  const key = "name";
  // const blogss = [
  //   ...new Map(filteredResult?.map((item) => [item[key], item])).values(),
  // ];

  if (!result) {
    return next(new ErrorHandler(`blogs not found`, 404));
  }
  res
    .status(200)
    .json({ success: true, Blogs: result, blogssCount, resultPerPage });
});

// delete blogs by Id
exports.deleteBlogs = tryCatchAsyncError(async (req, res, next) => {
  const Blogs = await blogs.findById(req.params.id);
  if (!Blogs) {
    return next(new ErrorHandler(`blogs not found`, 404));
  }
  await Blogs.remove();
  return res.status(200).json({
    success: true,
    message: "blogs deleted successfully",
  });
});
