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

app.post("/api/genres/",(req,res)=>{

})

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});

function isValid(input){
  const schema={
    name: Joi.string.length(3).required();
  }
}