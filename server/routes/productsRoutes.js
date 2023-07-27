const express = require('express');
const {
  getAllProducts,
  createProduct,
  getProductDetails,
  deleteProduct,
} = require("../controllers/productController");
const router = express.Router();
router.route("/products").get(getAllProducts);
router.route("/products/new").post(createProduct);
router.route("/product/:id").get(getProductDetails);
router.route("/product/:id").delete(deleteProduct);
module.exports = router