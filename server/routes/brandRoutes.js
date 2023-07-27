const express = require("express");
const {
  getAllBrands,
  createBrand,
  getBrandDetails,
  deleteBrand,
} = require("../controllers/brandController");
const router = express.Router();
router.route("/brands").get(getAllBrands);
router.route("/brands/:id").get(getAllBrands);
router.route("/brand/new").post(createBrand);
router.route("/brand/:id").get(getBrandDetails);
// deleteBrand by Id
router.route("/brand/:id").delete(deleteBrand);

module.exports = router;
