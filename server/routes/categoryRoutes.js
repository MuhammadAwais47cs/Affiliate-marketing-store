const express = require("express");
const {
  createCategory,
  getAllCategories,
  deleteCategory,
} = require("../controllers/categoryController");
const router = express.Router();
router.route("/categories").get(getAllCategories);
router.route("/category/new").post(createCategory);
// deleteBrand by Id
router.route("/category/:id").delete(deleteCategory);
// router.route("/brand/:id").get(getBrandDetails);

module.exports = router;
