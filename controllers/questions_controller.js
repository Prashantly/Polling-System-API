const Question = require("../models/question");
const Option = require("../models/option");

//create controller action for creating quetion
module.exports.create = async (req, res) => {
  try {
    const { title } = req.body;

    //CREATE question
    const question = await Question.create({ title });

    //save
    await question.save();
    //return question with mesage
    return res.status(201).json({
      message: `Question -> ${question.title} created successfully`,
      question,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the question.",
    });
  }
};

//get particular question by id and all its's options
module.exports.getQuestion = async (req, res) => {
  try {
    const { questionId } = req.params;

    //find question by id

    const question = await Question.findById(questionId).populate("options");

    if (!question) {
      return res.status(404).json({
        message: "Question not found",
      });
    }

    //if question found send the question in to response
    return res.status(200).json({
      message: "Question found successfully",
      question,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving the question.",
    });
  }
};

// delete question
module.exports.deleteQuestion = async (req, res) => {
  try {
    const { questionId } = req.params;
    //find question by id
    const question = await Question.findById(questionId).populate("options");

    //if question does not exist
    if (!question) {
      return res.status(404).json({
        message: "Question not found with id " + questionId,
      });
    }

    //if question exist then check any of the option have votes more than 0
    const options = question.options;

    for (let i = 0; i < options.length; i++) {
      if (options[i].votes > 0) {
        return res.status(400).json({
          success: false,
          message: `Question --->${question.title} can not be deleted as it has votes`,
        });
      }
    }

    //if question exist and it's all option votes have 0 votes delete question
    const deletedQuestion = await Question.deleteOne({
      _id: questionId,
    });

    //delete all options associated with given question
    const deletedOptions = await Option.deleteMany({
      questionRef: questionId,
    });

    //if question is deleted successfully send the response
    return res.status(200).json({
      message: `Question --->${question.title} deleted successfully`,
      deletedQuestion,
      deletedOptions,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message:
        err.message || "Some error occurred while deleting the question.",
    });
  }
};
