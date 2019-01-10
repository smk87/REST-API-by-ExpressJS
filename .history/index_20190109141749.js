const express = require("express");
const app = express(); //return object

const courses = [
  { ide: 1, name: "cours1" },
  { ide: 2, name: "cours2" },
  { ide: 3, name: "cours3" }
];
app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
