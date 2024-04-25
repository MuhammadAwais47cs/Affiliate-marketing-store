const express = require("express");
const { sendMails } = require("../controllers/mailController");
const router = express.Router();
router.route("/mails").post(sendMails);

module.exports = router;
