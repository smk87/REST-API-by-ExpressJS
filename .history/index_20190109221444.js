const express = require("express");
const app = express(); //return object
const Joi = require("joi"); // return Joi class

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Vidly.");
});

app.listen(3000, () => {
  return "Server is running on port 3000...";
});
