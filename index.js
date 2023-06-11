//requier dotenv
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/mongoose");

const app = express();
const Port = 6000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", require("./routes"));

//listen to app
app.listen(Port, (err) => {
  if (err) {
    console.log("There is an error in starting the server.", err);
    return;
  }
  console.log(`Server is running on port ${Port}`);
});
