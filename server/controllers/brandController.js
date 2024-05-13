const tryCatchAsyncError = require("../middleware/tryCatchAsyncError");
const Brand = require("../models/brandModel");
const Product = require("../models/productModel");

const category = require("../models/category");
const ApiFeatures = require("../utils/apiFeature");
const ErrorHandler = require("../utils/ErrorHandler");
const cloudinary = require("cloudinary");

// // Create brand
exports.createBrand = tryCatchAsyncError(async (req, res, next) => {
  const brand = await Brand.create(req.body);
  return res.status(201).json({
    success: true,
    message: "Brand created successfully",
    brand,
  });
});

// get Brand by Id OR get Brand details

exports.getBrandDetails = tryCatchAsyncError(async (req, res, next) => {
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
  const resultPerPage = 1000;
  const brandsCount = await Brand.countDocuments();
  let apiFeatures = "";
  let activeOffers = [];
  let cateName = "";
  if (id) {
    apiFeatures = new ApiFeatures(
      Brand.find({ category: id }),
      req.query
    ).search();
    // .pagination(resultPerPage);
    cateName = await category.findById(id);
  } else {
    apiFeatures = new ApiFeatures(Brand.find(), req.query).search().alphabet();
    // .pagination(resultPerPage);
    // .filter()
    activeOffers = await Brand.aggregate([
      {
        $lookup: {
          from: "products", // Name of the product collection (case-sensitive)
          localField: "_id",
          foreignField: "relatedBrand",
          as: "products",
        },
      },
      {
        $project: {
          name: 1, // Include brand name in the result
          productCount: { $size: "$products" }, // Count the number of products for each brand
          // productCount: "$products" // Count the number of products for each brand
        },
      },
    ]);
  }

  const result = await apiFeatures.query;

  if (!result) {
    return next(new ErrorHandler(`Brand not found`, 404));
  }

  res.status(200).json({
    success: true,
    brands: result,
    brandsCount,
    cateName,
    resultPerPage,
    activeOffers,
  });
});
exports.getAllBrandsWithAlphabets = tryCatchAsyncError(
  async (req, res, next) => {
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

    let result = await apiFeatures.query;

    if (!result) {
      return next(new ErrorHandler(`Brand not found`, 404));
    }

    // Function to create the alphabetically filtered result
    function createAlphabetFilter(data) {
      const alphabetFilter = [];

      // Filter numbers 0-9
      const filterResult = data.filter(
        (product) => /^\d/.test(product.name)
        // product.name.startsWith(num.toString())
      );
      if (filterResult.length > 0) {
        alphabetFilter.push({
          filterBrands: filterResult,
          alpabets: "0-9",
        });
      }

      // Filter Alpabets
      for (
        let letter = "a".charCodeAt(0);
        letter <= "z".charCodeAt(0);
        letter++
      ) {
        const currentLetter = String.fromCharCode(letter);
        const filterResult = data.filter((product) =>
          product.name.toLowerCase().startsWith(currentLetter)
        );
        if (filterResult.length > 0) {
          alphabetFilter.push({
            // [currentLetter]: filterResult,
            filterBrands: filterResult,
            alpabets: [currentLetter.toUpperCase()],
          });
        }
      }

      return alphabetFilter;
    }

    const filteredResult = createAlphabetFilter(result);

    res.status(200).json({
      success: true,
      brands: filteredResult,
      brandsCount,
      resultPerPage,
    });
    // .json({ success: true, brands: result, brandsCount, resultPerPage });
  }
);

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

// get similar brands by brand.relatedbrands with ids array of related brands ids
exports.getSimilarBrands = tryCatchAsyncError(async (req, res, next) => {
  const { ids } = req.body;
  const brands = await Brand.find({ _id: { $in: ids } });
  if (!brands) {
    return next(new ErrorHandler(`Brands not found`, 404));
  }
  res.status(200).json({
    success: true,
    brands,
  });
});


