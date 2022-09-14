const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here
app.get("/", (req, res) => {
  res.send("hello world");
});
app.post("/add", (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  let sum = num1 + num2;
  let message = "";
  let status = "";
  if (num2 === 0) {
    status = "Error";
    message = "Divide by zero";
  } else if (num1 < -1000000 || num2 < -1000000 || sum < -1000000) {
    status = "Error";
    message = "Underflow";
  } else if (num1 > 1000000 || num2 > 1000000 || sum > 1000000) {
    status = "Error";
    message = "Overflow";
  } else if (num1.toString() === num1 || num2.toString() === num2) {
    status = "Error";
    message = "Invalid data type";
  } else {
    status = "Success";
    message = "the sum of two numbers is";
  }
  res.json({
    status: status,
    message: message,
    sum: num1 + num2,
  });
});

app.post("/sub", (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  let diff = num1 - num2;
  let message = "";
  let status = "";
  if (num2 === 0) {
    status = "Error";
    message = "Divide by zero";
  } else if (num1 < -1000000 || num2 < -1000000 || diff < -1000000) {
    status = "Error";
    message = "Underflow";
  } else if (num1 > 1000000 || num2 > 1000000 || diff > 1000000) {
    status = "Error";
    message = "Overflow";
  } else if (num1.toString() === num1 || num2.toString() === num2) {
    status = "Error";
    message = "Invalid data type";
  } else {
    status = "Success";
    message = "the diff of two numbers is";
  }
  res.json({
    status: status,
    message: message,
    diff: num1 - num2,
  });
});

app.post("/multiply", (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  let multiply = num1 * num2;
  let message = "";
  let status = "";
  if (num2 === 0) {
    status = "Error";
    message = "Divide by zero";
  } else if (num1 < -1000000 || num2 < -1000000 || multiply < -1000000) {
    status = "Error";
    message = "Underflow";
  } else if (num1 > 1000000 || num2 > 1000000 || multiply > 1000000) {
    status = "Error";
    message = "Overflow";
  } else if (num1.toString() === num1 || num2.toString() === num2) {
    status = "Error";
    message = "Invalid data type";
  } else {
    status = "Success";
    message = "the multiplication of two numbers is";
  }
  res.json({
    status: status,
    message: message,
    multiply: num1 * num2,
  });
});

app.post("/divide", (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  let divide = num1 / num2;
  let message = "";
  let status = "";
  if (num2 === 0) {
    status = "Error";
    message = "Divide by zero";
  } else if (num1 < -1000000 || num2 < -1000000 || divide < -1000000) {
    status = "Error";
    message = "Underflow";
  } else if (num1 > 1000000 || num2 > 1000000 || divide > 1000000) {
    status = "Error";
    message = "Overflow";
  } else if (num1.toString() === num1 || num2.toString() === num2) {
    status = "Error";
    message = "Invalid data type";
  } else {
    status = "Success";
    message = "the division of two numbers is";
  }
  res.json({
    status: status,
    message: message,
    divide: num1 / num2,
  });
});
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
