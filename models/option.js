const mongoose = require("mongoose");

//create option schema
const optionSchema = new mongoose.Schema({
  answer: {
    type: String,
    required: true,
  },

  votes: {
    type: Number,
    default: 0,
  },

  questionRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true,
  },

  linkToVote: {
    type: String,
  },
});

const Option = mongoose.model("Option", optionSchema);

module.exports = Option;
