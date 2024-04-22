const express = require("express");
const {
  createBlogs,
  getAllBlogs,
  deleteBlogs,
} = require("../controllers/blogsController");
const router = express.Router();
router.route("/blogs").get(getAllBlogs);
router.route("/blogs/new").post(createBlogs);
// deleteBrand by Id
router.route("/blogs/:id").delete(deleteBlogs);
// router.route("/brand/:id").get(getBrandDetails);

module.exports = router;
