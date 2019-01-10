const express = require("express");
const app = express(); //return object
const Joi = require("joi"); // return Joi class

app.use(express.json());

const courses = [
  { id: 1, name: "cours1" },
  { id: 2, name: "cours2" },
  { id: 3, name: "cours3" }
];
app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.post("/api/courses", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

app.get("/api/courses/:id", (req, res) => {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };

  Joi.validate(req.body, schema);

  if (!req.body.name || req.body.length < 3) {
    res.status(400).send("Name is required and should me minimum 3 characters");
    return;
  }

  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The course with the given ID was not found.");
  else res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
