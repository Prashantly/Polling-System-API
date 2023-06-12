//require express
const express = require("express");
//require router
const router = express.Router();

const QuestionsController = require("../controllers/questions_controller");
const OptionsController = require("../controllers/options_controller");

//get particular quastion by it's id
router.get("/:questionId", QuestionsController.getQuestion);

//create question
router.post("/create", QuestionsController.create);

//create option for particular question
router.post("/:questionId/options/create", OptionsController.createOption);

//delete question by it's id
router.delete("/:questionId/delete", QuestionsController.deleteQuestion);

module.exports = router;
