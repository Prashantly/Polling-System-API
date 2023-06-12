//require express
const express = require("express");
//require router
const router = express.Router();
const optionController = require("../controllers/options_controller");

//add vote to the option
router.post("/:optionId/add_vote", optionController.addVote);

//delete option
router.delete("/:optionId/delete", optionController.deleteOption);

module.exports = router;
