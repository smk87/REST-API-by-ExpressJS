const express = require("express");
const app = express(); //retur object

app.get("/", (req, res) => {
  res.send("Hello World");
});
