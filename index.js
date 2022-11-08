const express = require("express");
const teamsRoute = require("./rotas/teams");
const groupsRoute = require("./rotas/groups");
const app = express();


app.get("/", (req, res) => {
  res.send("Página inicial");
});

//get
app.get("/copa", (req, res) => {
  res.send("Copa-get");

});
//post
app.post("/copa", (req, res) => {
  res.send("Copa-post");

});
//put
app.put("/copa", (req, res) => {
  res.send("Copa-put");

});
//delete
app.delete("/copa", (req, res) => {
  res.send("Copa-delete");

});

app.use("/teams", teamsRoute);
app.use("/groups", groupsRoute);

const port = 3000;
app.listen(port, console.log(`Servidor rodando na porta ${port}`));

