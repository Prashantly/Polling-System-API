//require express
const express = require("express");
//require router
const router = express.Router();

const QuestionsController = require("../controllers/questions_controller");

router.post("/create", QuestionsController.create);

module.exports = router;
