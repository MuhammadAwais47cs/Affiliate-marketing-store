const tryCatchAsyncError = require("../middleware/tryCatchAsyncError");
const Product = require("../models/productModel");
const ApiFeatures = require("../utils/apiFeature");
const ErrorHandler = require("../utils/ErrorHandler");
// // Create product
exports.createProduct = tryCatchAsyncError(async (req, res, next) => {
  console.log("req.body.product :>> ", req.body);

  const product = await Product.create(req.body);
  console.log("res :>> ", product?.id);
  return res.status(201).json({
    success: true,
    message: "product created successfully",
    product,
  });
  
});

// get Product by Id OR get Product details

exports.getProductDetails = tryCatchAsyncError(async (req, res, next) => {
  console.log("req.params.id :>> ", req.params.id);
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
  console.log("req.query, req.query.id :>> ", brandId, req.query, req.query.id);
  // const productsCount = await Product.countDocuments({ relatedBrand: brandId });

  // const apiFeatures = new ApiFeatures(
  //   Product.find({ relatedBrand: brandId }),
  //   req.query
  // )
  //   .search()
  //   .pagination(resultPerPage);
  const productsCount = await Product.countDocuments();
  const apiFeatures = new ApiFeatures(Product.find(), req.query)
    .search()
    .pagination(resultPerPage);
  // .filter()

  const result = await apiFeatures.query;

  if (!result) {
    return next(new ErrorHandler(`Product not found`, 404));
  }
  res
    .status(200)
    .json({ success: true, products: result, productsCount, resultPerPage });
});
