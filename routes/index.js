//require express
const express = require("express");
//require router
const router = express.Router();
const homeController = require("../controllers/home_controller");

router.get("/", homeController.home);
//Routes related to questions
router.use("/questions", require("./question"));

module.exports = router;
