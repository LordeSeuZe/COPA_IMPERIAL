const express = require("express");
const rotas = express.Router();

//ROTAS
rotas.get("/", (req, res) => {
  res.send("teams - GET");
});

rotas.post("/", (req, res) => {
  res.send("teams - POST");
});

rotas.put("/", (req, res) => {
  res.send("teams - PUT");
});

rotas.delete("/", (req, res) => {
  res.send("teams - DELETE");
});
module.exports = rotas;