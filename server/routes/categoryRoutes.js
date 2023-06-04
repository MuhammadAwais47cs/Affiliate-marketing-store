const express = require("express");
const {
  createCategory,
  getAllCategories,
} = require("../controllers/categoryController");
const router = express.Router();
router.route("/categories").get(getAllCategories);
router.route("/category/new").post(createCategory);
// router.route("/brand/:id").get(getBrandDetails);

module.exports = router;
