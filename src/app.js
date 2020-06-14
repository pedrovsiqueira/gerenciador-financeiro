const app = require("express")();
const consign = require("consign");
const knex = require("knex");

const knexfile = require("../knexfile");

//TODO criar chaveamento dinâmico.
app.db = knex(knexfile.test);

consign({ cwd: "src", verbose: false })
  //adicionando os middlewares
  .include("./config/middlewares.js")
  .then('./services')
  //adicionando as rotas
  .then("./routes")
  //arquivo com as rotas
  .then("./config/routes.js")
  .into(app);

app.get("/", (req, res) => {
  res.status(200).send();
});

//log queries, response and erros for the tests on the db
// app.db
//   .on("query", (query) => {
//     console.log({
//       sql: query.sql,
//       bindings: query.bindings ? query.bindings.join(",") : "",
//     });
//   })
//   .on("query-response", (response) => console.log(response))
//   .on("error", (error) => console.log(error));

module.exports = app;
