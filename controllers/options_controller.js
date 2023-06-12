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
        error: "Question not found",
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
      message: `Option ${option.answer} added successfully!!`,
      option,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Some error occurred while Adding Option.",
    });
  }
};

//delete option
module.exports.deleteOption = async (req, res) => {
  try {
    const { optionId } = req.params;

    //find option id in database
    const option = await Option.findById(optionId);

    //if option not found
    if (!option) {
      return res.status(404).json({
        success: false,
        error: "Option not found",
      });
    }

    //if option present then if option have votes
    if (option.votes > 0) {
      return res.status(400).json({
        success: false,
        message: `Option ${option.answer} can not be deleted as it has votes`,
      });
    }

    //delete the option
    await option.deleteOne({
      _id: optionId,
    });

    //find related question and remove option from options array
    const question = await Question.findByIdAndUpdate(
      option.questionRef,
      { $pull: { options: optionId } },
      { new: true }
    );

    //send response
    return res.status(200).json({
      success: true,
      message: `Option ${option.answer} deleted successfully from question ${question.title}`,
      data: option,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: err.message || "Some error occurred while deleting Option.",
    });
  }
};

//adding votes to the options
module.exports.addVote = async (req, res) => {
  try {
    const { optionId } = req.params;

    //check option exist in database
    const option = await Option.findById(optionId);
    if (!option) {
      return res.status(404).json({
        error: "Option not found",
      });
    }

    //if option exists the increment count of the vote for the given option
    option.votes += 1;

    //save option
    await option.save();
    return res.status(200).json({
      message: `Vote added to the option ${option.answer}`,
      data: option,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message || "Some error occurred while Adding Vote.",
    });
  }
};
