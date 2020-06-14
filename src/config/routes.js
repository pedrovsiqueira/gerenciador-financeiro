//ligando rotas do /routes/user com app
module.exports = (app) => {
  app
    .route("/users")
    .get(app.routes.users.findAll)
    .post(app.routes.users.create);
};
