//require express
const express = require("express");

//require router
const router = express.Router();

//Routes related to questions
router.get("/questions", require("./question"));

module.exports = router;
