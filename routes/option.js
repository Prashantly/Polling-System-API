//require express
const express = require("express");
//require router
const router = express.Router();
const optionController = require("../controllers/options_controller");

router.post("/:optionId/add_vote", optionController.addVote);

module.exports = router;
