const express = require("express");
const app = express(); //return object
const Joi = require("joi"); // return Joi class

app.use(express.json());

let genres = [
  { id: 1, name: "Rock" },
  { id: 2, name: "Jazz" },
  { id: 3, name: "Classic" }
];

app.get("/", (req, res) => {
  res.send("Welcome to Vidly.");
});

app.get("/api/genres/", (req, res) => {
  res.send(genres);
});

app.get("/api/genres/:id/", (req, res) => {
  const find = genres.find(c => c.id === parseInt(req.params.id));
  if (find) {
    res.send(find);
  } else {
    res.status(404).send("Not Found!");
  }
});

app.post("/api/genres/", (req, res) => {
  const result = isValidate(req.body);
  //console.log(result);
  if (!result.error) {
    const newGenre = {
      id: genres.length + 1,
      name: req.body.name
    };

    genres.push(newGenre);
    res.send(newGenre);
  } else {
    res.status(400).send(result.error.details[0].message);
  }
});

app.put("/api/genres/:id", (req, res) => {
  const find = genres.find(c => c.id === parseInt(req.params.id));
  if (find) {
    //console.log(find);

    const result = isValidate(req.body);

    if (!result.error) {
      genres[genres.indexOf(find)].name = req.body.name;
      res.send(find);
    } else {
      res.status(400).send(result.error.details[0].message);
    }
  } else {
    res.status(404).send("Not Found!");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});

app.delete("/api/genres/:id", (req, res) => {
  const find = genres.find(c => c.id === parseInt(req.params.id));
  if (find) {
    //console.log(find);

    genres.splice(genres.indexOf(find), 1);

    res.send(genres);
  }
});

function isValidate(input) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(input, schema);
}
