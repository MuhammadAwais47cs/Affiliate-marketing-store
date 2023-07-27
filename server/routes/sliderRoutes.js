const express = require("express");
const {
  getAllSliders,
  createSlider,
  deleteSlider,
  getSliderDetails,
} = require("../controllers/sliderController");
const router = express.Router();
router.route("/sliders").get(getAllSliders);
router.route("/slider/new").post(createSlider);
router.route("/slider/:id").get(getSliderDetails);
// deleteSlider by Id
router.route("/slider/:id").delete(deleteSlider);
module.exports = router;
