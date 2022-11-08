const express = require("express");
const rotas = express.Router();

//ROTAS
rotas.get("/", (req, res) => {
  res.send("groups - GET");
});

rotas.post("/", (req, res) => {
  res.send("groups - POST");
});

rotas.put("/", (req, res) => {
  res.send("groups - PUT");
});

rotas.delete("/", (req, res) => {
  res.send("groups - DELETE");
});
module.exports = rotas;