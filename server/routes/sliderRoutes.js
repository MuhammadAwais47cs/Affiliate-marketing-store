const express = require("express");
const {
  getAllSliders,
  createSlider,
  getSliderDetails,
} = require("../controllers/sliderController");
const router = express.Router();
router.route("/sliders").get(getAllSliders);
router.route("/slider/new").post(createSlider);
router.route("/slider/:id").get(getSliderDetails);

module.exports = router;
