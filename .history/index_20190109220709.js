const express = require("express");
const app = express(); //return object
const Joi = require("joi"); // return Joi class

app.use(express.json());

app.get("/", (req, res) => {
  "Welcome to vidly!";
});

app.listen(3000, "Service running on port 3000...");
