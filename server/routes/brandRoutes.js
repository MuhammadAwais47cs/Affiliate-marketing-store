const express = require("express");
const {
  getAllBrands,
  createBrand,
  getBrandDetails,
} = require("../controllers/brandController");
const router = express.Router();
router.route("/brands").get(getAllBrands);
router.route("/brands/:id").get(getAllBrands);
router.route("/brand/new").post(createBrand);
router.route("/brand/:id").get(getBrandDetails);

module.exports = router;
