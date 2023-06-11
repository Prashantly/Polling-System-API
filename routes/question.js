//require express
const express = require("express");
//require router
const router = express.Router();

const QuestionsController = require("../controllers/questions_controller");
const OptionsController = require("../controllers/options_controller");

router.get("/:questionId", QuestionsController.getQuestion);
router.post("/create", QuestionsController.create);

router.post("/:questionId/options/create", OptionsController.createOption);

module.exports = router;
