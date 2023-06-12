const Question = require("../models/question");

module.exports.home = async (req, res) => {
  try {
    //find all questions and populate their options
    const questions = await Question.find({}).populate("options");

    // Send the questions back in the response
    return res.status(200).json({
      success: true,
      data: questions,
    });
  } catch (err) {
    // Log any errors that occur and return an error response
    console.log(err);
    return res.status(500).send({
      message: "Internal Server Error",
    });
  }
};
