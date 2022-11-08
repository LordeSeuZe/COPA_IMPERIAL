const express = require("express");
const teams = require("./rotas/teams");
const groups = require("./rotas/groups");
const app = express();

app.use("/teams", teams);
app.use("/groups", groups);

const port = 3000;
app.listen(port, console.log(`Servidor rodando na porta ${port}`));