//require express
const express = require("express");

//require router
const router = express.Router();

//Routes related to questions
router.use("/questions", require("./question"));

module.exports = router;
