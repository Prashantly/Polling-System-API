const express = require("express");

const app = express();

const Port = process.env.PORT || 6000;

//listen to app
app.listen(Port, (err) => {
  if (err) {
    console.log("There is an error in starting the server.", err);
    return;
  }
  console.log(`Server is running on port ${Port}`);
});
