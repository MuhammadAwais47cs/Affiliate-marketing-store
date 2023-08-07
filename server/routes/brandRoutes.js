const express = require("express");
const {
  getAllBrands,
  createBrand,
  getBrandDetails,
  deleteBrand,
  getSimilarBrands
} = require("../controllers/brandController");
const router = express.Router();
router.route("/brands").get(getAllBrands);
router.route("/brands/:id").get(getAllBrands);
router.route("/brand/new").post(createBrand);
router.route("/brand/:id").get(getBrandDetails);
router.route("/brand/:id").delete(deleteBrand); // deleteBrand by Id
router.route("/getSimilarBrands").post(getSimilarBrands); // similar brands


module.exports = router;
