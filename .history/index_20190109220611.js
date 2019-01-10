const express = require("express");
const app = express(); //return object
const Joi = require("joi"); // return Joi class

app.use(express.json());

app.get("/", (req, res) => {});
