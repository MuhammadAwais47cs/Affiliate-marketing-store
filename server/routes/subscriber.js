const express = require("express");
const { createSubscriber } = require("../controllers/subscribersController");
const router = express.Router();
router.route("/subscribe/new").post(createSubscriber);
 
module.exports = router;
