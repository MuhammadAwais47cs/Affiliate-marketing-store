const tryCatchAsyncError = require("../middleware/tryCatchAsyncError");
const Product = require("../models/productModel");
const ApiFeatures = require("../utils/apiFeature");
const ErrorHandler = require("../utils/ErrorHandler");
// // Create product
exports.createProduct = tryCatchAsyncError(async (req, res, next) => {
  const product = await Product.create(req.body);

  return res.status(201).json({
    success: true,
    message: "product created successfully",
    product,
  });
});

// get Product by Id OR get Product details

exports.getProductDetails = tryCatchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler(`Product not found`, 404));
  }
  return res.status(200).json({
    success: true,
    product,
  });
});
exports.getAllProducts = tryCatchAsyncError(async (req, res, next) => {
  const resultPerPage = 1000;
  const brandId = req.query.id;

  let apiFeatures = "";
  if (brandId) {
    apiFeatures = new ApiFeatures(
      Product.find({ relatedBrand: brandId }),
      req.query
    )
      .search()
      .pagination(resultPerPage);
  } else {
    apiFeatures = new ApiFeatures(Product.find(), req.query)
      .search()
      .pagination(resultPerPage);
    // .filter()
  }

  const productsCount = await Product.countDocuments();

  const result = await apiFeatures.query;

  if (!result) {
    return next(new ErrorHandler(`Product not found`, 404));
  }
  res
    .status(200)
    .json({ success: true, products: result, productsCount, resultPerPage });
});

// delete Product by Id
exports.deleteProduct = tryCatchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler(`Product not found`, 404));
  }
  await product.remove();
  return res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
});
