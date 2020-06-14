const app = require("express")();
const consign = require("consign");

consign({ cwd: "src", verbose: false })
  //adicionando os middlewares
  .include("./config/middlewares.js")
  //adicionando as rotas
  .then("./routes")
  //arquivo com as rotas
  .then("./config/routes.js")
  .into(app);

app.get("/", (req, res) => {
  res.status(200).send();
});

module.exports = app;
