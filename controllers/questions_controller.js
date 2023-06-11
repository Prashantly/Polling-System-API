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
      message: "Question created successfully",
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
