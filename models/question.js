const mongoose = require("mongoose");

//create question schema
const questionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    options: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Option",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
