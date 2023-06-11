const Question = require("../models/question");
const Option = require("../models/option");

//Add option for specific question
module.exports.createOption = async (req, res) => {
  try {
    const { questionId } = req.params;
    const { answer } = req.body;

    // check question exist in database
    const question = await Question.findById(questionId);

    if (!question) {
      return res.status(404).json({
        message: "Question not found",
      });
    }

    //question found then create option
    const option = await Option.create({
      answer,
      questionRef: questionId,
    });

    // insert linkToVote field dynamically to option
    option.linkToVote = `${req.protocol}://${req.get("host")}/options/${
      option._id
    }/add_vote`;

    //save option
    await option.save();

    //adding option to question options array
    question.options.push(option);
    await question.save();

    return res.status(201).json({
      message: "Option created successfully",
      option,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Some error occurred while Adding Option.",
    });
  }
};
